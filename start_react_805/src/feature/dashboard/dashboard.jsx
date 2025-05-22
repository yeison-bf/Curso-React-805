import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <>
            <div className="contenedorHome">
                <div className='sidebar'>
                    <ul>
                        <li>
                            <Link to='/home/clients' className='item'>Clientes</Link>
                        </li>
                        <li>
                            <Link to='/home/sales' className='item'>Ventas</Link>
                        </li>
                    </ul>
                </div>
                <div className='content'>
                    <Outlet/>
                </div>
            </div>
        </>

    )
}
