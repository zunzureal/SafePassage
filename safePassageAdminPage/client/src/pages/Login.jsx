import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitBtn = (e) => {
        e.preventDefault();
        if (username && password) {
            axios.post('http://localhost:1510/apis/apis/login', {
                username, password
            }).then(res => {
                if(res.data.message ==="Login successfully"){
                    localStorage.setItem('token',res.data.token)
                    navigate('/dashboard')
                    
                }else{
                    alert('username or password wrong!')
                }
            })
        }else{
            alert('Please fill username and password in!')
        }
    };

    return (
        <div className="login-container">
            <div className="right-side">
                <form className="form-card mt-5">
                    username
                    <input
                        type="text"
                        name="username"
                        onChange={(e) => { setUsername(e.target.value) }}
                        className=""
                        placeholder="username"
                    />
                    password
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        className=""
                        placeholder="password"
                    />
                    <button
                        className=" bg-green-500 mt-5"
                        onClick={submitBtn}
                    >
                        submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
