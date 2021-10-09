import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './animations.css';

const Join = () =>{

    const [ room, setRoom ] = useState('');
    const [ name, setName ] = useState('');

    const history = useHistory();

    return(
        <div className='d-flex flex-column align-items-center justify-content-center' id='background' style={{height:"100vh"}}>
        <div className='bg-light h-50 w-50 d-flex flex-column justify-content-center align-items-center'>
            <h1>Join Room</h1>
            <h3>
                <input placeholder='Enter room code' type='text' onChange={(event)=>{setRoom(event.target.value)}} />
            </h3>
            <h3>
                <input placeholder='Enter your name' type='text' onChange={(event)=>{setName(event.target.value)}} />
            </h3>

            {/* event.preventDefault() prevents the button from being clicked */}
            <button type='submit' onClick={(event)=>(name!==''||room!=='')?history.push(`/chat/room=${room}&name=${name}`):event.preventDefault()}>
                JOIN
            </button>
        </div>
        </div>
    );
    
}

export default Join;