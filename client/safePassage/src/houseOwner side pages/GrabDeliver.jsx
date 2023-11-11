import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import grabimage from "../assets/delivery_man.png";
import grabimage1 from "../assets/Logo Black with Name.png";
import Swal from 'sweetalert2';
import '../css/Grabdeliver.css';

function GrabDeliver() {
  const navigate = useNavigate()
  const [houseNo, setHouseNo] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [licenseTemplate, setLicenseTemplate] = useState('')
  const [image, setImage] = useState('');
  const [isQrCodeVisibleG, setIsQrCodeVisibleG] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [customOption, setCustomOption] = useState('');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCustomOptionChange = (event) => {
    setCustomOption(event.target.value);
  };

  const token = localStorage.getItem('token');
    
    useEffect(()=>{
        if(!token){
            navigate('/houseowner/login')
        }
    },[])
  const submitBtn = (e) => {
    e.preventDefault();
    if (deliveryID && licenseTemplate) {
      axios.post('http://localhost:4444/grabGenQr',
        {  deliveryID, licenseTemplate })
        .then(res => {
          setImage(res.data)
          setIsQrCodeVisibleG(true);
        })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
      });
    }
  }

  return (
    <div className='grab-backgound'>
      <div className='grab-container'>

      <div className='leftsideG'>
          <img className="grab-logo" src={grabimage1} alt='' />
          {isQrCodeVisibleG ? (
          <div className='qrcodeG'><img src={image} alt='QR Code' height="300px" width="300px"/></div>
          ) : (
          <div className='imagegrab'><img src={grabimage} alt='Image grab'/></div>
          )}
      
      </div>
      
      <div className='rightsideG' >
        
        <div className='signupG'>
          <p>DELIVERY</p>
        </div>
       
        <div className='formerG'>
        <div className='formmargin'>
        <form>

        <input
          type="text"
          placeholder='หมายเลขการจัดส่ง'
          className='ml-2'
          onChange={(e) => { setdeliveryID(e.target.value) }}
        />


        <input
          type="text"
          placeholder='ทะเบียนรถ'
          className='ml-2'
          onChange={(e) => { setLicenseTemplate(e.target.value) }}
        />

          <select id="company-select" value={selectedOption} onChange={handleSelectChange} >
              <option value="#">บริษัท</option>
              <option value="HappyFresh">HappyFresh</option>
              <option value="Grab">Grab</option>
              <option value="Foodpanda">Foodpanda</option>
              <option value="Gojek">Gojek</option>
              <option value="CP FreshMart">CP FreshMart</option>
              <option value="Lineman">Lineman</option>
              <option value="WESERVE">WESERVE</option>
              <option value="1112 Delivery">1112 Delivery</option>
              <option value="7-Eleven TH">7-Eleven TH</option>
              <option value="SKOOTAR">SKOOTAR</option>
              <option value="Robinhood">Robinhood</option>
              <option value="Winfood">Winfood</option>
              <option value="Lalamove">Lalamove</option>
              <option value="Frabbit">Frabbit</option>
              <option value="Fooddee">Fooddee</option>
              <option value="อื่นๆ">อื่นๆ</option>
          </select>
          {selectedOption === 'อื่นๆ' && (
           <input
           type="text"
           value={customOption}
           onChange={handleCustomOptionChange}
           placeholder="กรอกชื่อบริษัทอื่นๆ"
          />
          )}

        <br />
        

        <div className='summit2'>
          <button className='ml-2' onClick={submitBtn}>
          <span>Submit</span>
          </button>
        </div>

       </form>
       </div>
       </div>
       </div>
      </div>
      <div className="grab-mobile">
        <div className="grab-bar-mobile">
          <img className="grab-logo-moblie" src={grabimage1} alt='' />
          <p>DELIVERY</p>
        </div>
        <div className="grab-qr-mobile">
        {isQrCodeVisibleG ? (
          <div className='qrcodeG'><img src={image} alt='QR Code' height="250px" width="250px"/></div>
          ) : (
          <div className='imagegrab'><img src={grabimage} alt='Image grab'/></div>
          )}
        </div>
        <div className='formerG-mobile'>
        <form>

       <input
          type="text"
          placeholder='หมายเลขจัดส่ง'
          className='ml-2'
          onChange={(e) => { setdeliveryID(e.target.value) }}
        />


          <input
          type="text"
          placeholder='ทะเบียนรถ'
          className='ml-2'
          onChange={(e) => { setLicenseTemplate(e.target.value) }}
        />

          <select id="company-select" value={selectedOption} onChange={handleSelectChange}>
              <option value="#">บริษัท</option>
              <option value="HappyFresh">HappyFresh</option>
              <option value="Grab">Grab</option>
              <option value="Foodpanda">Foodpanda</option>
              <option value="Gojek">Gojek</option>
              <option value="CP FreshMart">CP FreshMart</option>
              <option value="Lineman">Lineman</option>
              <option value="WESERVE">WESERVE</option>
              <option value="1112 Delivery">1112 Delivery</option>
              <option value="7-Eleven TH">7-Eleven TH</option>
              <option value="SKOOTAR">SKOOTAR</option>
              <option value="Robinhood">Robinhood</option>
              <option value="Winfood">Winfood</option>
              <option value="Lalamove">Lalamove</option>
              <option value="Frabbit">Frabbit</option>
              <option value="Fooddee">Fooddee</option>
              <option value="อื่นๆ">อื่นๆ</option>
          </select>
          {selectedOption === 'อื่นๆ' && (
           <input
           type="text"
           value={customOption}
           onChange={handleCustomOptionChange}
           placeholder="กรอกชื่อบริษัทอื่นๆ"
          />
          )}
          

        <br />
        

        <div className='summit2'>
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


export default GrabDeliver 