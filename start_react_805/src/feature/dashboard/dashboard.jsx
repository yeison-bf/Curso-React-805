import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Dashboard = () => {

    const navigate = useNavigate()
    const handdleClose = () =>{
        navigate('/')
    }

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

                    <p onClick={handdleClose} className='opcionSalir'>Salir</p>
                </div>
                <div className='content'>
                    <Outlet/>
                </div>
            </div>
        </>

    )
}
