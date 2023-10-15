import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile(type) {

    const navigate = useNavigate()
    const [userName, setCount] = useState('Bro')
    const [visitorstate, setVisitorstate] = useState(false)
    const [deliverystate, setDeliverystate] = useState(false)
    const [houseownerstate, setHouseownerstate] = useState(false)

    const token = localStorage.getItem('token');
    
    useEffect(()=>{
        if(!token){
            navigate('/houseowner/login')
        }
    },[])
    const logoutBtn = (e)=>{
        e.preventDefault();
        localStorage.setItem('token','');
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
    )
}
export default Profile