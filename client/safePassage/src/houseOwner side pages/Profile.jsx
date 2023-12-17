import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/Logo Black with Name.png"
import visitors from "../assets/Visitors 1.png"; //! this one
import house from "../assets/broker.png"
import home from "../assets/houses.png"; //! this one
import profile from "../assets/profile.png"
import delivery from "../assets/removal.png"; //! this one
import triangle from "../assets/triangle.png"; //!this one
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
        <div className="profile-container">
            <div className='profile-desktop'>
                <div className="left-side2">
                    <img src={logo} alt="" width="200px" height="200px" />
                    <img src={home} alt="" />
                </div>
                <div className="item-right">
                    <div className="heads">
                        <div className='welcome'>
                            <div className='profile'>
                                <img src={profile} className='profilepicture' /> <br></br>
                            </div>
                            <div className='land'>
                                <div className='ben'>Welcome</div>
                                <div> <span>User </span>{username}</div>
                            </div>
                        </div>

                    </div>
                    <div className='feed'>
                        <div className='visitors' onClick={visitorClick}>
                            <div className='visitors-img'>
                                <img src={visitors} alt="" width="50px" height="50px" style={{ background: "#17C964", borderRadius: "50%" }} /> <br></br>
                            </div>
                            <div className='triangle-img'>
                                <img src={triangle} alt="" width="30px" height="30px" /> <br></br>
                            </div>
                            <div className="header-btn-create">
                                <a href="#" className="visitorstext">Visitors</a>

                            </div>
                        </div>

                        <div className='delivery' onClick={deliveryClick}>
                            <div className='delivery-img'>
                                <img src={delivery} alt="" width="60px" height="60px" /> <br></br>
                            </div>
                            <div className='triangle-img'>
                                <img src={triangle} alt="" width="30px" height="30px" /> <br></br>
                            </div>
                            <div className="header-btn-create">
                                <a href="#" className="logout-account">Delivery</a>
                            </div>
                        </div>

                        <div className='house' onClick={houseownerClick}>
                            <div className='house-img'>
                                <img src={house} alt="" width="50px" height="50px" style={{ background: "#17C964", borderRadius: "50%" }} /> <br></br>
                            </div>
                            <div className='triangle-img'>
                                <img src={triangle} alt="" width="30px" height="30px" /> <br></br>
                            </div>
                            <div className="header-btn-create">
                                <a href="#" className="logout-account">House Owner</a>

                            </div>
                        </div>

                    </div>
                    <div className='bottom'>
                        <button className="header-btn-create" onClick={logoutBtn} >logout</button>
                    </div>
                </div>
            </div>
            <div className="profile-mobile">

                <div className="top">
                    <div>
                        <img src={logo} alt="" width="190px" height="190px" />
                    </div>
                    <div className="right">
                        
                    </div>


                </div>

                <div className="middle">
                    <div className="houre-img">
                        <img src={home} alt="" width="400px" height="400px" />
                    </div>

                </div>

                <div className="bottom">
                    <div className="welcome">
                        <div className='profile-img'>
                            <img src={profile} width="50px" height="50px" style={{ background: "#17C964", borderRadius: "50%" }} /> <br></br>
                            <div className='land'>
                                <div className='ben'>Welcome</div>
                                <div className="mith"> <span style={{ color: "white" }}>User </span>{username}</div>
                            </div>
                        </div>
                    </div>

                    <div className="visitors" onClick={visitorClick}>
                        <div className="visitors-img">
                            <img src={visitors} alt="" width="50px" height="50px" style={{ background: "#17C964", borderRadius: "50%" }} /> <br></br>
                            <div className="visitors-create">
                                <a href="#" className="visitorstext">Visitors</a>
                            </div>
                            <div className='triangle-img'>
                                <img src={triangle} alt="" width="20px" height="20px" /> <br></br>
                            </div>
                        </div>

                    </div>


                    <div className="delivery" onClick={deliveryClick}>
                        <div className="delivery-img">
                            <img src={delivery} alt="" width="65px" height="65px" /> <br></br>
                            <div className="delivery-create">
                                <a href="#" className="logout-account">Delivery</a>
                            </div>
                            <div className='triangle-img'>
                                <img src={triangle} alt="" width="20px" height="20px" /> <br></br>
                            </div>
                        </div>
                    </div>


                    <div className="house" onClick={houseownerClick}>
                        <div className="house-img">
                            <img src={house} alt="" width="50px" height="50px" style={{ background: "#17C964", borderRadius: "50%" }} /> <br></br>
                            <div className="house-create">
                                <a href="#" className="logout-account">House Owner</a>
                            </div>
                            <div className='triangle-img'>
                                <img src={triangle} alt="" width="20px" height="20px" /> <br></br>
                            </div>
                        </div>
                    </div>

                    <div className="logout">
                        <button className="logout-create" onClick={logoutBtn} >Logout</button>
                    </div>
                </div>
            </div>

        </div>






    )
}
export default Profile