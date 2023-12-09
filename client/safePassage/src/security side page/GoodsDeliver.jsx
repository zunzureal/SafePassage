import React from 'react'
import '../css/GoodDeliver.css';
import Logo_safapassage from "../assets/Logo Black with Name.png";
import SCG_profile from "../assets/personSEG.png";
import Logo_Goodde from "../assets/goodepic.png";
//import Swal from 'sweetalert2';


/*Swal.fire({
  icon: 'error',
  title: 'ERROR',
  text: 'กรูณากรอกข้อมูลให้ครบถ้วน',
});*/



function GoodsDeliver() {
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
            
            <label for = 'Person_ID' className='space'>Person ID</label>
              
            
            <input
              className='input_type-text'
              type="text"
              placeholder='xxxxxxxxxxxxx'
              name='Person_ID'
            />
            
            <label for = 'LicenseTemplate' className='space'>License Template</label>
            
            <input
              className='input_type-text'
              type="text"
              placeholder='กข 1234'
              name='LicenseTemplate'
            />
            

            <div className="Entry_button">
              <button>Entry</button>
            
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