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
  const [isQrCodeVisible, setIsQrCodeVisible] = useState(false);

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
      setIsQrCodeVisible(true);
    })
  }
    
  
  return (
    <div className='House-backgound'>
      
      <div className='House-container'>

        <div className='leftsideH'>
        
          <img className="houseOwner-logo" src={HouseOwnerimage1} alt='' />
          {isQrCodeVisible ? (
          <div className='qrcodeH'><img src={image} alt='QR Code' height="300px" width="300px"/></div>
          ) : (
          <div className='imageHouse'><img src={HouseOwnerimage} alt='Image House'/></div>
          )}
      
        </div>
      
        <div className='rightsideH' >
              <div className="langaugeH">
                <select id="langauge_selectH">
                    <option value="Eng">English(UK)</option>
                    <option value="Eng">Thai(TH)</option>
                    <option value="Eng">Japanese(JP)</option>
                    <option value="Eng">Chinese(CH)</option>
                </select>
              </div>
       
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
    </div> 
  )
}

export default HouseOwner