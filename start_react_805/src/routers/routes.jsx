import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing } from '../feature/landing/landing'
import Login from '../feature/auth/pages/login'
import Clients from '../feature/clients/clients'

export const RoutesModelo = () => {
  return (
     <>
      <Routes >
        <Route path='/' element={ <Landing/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/clientes' element={ <Clients/> } />
        <Route path='/ventas' element={ <p>Hola desde ventas</p> } />
      </Routes>
    </>
  )
}
