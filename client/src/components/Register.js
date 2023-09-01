import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'


const Register = (props) => {
    const navigate = useNavigate();
    const [userReg, setUserReg] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const onChangeHandler = (e) => {
        setUserReg({...userReg, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', userReg, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <form onSubmit={submitHandler}>
                <h1>Register</h1>
                <label>First Name: </label>
                <input type="text" name="firstName" value={userReg.firstName} onChange={onChangeHandler} /><br/>

                <label>Last Name: </label>
                <input type="text" name="lastName" value={userReg.lastName} onChange={onChangeHandler} /><br/>

                <label>Email: </label>
                <input type="email" name="email" value={userReg.email} onChange={onChangeHandler} /><br/>

                <label>Password: </label>
                <input type="password" name="password" value={userReg.password} onChange={onChangeHandler} /><br/>

                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" value={userReg.confirmPassword} onChange={onChangeHandler} /><br/>
                <button>Register</button>
                <br/>
                <Link to={'/login'}>Already have an account? Click Here to Login</Link>
            </form>
        </div>
    )
}

export default Register;