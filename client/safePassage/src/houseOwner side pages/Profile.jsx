import React, { useState } from 'react'

function Profile() {
    const [userName, setCount] = useState('')
    const [visitorstate, setVisitorstate] = useState(false)
    const [deliverystate, setDeliverystate] = useState(false)
    const [houseownerstate, setHouseownerstate] = useState(false)
    const visitorClick = () => {
        <Link to="/visitorInterface" />
    }
    const deliveryClick = () => {
        <Link to="/deliveryInterface" />
    }
    const houseownerClick = () => {
        <Link to="/houseownerInterface" />
    }

    return (
        <div className='select'>
            <div className='status'>
                <div className='Profile'>
                    <img src="" alt="" />
                    <p className='welcome'>Welcome <p className='userName'> {userName} </p> </p>
                </div>
            </div>

            <div className={visitorstate ? "hover-visitor" : "visitor"}
                onMouseEnter={() => { setVisitorstate(true) }} onMouseLeave={() => { setVisitorstate(false) }}>
                <button onclick={visitorClick}> Visitor </button>
            </div>

            <div className={deliverystate ? "hover-delivery" : "delivery"}
                onMouseEnter={() => { setDeliverystate(true) }} onMouseLeave={() => { setDeliverystate(false) }}>
                <button onclick={deliveryClick} > Delivery </button>
            </div>

            <div className={houseownerstate ? "hover-houseowner" : "houseowner"}
                onMouseEnter={() => { setHouseownerstate(true) }} onMouseLeave={() => { setHouseownerstate(false) }}>
                <button onclick={houseownerClick} > House Owner </button >
            </div>
        </div>
    )
}
export default Profile