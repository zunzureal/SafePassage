import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()
    const loginBtn = (e) => {
        e.preventDefault();
        navigate('/security/login');
    };

    return (
        <div>
            <button onClick={loginBtn}>Login</button>
        </div>
    )
}

export default Home