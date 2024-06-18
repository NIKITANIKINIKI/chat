let users = [];

const findUser=(user)=>{

  const userName = user.name.trim().toLowerCase();
  const userRoom = user.room.trim().toLowerCase();

  return users.find(
    (e) =>
      e.name.trim().toLowerCase() == userName &&
      e.room.trim().toLowerCase() == userRoom
  );
}

const addUser = (user) => {
  
  currentUser=findUser(user)

  !currentUser && users.push(user)

  return {isSuccess: !!currentUser, user:currentUser || user}

};

const removeUser=(user)=>{
  const currentUser=findUser(user)

  if(currentUser){
    users=users.filter(({room, name})=> room==currentUser.room && name!==currentUser.name )
  }
  return currentUser;
}

module.exports={addUser,findUser, removeUser}