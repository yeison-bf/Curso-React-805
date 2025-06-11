import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesModule from './routes/routesModules'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RoutesModule/>
    </>
  )
}

export default App
