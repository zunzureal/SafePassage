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
        /><br />

        <button
          className='ml-2'
          onClick={submitBtn}
        >
          Submit
        </button>

      </form>

      <div><img src={image} alt="" /></div>

    </div>
  )
}

export default Visitor