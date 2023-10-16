import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/HouseOwnerQR.css'
import HouseOwnerimage from "../assets/houseowner.png";
import HouseOwnerimage1 from "../assets/Logo Black with Name.png";

function HouseOwner() {
  const navigate = useNavigate()
  const [id, setId] = useState('')
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
    if (null) {
      axios.post('http://localhost:4444/genQR',
        {  })
        .then(res => {
          setImage(res.data)
        })
    }else{
      alert("please fill in all data")
    }
  }
  
  return (
    <div className='House-backgound'>
      
      <div className='House-container'>

        <div className='leftsideH'>
        
          <div className='textsignH'><p>Delivery</p></div>
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