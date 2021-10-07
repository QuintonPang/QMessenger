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
    methods:['GET','POST'],
    allowedHeaders:['my-custom-header'],
    credentials:true,
    }
});

//const io = socketio(server);

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');
const { userInfo } = require('os');
const { SocketAddress } = require('net');

io.on('connection',(socket)=>{
    
    socket.on('join',({room,name}, callback)=>{
        console.log(room+' ' + name);
        const {error,user} = addUser({id:socket.id,room,name});

        console.log(user.name);
    
        // called when error occured
        if(error){
             return callback(error);
        }

        socket.join(user.room);
        socket.emit('message',{user:'admin',text:`${user.name}, welcome to the chat!`});

        //sends to everyone besides the specific user
        socket.broadcast.to(user.room).emit({user:'admin',text:`${user.name} has joined the chat!`});
    })
    
    console.log("Someone connected!");

    socket.on('sendMessage',(message,callback)=>{

        const user = getUser(socket.id);

        // to everyone including user himself
        io.to('user.room').emit('message',{user:user.name,text:message});

        callback();
    })

    // for specific socket
    socket.on('disconnect',()=>{
        console.log("Someone disconnected!");
    }
    )
})


server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}!`);
})