import { React, useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user)

  if(user){
    return <h2>Hello {user.username}</h2>
  }
  return <h2>Log in please</h2>
};

export default Profile;
