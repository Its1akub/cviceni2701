import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordInput from './components/PasswordInput.tsx'
import PasswordStrength from './components/PasswordStrength.tsx'

function App() {
  const [count, setCount] = useState(0);
  const [password, setPassword] = useState("");

  return (
      <>
          <div>
              <h1>Kontrola síly hesla</h1>
              <PasswordInput setPassword={setPassword}/>
              <PasswordStrength password={password}/>
          </div>

          <div>
              <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </>
  )
}

export default App
