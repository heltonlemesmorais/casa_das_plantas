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
       Brasópolis-MG 
       <p>+55 35 8422-6173 | +55 35 99733-2376 </p>
      
      <a href= " https://www.facebook.com/casadasplantasbraz" target="_blank">
      <img src={"src/imgs/facebooklink.png"} className="facebook" alt="facebook" />
      </a>
      
      <a href= " https://www.instagram.com/casadasplantas18/?utm_source=qr&igshid=YzU1NGVlODEzOA%3D%3D" target="_blank">
      <img src={"src/imgs/instagramlink.png"} className="facebook" alt="facebook" />
      </a>
      <div>
      Helton Lemes Morais           
      <a href= " https://www.linkedin.com/in/helton-morais-838612166/" target="_blank">
      <img src={"src/imgs/logolinkedin.png"} className="link linkedn" alt="logo linkedn" />
      </a>
      
      </div>
  </div>
  </>
  )
}

export default App
