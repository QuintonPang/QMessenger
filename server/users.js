const users = [];

const addUser = ({id,room,name}) =>{

    room = room.trim().toLowerCase();
    name = name.trim().toLowerCase();

    const existingUser = users.find((user)=>user.room===room&&user.name === name);
    
    if (existingUser) return {error:"Username is taken"};

    const user = {id,room,name};

    console.log('Current user: '+user.name);

    users.push(user);

    console.log(users[0]+' pushed');

    return { user };
}

const removeUser = (id)=>{

    const index = users.findIndex((user)=>user.id===id);

    if (index) return users.splice(index,1)[0];

    return { error:"No such user" };
}

// find() search through  child elements only, filter() search through all elements

const getUser = (id) => {
    
    console.log('\nGetting user...');
    console.log('Current user:' +id);
    console.log('User located at first position:'+users[0]);
    return users.find((user)=>user.id===id);

}

const getUsersInRoom = (room) => {
    
    console.log('Users in room: '+users.filter((user)=>user.room === room));
    return users.filter((user)=>user.room === room);
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom };