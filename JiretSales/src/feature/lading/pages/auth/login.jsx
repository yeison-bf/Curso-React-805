import React from 'react'
import { Navbar } from '../../components/navbar'
import './loginStyle.css'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navitage = useNavigate()

    const handleHome = () => {
        navitage('/')
    }
    return (
        <div>
            <div className="containerLogin">
                <button onClick={handleHome} className='devolver'>Inicio</button>
                <div className="formulario d-flex justify-content-center  align-items-center">
                    <form action="col-8">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Usuario</label>
                            <input type="text" className="form-control" />
                        </div>
                       <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input type="input" className=" btn btn-primary col-12 mt-5" value="Acceder"  />
                        </div>
                    </form>
                </div>
                <div className="imagenformulario"></div>
            </div>
        </div>
    )
}
