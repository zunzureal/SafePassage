import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo White with Name.png";
import "../css/HouseOwner.css";

function HouseOwnerLogin() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginBtn = (e) => {
    e.preventDefault();
    if (username && password) {
      axios.post('http://localhost:4444/apis/login', {
        username, password
      }).then(res => {
        if (res.data.message === "Login successfully") {
          localStorage.setItem('token', res.data.token)
          navigate('/houseowner/profile')
        } else {
          alert('username or password wrong')
        }
      })
    } else {
      alert('pleas fill in username and password.')
    }
  }

  return (
    <div className='houseowner-login-container'>

      <div className='desktop'>
        <div className="left-side">{/* Left-side */}
          <img src={Logo} alt="" />
        </div>
        <div className="right-side">{/* Right side */}
          <div className="header">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="title">
              Welcome back
            </div>
          </div>
          <div className="input">
            <p>Username</p>
            <input
              type="text"
              placeholder='Username'
              onChange={(e) => { setUsername(e.target.value) }}
            /> <br /> <br />
            <p>Password</p>
            <input
              type="password"
              placeholder='Password'
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <div className="bottom">
            <button onClick={loginBtn}>Login</button>
          </div>
        </div>
      </div>

      <div className='mobile'>
        <div className="header">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="input">
          <p>Username</p>
          <input
            type="text"
            placeholder='Username'
            onChange={(e) => { setUsername(e.target.value) }}
          /> <br /> <br />
          <p>Password</p>
          <input
            type="password"
            placeholder='Password'
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <div className="bottom">
          <button onClick={loginBtn}>Login</button>
        </div>
      </div>

    </div>
  )
}

export default HouseOwnerLogin