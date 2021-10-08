const express = require('express');
const http = require('http');

const app = express();
const router = require('./router');

const cors = require('cors');

app.use(router);

const PORT = process.env.PORT || 5000;

server = http.createServer(app);

const io = require('socket.io')(server,{
    cors:{
        origin: 'http://localhost:3000',
        //methods:['GET','POST'],
        //allowedHeaders:['my-custom-header'],
        //credentials:true,
    }
});

//const io = socketio(server);

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

io.on('connection',(socket)=>{

    console.log('socket:'+socket.id);

    socket.on('join',({room,name}, callback)=>{
        console.log(room+' '+ name);
        const {error,user} = addUser({id:socket.id,room,name});

        // called when error occured
        if(error){
             return callback(error);
        }

        socket.join(user.room);
        socket.emit('message',{user:'admin',text:`${user.name}, welcome to the chat!`});

        //sends to everyone besides the specific user
        socket.broadcast.to(user.room).emit({user:'admin',text:`${user.name} has joined the chat!`});

        io.to(user.room).emit('roomData',{room:user.room, users:getUsersInRoom(user.room)});
    })
    
    console.log("Someone connected!");

    socket.on('sendMessage',(message,callback)=>{

        const user = getUser(socket.id);

        console.log("Message successfully sent by "+user.name);

        // to everyone including user himself
        io.to(user.room).emit('message',{user:user.name,text:message});

        io.to(user.room).emit('roomData',{room:user.room, users:getUsersInRoom(user.room)});

        callback();
    })

    // for specific socket
    socket.on('disconnect',()=>{
        console.log("Someone disconnected!");
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left the chat`});
        }
    }
    )
});


server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}!`);
})