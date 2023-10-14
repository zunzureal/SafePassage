import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()
    const securityLoginBtn = (e) => {
        e.preventDefault();
        navigate('/security/login');
    };
    function houseLoginBtn (){
        navigate('/houseowner/profile')
    }

    return (
        <div>
            <button onClick={houseLoginBtn} className='border-2 border-black'>House owner</button>
            <button onClick={securityLoginBtn} className='border-2 border-black ml-2'>Security</button>
        </div>
    )
}

export default Home