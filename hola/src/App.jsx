import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Users } from './feature/Users/Users'
import { FormUsers } from './feature/Users/components/FormUsers'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Users/>} />
        <Route path='/registro' element={<FormUsers/>} />
      </Routes>
    </>
  )
}

export default App
