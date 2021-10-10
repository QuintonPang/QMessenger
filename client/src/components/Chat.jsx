import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import InfoBar from './InfoBar';
import Messages from './Messages';
import Input from './Input';
import UsersList from './UsersList';

const ENDPOINT = 'http://localhost:5000';
    
let socket;

const Chat = () =>{


    const [ room, setRoom ] = useState('');
    const [ name, setName ] = useState('');

    const [ users, setUsers ] = useState([]);
    
    const [ messages, setMessages ] = useState([]);
    const [ message, setMessage ] = useState('');
    
    const { room:r, name:n } = useParams();
    
    useEffect(()=>{

        // alert('Use effect 1 ran');

        socket = io(ENDPOINT);
        
        // alert('room:'+r+' name:'+n);

        setRoom(r);
        setName(n);

        socket.emit('join', {room:r, name:n}, ({error})=>{

            // alert('join event is emitted');
            
            if(error){
                alert(error);
            }
        });

        return() =>{
            // alert('Disconnected');

            // reserved
            socket.disconnect();
            
        }
    },[ENDPOINT, r, n]);

    
    //receive messages
    useEffect(()=>{
        
        // alert('Use effect 2 ran');

        socket.on('message',(message)=>{
            // alert('Messages updated!');
            setMessages(messages=>[...messages,message]);
        })
        
    },[]); // empty array means it runs every render
    
    useEffect(()=>{
        
        //alert("Use effect 3 ran!");
        
        socket.on('roomData',(roomData)=>{
            // alert('Users list updated!');
            // alert(roomData);

            // roomData is object of objects

            Object.values(roomData).map(user=>{
                setUsers(user);
            })
        })


    },[messages]); // runs when every message is fetched

    // function for sending message

    const sendMessage = (event) =>{

        // prevent default behaviour
        event.preventDefault();

        
        if(message){
            socket.emit('sendMessage',message,()=>{
                // reset message box when sent
                setMessage('');
            })
        }
        
    }
    
    console.log(...messages,message);

    return(
        <>
            <InfoBar room={room}/>
            <UsersList users={users}/>
            <Messages messages={messages} name={name}/>
            <Input message={message} sendMessage={sendMessage} setMessage={setMessage}/>
        </>
    );
    
}

export default Chat;


