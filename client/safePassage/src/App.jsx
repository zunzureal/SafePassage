import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <div className='status'>
        <div className = 'Profile'>
          <img src="" alt="" />
          <p className='welcome'>Welcome <p className = 'user'> user </p> <p className = 'address'> kb 23/256 </p> </p>
        </div>
      </div>
      
      <div className='select'>
        <h1>
        <button className = 'visitor' hrel = "#"> Visitor </button>
        </h1>
        <h2>
        <button className = 'delivery' hrel = "#"> Delivery </button>
        </h2>
        <h3>
        <button className = 'houseowner' hrel = "#"> House Owner </button >
        </h3>
      </div>
    </div>
  )
}

export default App
