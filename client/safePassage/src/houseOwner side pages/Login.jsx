import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import BlackLogo from "../assets/Logo Black with Name.png";
import WhiteLogo from "../assets/Logo White with Name.png";
import "../css/HouseOwner.css";

function HouseOwnerLogin() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const homeBtn = (e) => {
    e.preventDefault();
    navigate('/')
  };
  const runBothFunction = async () => {
    await passData();
    await loginBtn();
  }
  const loginBtn = async (e) => {
    if (username && password) {
      await axios.post('/apis/login' , {
        username, password
      }).then(res => {
        if (res.data.message === "Login successfully") {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('houseNo', res.data.houseNo)
          localStorage.setItem('password', res.data.password)
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

  const passData = () => {

  }


  return (
    <div className='houseowner-login-container'>
      <div className='desktop'>
        <div className="left-side">{/* Left-side */}
          <img src={BlackLogo} alt="" onClick={homeBtn} />
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
            <button onClick={runBothFunction}>Login</button>
          </div>
        </div>
      </div>

      <div className='mobile'>
        <div className="header" onClick={homeBtn}>
          <img src={WhiteLogo} alt="Logo" />
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
          <button onClick={runBothFunction}>Login</button>
        </div>
      </div>

    </div>
  )
}

export default HouseOwnerLogin