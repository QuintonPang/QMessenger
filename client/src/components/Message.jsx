import React from 'react';
import ReactEmoji from 'react-emoji';

const Message =({message:{user,text},name})=>{

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user=== trimmedName){
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser?(
            <div>
                <h4 style={{position:'relative',left:"600px"}}>
                    {user}:
                    {ReactEmoji.emojify(text)}
                </h4>
            </div>
        ):(
            <div>
                <h4>
                    {user}:
                    {ReactEmoji.emojify(text)}
                </h4>
            </div>
        )
    )

}

export default Message;