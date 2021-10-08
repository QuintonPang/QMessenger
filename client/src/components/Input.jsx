import React from 'react';

const Input =({message,setMessage,sendMessage})=>{

    return(
        <input
        value={message}
        placeholder="Type your message..."
        onChange={(event)=>{setMessage(event.target.value)}} 
        onKeyPress={event=>event.key==='Enter'?sendMessage(event):null }
        />
     
    );

}

export default Input;