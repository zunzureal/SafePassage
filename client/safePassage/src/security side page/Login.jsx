import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/Data_security_.svg';
import myImage from '../assets/safepass.png';
import '../css/Security.css';

function SecurityLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const loginBtn = () => {
        if (username && password) {
            axios.post('http://localhost:4444/securityLogin', {
                username, password
            }).then(res => {
                if (res.data.message === "Login successfully") {
                    localStorage.setItem('token', res.data.token);
                    navigate('/security/gooddelivery');
                } else {
                    alert('username or password wrong!')
                }
            })
        } else {
            alert("Please fill in all data!")
        }
    }

    return (
        <header className='marginall'>
            <div className="container">
                <nav>
                    <div className="logo">
                        <img src={myImage} alt="image" />
                    </div>
                    <div className="langauge">
                        <select id="langauge_select">
                            <option value="Eng">English(UK)</option>
                            <option value="Eng">Thai(TH)</option>
                            <option value="Eng">Japanese(JP)</option>
                            <option value="Eng">Chinese(CH)</option>
                        </select>
                    </div>
                    <div className='bgImage'>
                        <img src={bgImage} alt="background" />
                    </div>
                </nav>

                <section className="header-info">
                    <div className="header-title">
                        <h1>Sign in</h1>
                    </div>
                    <div className="header-or">
                        <h3>OR</h3>
                    </div>
                    <form id='form' className='flexx flexx-col'>
                        <input type='text' placeholder='username' onChange={(e) => { setUsername(e.target.value) }}></input>
                        <input type='text' placeholder='password' onChange={(e) => { setPassword(e.target.value) }}></input>
                    </form>
                    <div className="header-btn-create2">
                        <button className="sign-account" onClick={loginBtn}>Sign in</button>
                    </div>


                </section>
            </div>
        </header>

    );
}

export default SecurityLogin;