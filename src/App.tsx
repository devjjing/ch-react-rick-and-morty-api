import { useState } from 'react'
import './App.css'
import './Character.tsx'
import './API.ts'
import Character from "./Character.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Character />
      </div>
    </>
  )
}

export default App
