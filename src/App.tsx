import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="background_muda">

    <h1>CASA DAS PLANTAS</h1>

      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

        <p>Cada Muda, Muda o Mundo!</p>

        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Login {count}
        </button>
      </div>

      <p>Create_by: Helton Lemes Morais</p>
      
      </div>
    </>
  )
}

export default App
