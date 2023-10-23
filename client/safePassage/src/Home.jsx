import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

import Model from './assets/FreeVector-Modern-House.ai.png';
import './css/Home.css'

function Home() {
    const navigate = useNavigate();

    const securityLoginBtn = (e) => {
        e.preventDefault();
        navigate('/security/login');
    };
    function houseLoginBtn (){
        navigate('/houseowner/login')
    }

    return (
        <div className='px-24'>
            <Navbar/>
            <div className='topic'>
            <div className=' flex mt-32 justify-between'>
            <div className=''>
                <p className=' text-7xl text-slate-800'><span className='textSafe'>Safe</span><span className=' font-bold'>Passage</span> <br /><span className='textHomeSize'>Boundless between Wireless and Security</span></p>
                {/*
                <div className=' my-10'>
                    <p className=' text-xl text-slate-600'>
                        Our maketing and sales automations <br />
                        help you scale your outreach to get <br />
                        more leads for your company.
                    </p>
                </div>*/}
                <div>
                    <button onClick={securityLoginBtn} className=' SecurityLoginBTN1 text-white px-8 py-4 rounded-md'>Security</button>
                </div>
                <div className='SecurityLoginBTN'>
                    <button onClick={houseLoginBtn} className=' SecurityLoginBTN2 text-white px-8 py-4 rounded-md'>House Owner</button>
                </div>
            </div>
            <div className="w-1/2">
                <img src={Model} alt="" className='modelanimation' />
            </div>
            </div>
            </div>
        </div>
    );
}

export default Home;
