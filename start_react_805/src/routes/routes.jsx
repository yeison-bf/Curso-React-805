import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../feature/auth/pages/login'
import { Register } from '../feature/auth/pages/register'
import { Dashboard } from '../feature/dashboard/dashboard'
import { Sales } from '../feature/dashboard/pages/sales/sales'
import { Clients } from '../feature/dashboard/pages/clients/clients'

export const RoutesModule = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />


                <Route path='/home' element={<Dashboard/>}>
                    <Route path='clients' element={<Clients />} />
                    <Route path='sales' element={<Sales />} />


                </Route>
             
            </Routes>
        </>
    )
}
