import { useState } from 'react'
import './App.css'
import FrontPage from './pages/FrontPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FrontPage />
    </>
  )
}

export default App
