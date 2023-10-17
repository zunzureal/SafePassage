import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Grabdeliver.css'
import grabimage from "../assets/Motorbike.png";

function GrabDeliver() {
  const navigate = useNavigate()
  /*const [id, setId] = useState('')*/
  const [houseNo, setHouseNo] = useState('');
  const type = "houseOwner";
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [licenseTemplate, setLicenseTemplate] = useState('')
  const [image, setImage] = useState('');

  const token = localStorage.getItem('token');
    
    useEffect(()=>{
        if(!token){
            navigate('/houseowner/login')
        }
    },[])
  const submitBtn = (e) => {
    e.preventDefault();
    if (houseNo && type && firstName && lastName && licenseTemplate) {
      axios.post('http://localhost:4444/genQR',
        { houseNo, type, firstName, lastName, licenseTemplate })
        .then(res => {
          setImage(res.data)
        })
    }else{
      alert("please fill in all data")
    }
  }

  return (
    <div className='grab-backgound'>
      
      <div className='grab-container'>

      <div className='leftsideG'>
        
        <div className='textsignG'><p>Delivery</p></div>
        <div className='imagegrab'><img src={grabimage} height= "100%"  width= "100%"/></div>
        <div className='qrcodeG'><img src={image} width="300px"  height="300px" alt="" /></div>
      
      </div>
      
      <div className='rightsideG' >
       
       <div className='signupG'>
       <p>Sign up</p>
        
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
       
        <div className='formerG'>
        <form>


          <input
          type="text"
          placeholder='ชื่อของท่าน'
          className='ml-2'
          onChange={(e) => { setFirstName(e.target.value) }}
        />

      
          <input
          type="text"
          placeholder='นามสกุลของท่าน'
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
  )
}


export default GrabDeliver 