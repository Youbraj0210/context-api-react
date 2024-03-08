import React from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Signup = () => {
  const { setuser } = useContext(UserContext);

  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setuser({
      username,
      password,
    });
  };
  return (
    <>
      <label htmlFor="username">username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <br />
      <label htmlFor="password">password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <br />
      <button onClick={submitHandler}>Signin</button>
    </>
  );
};

export default Signup;
