import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Join = () =>{

    const [ room, setRoom ] = useState('');
    const [ name, setName ] = useState('');

    const history = useHistory();

    return(
        <>
            <h1>Join Room</h1>
            <h3>
                <input placeholder='Enter room code' type='text' onChange={(event)=>{setRoom(event.target.value)}} />
            </h3>
            <h3>
                <input placeholder='Enter your name' type='text' onChange={(event)=>{setName(event.target.value)}} />
            </h3>

            {/* event.preventDefault() prevents the button from being clicked */}
            <button type='submit' onClick={(event)=>(name!==''||room!=='')?history.push(`/chat/id=${room}&name=${name}`):event.preventDefault()}>
                JOIN
            </button>
        </>
    );
    
}

export default Join;