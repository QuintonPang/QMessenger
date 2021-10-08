import React from 'react';
import {useHistory} from 'react-router-dom';

const InfoBar = ({room}) =>{

    const history = useHistory();

    return(
        <>

            <h3> {room} </h3>

            <img onClick={()=>history.push('/')} src='/logout.png'alt='logout'/>
        
        </>
    )

}

export default InfoBar;