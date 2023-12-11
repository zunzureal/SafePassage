import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Logo_safapassage from "../assets/Logo Black with Name.png";
import Logo_Goodde from "../assets/goodepic.png";
import SCG_profile from "../assets/personSEG.png";
import '../css/GoodDeliver.css';

function GoodsDeliver() {

  const [id, setId] = useState("");
  const [licenseTemplate, setLicenseTemplate] =useState("");
  const guardId = localStorage.getItem("GuardId")

  const submit = async () => {
    if (id === "" || licenseTemplate ==="") {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'กรูณากรอกข้อมูลให้ครบถ้วน',
      });
    }else{
      await axios.post("http://localhost:4444/goodsDelivery/genQr",{
        id,licenseTemplate,guardId
      }).then(res=>{
        setId("")
        setLicenseTemplate("")
        Swal.fire({
          icon:"success",
          title:"Success",
          text:"Success"
        })
      })
    }
  }

  return (

    <div className='all-good'>
      <div className='topbar'>


        <div className='topbar_block1'>
          <img src={Logo_safapassage} className='topbar_Logo'></img>
        </div>

        <div className='topbar_block2'>
          <h1 className='topbar_text_center'>Parcel transport</h1>
        </div>

        <div className='topbar_block3'>
          <img src={SCG_profile} className='show_user'></img>
          <h1 className='topbar_text_user' >Chinnaphon Tharawiwit</h1>
        </div>

      </div>
      <div className='body_flex'>
        <div className='body_left'>
          <div className='form_location'>

            <p className='space'>Person ID</p>


            <input
              className='input_type-text'
              type="text"
              placeholder='xxxxxxxxxxxxx'
              name='Person_ID'
              onChange={(e)=>setId(e.target.value)}
            />

            <p className='space'>License Template</p>

            <input
              className='input_type-text'
              type="text"
              placeholder='กข 1234'
              name='LicenseTemplate'
              onChange={(e)=>setLicenseTemplate(e.target.value)}
            />


<<<<<<< HEAD
            <div className="Entry_button">
              <button onClick={submit}>Entry</button>

=======
            <div className="Entry_button2">
              <button className='Entry_button'>Entry</button>
            
>>>>>>> 58c0a4c (fixed css)
            </div>

          </div>

        </div>

        <div className='body_right'>
          <div className='Logo_Goodde' >
            <img src={Logo_Goodde} height='500px' width='700px'></img>
          </div>
        </div>
      </div>


    </div>
  )
}

export default GoodsDeliver