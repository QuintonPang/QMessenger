import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const Messages = ({messages,name}) =>{

    return(
        <div className="bg-light" style={{ height:'79vh',overflowY:'scroll'}}>
           
                {messages.map((message,i)=>{
                    return(
                            <Message key={i} message={message} name={name}/>
                            )
                        })}
        
        </div>
    )
}

export default Messages;