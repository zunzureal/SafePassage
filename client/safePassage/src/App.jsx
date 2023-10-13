import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import HouseOwnerLogin from "./houseOwner side pages/Login"
import SecurityLogin from "./security side page/Login"



function App() {
  

  
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/houseowner/login" element={<HouseOwnerLogin/>}/>
          <Route path="/security/login" element={<SecurityLogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )}

export default App
