import React from 'react';
import ReactEmoji from 'react-emoji';

const Message =({message:{user,text},name})=>{

    let isSentByCurrentUser = false;
    let isSentByAdmin = false;

    const trimmedName = name.trim().toLowerCase();

    if(user=== trimmedName){
        isSentByCurrentUser = true;
    }

    if(user==='Admin'){
        isSentByAdmin = true;
    }

    return(
            <div className='row border  border-primary w-100' style={{wordWrap: 'break-word'}}>
                {/*<div className='col-2 bg-warning'/> */}    
                <div >
        {isSentByCurrentUser?(
           
                    <h4 className='col-12 text-success'>
                
                        {user+': '}
                        {ReactEmoji.emojify(text)}
                         </h4>
                        
        ):(
            isSentByAdmin?(
                <h4 className='col-12 text-warning'>
                    {user+': '}
                    {ReactEmoji.emojify(text)} 
                </h4>
                
        ):(
            <h4>
                    {user+': '}
                    {ReactEmoji.emojify(text)}
                    </h4>
            
        )
               
        )}


                </div>
            </div>
    )

}

export default Message;