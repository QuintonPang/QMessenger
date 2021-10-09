import React from 'react';

const Input =({message,setMessage,sendMessage})=>{

    return(
        <div>
            <input
             className='w-100 rounded'
             style={{height:'50px'}}
            value={message}
            placeholder="Type your message..."
            onChange={(event)=>{setMessage(event.target.value)}} 
            onKeyPress={event=>event.key==='Enter'?sendMessage(event):null }
            />
        </div>
    );

}

export default Input;