import React from 'react';

const UsersList =({users}) =>{

    return(
        <div className='bg-dark' style={{height:'5vh'}}>
            <h3 className='text-light'>
                Users:{' '}
         {Object.values(users).map((user,index)=>{
             return(
                    index!==Object.values(users).length-1 ?
                    <>
                        {user.name+', '}
                    </>:
                    <>
                        {user.name}
                    </>
                     )
                    })}
            </h3>
        </div>
    );
}

export default UsersList;