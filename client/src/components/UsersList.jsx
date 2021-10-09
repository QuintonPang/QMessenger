import React from 'react';

const UsersList =({users}) =>{

    return(
        <div className='bg-dark' style={{height:'5vh'}}>
            <h3 className='text-light'>
                Users:{' '}
         {Object.values(users).map(user=>{
             return(
                    <>
                        {user.name+'   '}
                    </>
                     )
                    })}
            </h3>
        </div>
    );
}

export default UsersList;