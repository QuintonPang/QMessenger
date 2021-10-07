const users = [];

const addUser = ({id,room,name,}) =>{

    const existingUser = users.find((user)=>user.room===room&&user.name === name);

    if (existingUser) return {error:"Username is taken"};

    const user = {id,room,name};

    users.push(user);

    return { user };
}

const removeUser = ({id,room,name})=>{

    const index = users.findIndex((user)=>user.room===room&&user.name === name);

    if (index) return users.splice(index,1)[0];

    return { error:"No such user" };
}

// find() search through  child elements only, filter() search through all elements

const getUser = (id) => users.find((user)=>user.id===id);

const getUsersInRoom = (room) => users.find((user)=>user.room === room)


module.exports = { addUser, removeUser, getUser, getUsersInRoom };