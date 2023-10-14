import axios from 'axios';
import React, { useState } from 'react';
import "../css/Visitor.css";

function Visitor() {

  const [id, setId] = useState('')
  const [houseNo, setHouseNo] = useState('');
  const type = "houseOwner";
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [licenseTemplate, setLicenseTemplate] = useState('')
  const [image, setImage] = useState('');

  const submitBtn = (e) => {
    e.preventDefault();
    if (id && houseNo && type && firstName && lastName && licenseTemplate) {
      axios.post('http://localhost:4444/genQR',
        { id, houseNo, type, firstName, lastName, licenseTemplate })
        .then(res => {
          setImage(res.data)
        })
    }else{
      alert("please fill in all data")
    }
  }

  return (

    <div className='visitor-container'>


      <div className='leftside'>
        <div className='textsign'><p>SIGN UP</p></div>
        <div className='qrcode'><img src={image} alt="" /></div>
      </div>
      
      <div className='rightside' >
       
       <div className='signup'>
       <p>Sign up with</p>
        
        <div className='signup1'>
        
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
        </div>
      </div>
       
        <div className='former'>
        <form>

        
        
        <input
          type="text"
          placeholder='ใส่เลขบัตรประชาชนของญาติท่าน'
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
  )
}

export default Visitor