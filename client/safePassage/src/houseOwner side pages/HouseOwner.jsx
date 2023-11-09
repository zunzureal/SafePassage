import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseOwnerimage1 from "../assets/Logo Black with Name.png";
import HouseOwnerimage from "../assets/houseowner.png";
import '../css/HouseOwnerQR.css';


function HouseOwner() {
  const navigate = useNavigate()
  const type = "houseOwner";
  const [image, setImage] = useState('');
  const [isQrCodeVisibleH, setIsQrCodeVisibleH] = useState(false);

  const token = localStorage.getItem('token');
  const password = localStorage.getItem('password');
  const username = localStorage.getItem('houseNo');


    useEffect(()=>{
        if(!token){
            navigate('/houseowner/login')
        }
    },[])

  const submitBtn = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4444/houseOwnerGenQr',{
      username, password
    }).then(res=>{
      setImage(res.data)
      setIsQrCodeVisibleH(true);
    })
  }
    
  
  return (
    <div className='House-backgound'>
      
      <div className='House-container'>

        <div className='leftsideH'>
        
          <img className="houseOwner-logo" src={HouseOwnerimage1} alt='' />
          {isQrCodeVisibleH ? (
          <div className='qrcodeH'><img src={image} alt='QR Code' height="300px" width="300px"/></div>
          ) : (
          <div className='imageHouse'><img src={HouseOwnerimage} alt='Image House'/></div>
          )}
      
        </div>
      
        <div className='rightsideH' >
       
          <div className='formerH'>
            <form>
              <div className='summit3'>
                <button className='ml-2' onClick={submitBtn} >
                <span>Generate QRcode</span>
                </button>
              </div>

            </form>
          </div>
       
        </div>

      </div>
      <div className="House-mobile">
        <div className="house-bar-mobile">
          <img className="houseOwner-logo-moblie" src={HouseOwnerimage1} alt='' />
          <p>HOUSE OWNER</p>
        </div>
        <div className="house-qr-mobile">
        {isQrCodeVisibleH ? (
          <div className='qrcodeH'><img src={image} alt='QR Code' height="300px" width="300px"/></div>
          ) : (
          <div className='imageHouse'><img src={HouseOwnerimage} alt='Image House'/></div>
          )}
        </div>
          <div className='formerH-mobile'>
            <form>
              <div className='summit3'>
                <button className='ml-2' onClick={submitBtn} >
                <span>Generate QRcode</span>
                </button>
              </div>
            </form>
          </div>
      </div>
    </div> 
  )
}
export default HouseOwner