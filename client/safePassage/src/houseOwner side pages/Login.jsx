import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackLogo from "../assets/Logo Black with Name.png";
import "../css/HouseOwner.css";
import Swal from 'sweetalert2';

function HouseOwnerLogin() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const homeBtn = (e)=>{
    e.preventDefault();
    navigate('/')
  };
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
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'กรุณากรอก Username และ Pasword',
      });
    }
  }

  return (
    <div className='houseowner-login-container'>

      <div className='desktop'>
        <div className="left-side">{/* Left-side */}
          <img src={BlackLogo} alt="" onClick={homeBtn}/>
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
        <div className="header" onClick={homeBtn}>
          <img src={BlackLogo} alt="Logo" />
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