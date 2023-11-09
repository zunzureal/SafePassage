import axios from 'axios';
import React, { useEffect, useState } from 'react';
import visitorImage from "../assets/Visitors 1.png";
import visitorImage1 from "../assets/Logo Black with Name.png";
import { useNavigate } from 'react-router-dom';
import "../css/Visitor.css";
import Swal from 'sweetalert2';

function Visitor() {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [houseNo, setHouseNo] = useState('');
  const type = "houseOwner";
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [licenseTemplate, setLicenseTemplate] = useState('')
  const [image, setImage] = useState('');
  const [isQrCodeVisibleV, setIsQrCodeVisibleV] = useState(false);

  const token = localStorage.getItem('token');
    
    useEffect(()=>{
        if(!token){
            navigate('/houseowner/login')
        }
    },[])
  const submitBtn = (e) => {
    e.preventDefault();
    if (id && houseNo && type && firstName && lastName && licenseTemplate) {
      axios.post('http://localhost:4444/genQR',
        { id, houseNo, type, firstName, lastName, licenseTemplate })
        .then(res => {
          setImage(res.data)
          setIsQrCodeVisibleV(true);
        })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'กรูณากรอกข้อมูลให้ครบถ้วน',
      });
    }
  }

  return (

    <div className='visitor-backgound'>
      
      <div className='visitor-container'>

      <div className='leftsideV'>
          <img className="visitor-logo" src={visitorImage1} alt='' />
          {isQrCodeVisibleV ? (
          <div className='qrcodeV'><img src={image} alt='QR Code' height="300px" width="300px"/></div>
          ) : (
          <div className='imagevisitor'><img src={visitorImage} alt='Image grab'/></div>
          )}
      
      </div>
      
      <div className='rightsideV' >
       
        <div className='formerV'>
        <form>

        <input
          type="text"
          placeholder='ใส่เลขบัตรประชาชนของญาติ'
          className='ml-2'
          onChange={(e) => { setId(e.target.value) }}
        />

          <input
          type="text"
          placeholder='ชื่อญาติ'
          className='ml-2'
          onChange={(e) => { setFirstName(e.target.value) }}
        />

      
          <input
          type="text"
          placeholder='นามสกุลญาติ'
          className='ml-2'
          onChange={(e) => { setLastName(e.target.value) }}
        />

       <input
          type="text"
          placeholder='บ้านเลขที่'
          className='ml-2'
          onChange={(e) => { setHouseNo(e.target.value) }}
        />


          <input
          type="text"
          placeholder='ป้ายทะเบียนรถ'
          className='ml-2'
          onChange={(e) => { setLicenseTemplate(e.target.value) }}
        />
        <br />

        <div className='summit1'>
          <button className='ml-2' onClick={submitBtn}>
          <span>Submit</span>
          </button>
        </div>

       </form>
       </div>
       </div>
      </div>
      <div className="visitor-mobile">
        <div className="visitor-bar-mobile">
          <img className="visitor-logo-moblie" src={visitorImage1} alt='' />
          <p>VISITOR</p>
        </div>
        <div className="visitor-qr-mobile">
          {isQrCodeVisibleV ? (
          <div className='qrcodeV'><img src={image} alt='QR Code' height="200px" width="200px"/></div>
          ) : (
          <div className='imagevisitor'><img src={visitorImage} alt='Image grab'/></div>
          )}
        </div>
        <div className='formerV-mobile'>
        <form>

        <input
          type="text"
          placeholder='ใส่เลขบัตรประชาชนของญาติ'
          className='ml-2'
          onChange={(e) => { setId(e.target.value) }}
        />

          <input
          type="text"
          placeholder='ชื่อญาติ'
          className='ml-2'
          onChange={(e) => { setFirstName(e.target.value) }}
        />

      
          <input
          type="text"
          placeholder='นามสกุลญาติ'
          className='ml-2'
          onChange={(e) => { setLastName(e.target.value) }}
        />

       <input
          type="text"
          placeholder='บ้านเลขที่'
          className='ml-2'
          onChange={(e) => { setHouseNo(e.target.value) }}
        />


          <input
          type="text"
          placeholder='ทะเบียนรถ'
          className='ml-2'
          onChange={(e) => { setLicenseTemplate(e.target.value) }}
        />
        <br />

        <div className='summit1'>
          <button className='ml-2' onClick={submitBtn}>
          <span>Submit</span>
          </button>
        </div>

       </form>
       </div>
      </div>
    </div> 
  )
}

export default Visitor