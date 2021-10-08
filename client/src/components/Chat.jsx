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

        alert('Use effect 1 ran');

        socket = io(ENDPOINT);
        
        alert('room:'+r+' name:'+n);

        socket.emit('join', {room:r, name:n}, ({error})=>{
            
            if(error){
                alert(error);
            }
        });

        return() =>{
            alert('Disconnected');

            // reserved
            socket.disconnect();
            
        }
    },[ENDPOINT, r, n]);

    
    //receive messages
    useEffect(()=>{
        
        alert('Use effect 2 ran');

        socket.on('message',(message)=>{
            alert('Messages updated!');
            setMessages(messages=>[...messages,message]);
        })

        socket.on('roomData',(roomData)=>{
            alert('Users list updated!');
            alert(roomData.users);
        })
    },[]); // empty array means it runs every render

    

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
            <Input message={message} sendMessage={sendMessage} setMessage={setMessage}/>
            <Messages messages={messages} name={name}/>
            <UsersList users={users}/>
        </>
    );
    
}

export default Chat;


