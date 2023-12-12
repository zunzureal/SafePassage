import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import GrabDeliver from "./houseOwner side pages/GrabDeliver"
import HouseOwner from "./houseOwner side pages/HouseOwner"
import HouseOwnerLogin from "./houseOwner side pages/Login"
import Profile from "./houseOwner side pages/Profile"
import Visitor from "./houseOwner side pages/Visitor"
import GoodsDeliver from "./security side page/GoodsDeliver"
import SecurityLogin from "./security side page/Login"



function App() {
  

  
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/houseowner/login" element={<HouseOwnerLogin/>}/>
          <Route path="/security/login" element={<SecurityLogin/>}/>
          <Route path="/houseowner/profile" element={<Profile/>}/>
          <Route path="/houseowner/profile/visitor" element={<Visitor/>}/>
          <Route path="/houseowner/profile/houseowner" element={<HouseOwner/>}/>
          <Route path="/houseowner/profile/grabdelivery" element={<GrabDeliver/>}/>
          <Route path="/security/gooddelivery" element={<GoodsDeliver/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )}

export default App
