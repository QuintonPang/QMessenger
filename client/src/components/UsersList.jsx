import React from 'react';

const UsersList =({users}) =>{

    return(
        <>
         {Object.values(users).map(user=>{
             return(
                 <h2>
                     {user.name}
                 </h2>
             )
         })}
        </>
    );
}

export default UsersList;