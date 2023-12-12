import React from 'react';
import { useNavigate } from 'react-router-dom';
import Model from './assets/FreeVector-Modern-House.ai.png';
import blackLogo from './assets/Logo Black with Name.png';
import Navbar from './components/Navbar';
import './css/Home.css';

function Home() {
    const navigate = useNavigate();

    const securityLoginBtn = (e) => {
        e.preventDefault();
        navigate('/security/login');
    };
    function houseLoginBtn() {
        navigate('/houseowner/login')
    }
    const url = "https://media.istockphoto.com/id/165794938/vector/cute-cottage.jpg?s=612x612&w=0&k=20&c=FJFortZtQ13Bbqns0RPcPMbZC6Mg2rmA7ClwgM34cSQ="

    return (
        <div className=''>
            <div className='px-24'>
                <div className='home-page-desktop'>
                    <Navbar />
                    <div className='topic'>
                        <div className=' flex mt-32 justify-between'>
                            <div className=''>
                                <p className=' text-7xl text-slate-800'><span className='textSafe'>Safe</span><span className=' font-bold'>Passage</span> <br /><span className='textHomeSize'>Boundless between Wireless and Security</span></p>
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
            </div>
            <div className='home-page-mobile'>
                <div className='flex flex-col h-screen w-full '>
                    <div className=' h-1/5'>
                        <img className="logo  ml-4" src={blackLogo} alt="" />
                    </div>
                    <div className='h-3/5'>
                        <img src={url} alt="" className=''/>
                    </div>
                    <div className='h-1/5'>
                        <button className='button mt-8 ml-9' onClick={houseLoginBtn}>House owner</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
