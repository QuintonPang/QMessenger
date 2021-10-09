import React from 'react';
import {useHistory} from 'react-router-dom';

const InfoBar = ({room}) =>{

    const history = useHistory();

    return(
        <div className='bg-primary text-center font-weight-bold' style={{height:'8vh'}}>

            <h1> 
                Room:{room}

                <img width='50' height='50' style={{position:'absolute',right:'10px'}} onClick={()=>history.push('/')} src='/logout.png'alt='logout'/>
            </h1>
        </div>
    )

}

export default InfoBar;