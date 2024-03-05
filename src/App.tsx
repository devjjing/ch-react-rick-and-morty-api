import { useState } from 'react'
import './App.css'
import './Character.tsx'
import './API.ts'
import Parent from "./Parent.tsx";
import Title from "./Title.tsx";
import SearchBar from "./SearchBar.tsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Title />
          <SearchBar />
          <Parent />
    </>
  )
}

export default App
