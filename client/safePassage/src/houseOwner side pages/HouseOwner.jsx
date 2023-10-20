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

  const token = localStorage.getItem('token');
  const password = localStorage.getItem('password');
  const username = localStorage.getItem('username');


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
    })
  }
  
  return (
    <div className='House-backgound'>
      
      <div className='House-container'>

        <div className='leftsideH'>
        
          <div className='textsignH'><p>House Owner</p></div>
          <div className='imageHouse'><img src={HouseOwnerimage} height= "100%"  width= "100%"/></div>
          <div className='qrcodeH'><img src={image} width="300px"  height="300px" alt="" /></div>
      
        </div>
      
        <div className='rightsideH' >
          <div className='signupH'>
            <img src={HouseOwnerimage1} alt='' />
        
           {/*<div className='signup1'>
        
           <div className='github'>
            <button>
            <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/github-7521512-7196736.png?f=webp' alt=''/> <span>GITHUB</span>
            </button>
            </div>
        
            <div className='google'>
            <button>
            <img src='https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png' alt=''/> <span>GOOGLE</span>
            </button>
            </div>
            </div>*/}
          </div>
       
          <div className='formerH'>
            <form>
              <div className='summit3'>
                <button className='ml-2' onClick={submitBtn}>
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