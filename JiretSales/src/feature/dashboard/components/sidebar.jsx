import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="https://images.vexels.com/media/users/3/137617/isolated/preview/c45afb857e72b86e87baaf255f71ff37-resumen-logo-geometrico.png" alt="" className='img-fluid' />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/app/home" className='link'>Inicio</Link></li>
                    <li><Link to="/app/users" className='link'>Usuarios</Link></li>
                    <li><Link to="/app/services" className='link'>Servicios</Link></li>
                    <li><Link to="/app/companies" className='link'>Compañias</Link></li>
                    {/* <li><Link to="/app/home" className='link'>Categorias</Link></li> */}
                    <li><Link to="/login" className='link'>Salir</Link></li>
                </ul>
            </div>
        </div>
    )
}
