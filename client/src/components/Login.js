import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", userLogin, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.message);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <form onSubmit={loginHandler}>
        <h1>Login</h1>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={userLogin.email}
          onChange={onChangeHandler}
        />
        <br />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={userLogin.password}
          onChange={onChangeHandler}
        />
        <br />
        <Link to={"/"}>Don't have an account? Click Here to Register</Link>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
