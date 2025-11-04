import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sampleImg from './assets/alien-svgrepo-com (1).svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Name");
  const [age, setAge] = useState("Age");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={sampleImg} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=> setName((name) => " Name is Maduka")}>
          Set Name
        </button>
        <button onClick={()=> setAge((age) => "Age is 21")}>
          Set Age
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
