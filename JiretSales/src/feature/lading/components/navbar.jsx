import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between d-flex align-items-center ">
                <a className="navbar-brand">Navbar</a>
              
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Quienes somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Acceder</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
