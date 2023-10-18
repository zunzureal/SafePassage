import React from 'react';
import '../css/Security.css'
import myImage from '../assets/safepass.png';

function SecurityLogin(){
    return(
        <header>
        <div className="container">
            <nav>
                <div class="logo"> 
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
            </nav>

            <section className="header-info">
                <div className="header-title">
                    <h1>Sign in</h1>
                </div>
                <div className="header-btn">
                    <a href="#" className="with-google">Sign in with Google</a>
                    <a href="#" className="with-facebook">Sign in with Facebook</a>
               </div>
               <div className="header-or">
                    <h3>OR</h3>
               </div>
                <form id='form' className='flex flex-col'>
                  <input type='text' placeholder='username'></input>
                  <input type='text' placeholder='password'></input>
                </form>
               <div className="header-btn-create">
                    <a href="#" className="sign-account">Sign in</a>
               </div>
               

            </section>
        </div>
    </header>

    );
}

export default SecurityLogin;