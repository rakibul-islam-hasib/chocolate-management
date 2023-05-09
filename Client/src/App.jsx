import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-blue-500'>
        <NavBar />
      </div>
        <Outlet /> 
    </>
  )
}

export default App
