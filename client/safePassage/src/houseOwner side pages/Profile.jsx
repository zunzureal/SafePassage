import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/Logo Black with Name.png"
import house from "../assets/broker.png"
import delivery from "../assets/delivery.png"
import profile from "../assets/profile.png"
import visitors from "../assets/tour-guide.png"
import "../css/profile.css"


function Profile() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('houseNo')


    useEffect(() => {
        if (!token) {
            navigate('/houseowner/login')
        }
    }, [])

    useEffect(()=>{
        axios.get('http://localhost:4444/profile')
        .then(res=>{
            console.log(res.data)
            setUsername(res.data.UserName)
            console.log(username)
        })
    },[])

    const logoutBtn = (e) => {
        e.preventDefault();
        localStorage.setItem('token', '');
        navigate('/houseowner/login')
    }
    const visitorClick = (e) => {
        e.preventDefault();
        navigate('/houseowner/profile/visitor')
    }
    const deliveryClick = (e) => {
        e.preventDefault()
        navigate('/houseowner/profile/grabdelivery')
    }
    const houseownerClick = (e) => {
        e.preventDefault()
        navigate('/houseowner/profile/houseowner')
    }

    return (
        <div className="container">
            <div className="left-side2">
                <img src={logo} alt="" />

            </div>
            <div className="item-right">
                <div className="heads">
                    <div className='welcome'>
                        <div className='profile'>
                            <img src={profile} className='profilepicture' /> <br></br>
                        </div>
                        <div className='land'>
                            <div className='ben'>welcome</div>
                            <div >{username}</div>
                        </div>
                    </div>

                </div>
                <div className='feed'>
                    <div className='visitors' onClick={visitorClick}>
                        <div className='visitors-img'>
                            <img src={visitors} alt="" width="50px" height="50px" /> <br></br>
                        </div>
                        <div className="header-btn-create">
                            <a href="#" className="visitorstext">Visitors</a>

                        </div>
                    </div>

                    <div className='delivery' onClick={deliveryClick}> 
                        <div className='delivery-img'>
                            <img src={delivery} alt="" width="50px" height="50px" /> <br></br>
                        </div>
                        <div className="header-btn-create">
                        <a href="#" className="logout-account">Delivery</a>
                        </div>
                    </div>

                    <div className='house' onClick={houseownerClick}>
                        <div className='house-img'>
                            <img src={house} alt="" width="50px" height="50px" /> <br></br>
                        </div>
                        <div className="header-btn-create">
                            <a href="#" className="logout-account">House Owner</a>

                        </div>
                    </div>

                </div>
                <div className='bottom'>

                    <div className="header-btn-create"onClick={logoutBtn} >
                        <a href="#" className="logout-account">Logout</a>

                    </div>
                </div>


            </div>

        </div>






    )
}
export default Profile

/* 
<div className='select'>
            <div className='status'>
                <div className='Profile'>
                    <img src="" alt="" />
                    <p className='welcome'>Welcome <span className='userName font-bold text-lg'> {userName} </span> </p>
                </div>
            </div>

            <div
                className={visitorstate ? "hover-visitor" : "visitor"}
                onMouseEnter={() => { setVisitorstate(true) }}
                onMouseLeave={() => { setVisitorstate(false) }}
            >
                <button onClick={visitorClick}> Visitor </button>
            </div>

            <div
                className={deliverystate ? "hover-delivery" : "delivery"}
                onMouseEnter={() => { setDeliverystate(true) }}
                onMouseLeave={() => { setDeliverystate(false) }}>
                <button onClick={deliveryClick} > Delivery </button>
            </div>

            <div
                className={houseownerstate ? "hover-houseowner" : "houseowner"}
                onMouseEnter={() => { setHouseownerstate(true) }}
                onMouseLeave={() => { setHouseownerstate(false) }}>
                <button onClick={houseownerClick} > House Owner </button >
            </div>

            <button onClick={logoutBtn}>Logout</button>
        </div>
*/