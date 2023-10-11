import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="status">
        <div className = "Profile">
          <img src="" alt="" />
        </div>
        <p>Welcome</p>
      <div className = "username">
        <p className = "user"> </p>
        <p className = "address"> </p>
      </div>

      </div>
      <h1>
        <button className = "visitor" hrel = "#"> Visitor </button>
      </h1>
      <h2>
        <button className = "delivery" hrel = "#"> Delivery </button>
      </h2>
      <h3>
        <button className = "houseowner" hrel = "#"> House Owner </button >
      </h3>
    </div>
  )
}

export default App
