import { useState } from 'react'
import './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className = "footer-start"> 
   <h1>CASA DAS PLANTAS</h1> 
   
    
    </div>

  <div className="background_muda">
       <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
      Login {count}
     </button>
    </div>



      
  </div>

  <div className = "footer-endpage">
    <p> Helton Lemes Morais           
      <a href= " https://www.linkedin.com/in/helton-morais-838612166/" target="_blank">
        <img src={"src/imgs/logolinkedin.png"} className="link linkedn" alt="logo linkedn" />
      </a>
    </p>
  </div>
  </>
  )
}

export default App
