import React, { useState } from 'react'
import { Navbar } from '../../components/navbar'
import { useNavigate } from 'react-router-dom'
import { AuhtLogin } from './services/login.services'

export const Login = () => {
    const navitage = useNavigate()

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleHome = () => {
        navitage('/')
    }


    const handleAcces = async (e)=>{
        e.preventDefault()
        const response =await  AuhtLogin(userName, password)
        console.log(response)

        if(response.success){
            navitage('/app/home')
        }else{
            alert("Credenciales incorrectas")
        }
    }


    return (
        <div>
            <div className="containerLogin">
                <button onClick={handleHome} className='devolver text-white'>Inicio</button>
                <div className="formulario d-flex justify-content-center  align-items-center">
                    <form  onSubmit={handleAcces}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Usuario</label>
                            <input onChange={(e)=>setUserName(e.target.value)} type="text" className="form-control" />
                        </div>
                       <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input onChange={(e)=>setPassword(e.target.value)}  type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className=" btn btn-primary col-12 mt-5" value="Acceder"  />
                        </div>
                    </form>
                </div>
                <div className="imagenformulario"></div>
            </div>
        </div>
    )
}
