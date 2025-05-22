import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Register = () => {


    // Constante del Hook de Navigate()
    const navigate = useNavigate()


    // Valriable para capturar los datos del localstorage
    const DataLocalStorage = JSON.parse(localStorage.getItem('access805'));

    // Constantes para almacenar los datos del formulario 
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("");

    // Función para validar los datos y acceder al panel
    const handdleSubmit = (e) => {
        e.preventDefault()

        if (username == '' || password == '' || name == '') {
            alert("Los datos de acceso son obligatorios");
            return
        }

        localStorage.setItem('access805', JSON.stringify({ name, username, password }))
        alert("Registro exitoso");

        setTimeout(() => {
            navigate('/')
        }, 600);

    }

    // Funcion para navegar al formulario o componente del registro
    const regiterForm = () => {
        navigate('/')
    }


    return (
        <>
            <div className="container-fluid   justify-content-center aling-items-center">
                <form onSubmit={handdleSubmit}>
                    <div className="card  p-4">

                        <div className='mt-5'>
                            <label htmlFor="" className='label-control col-12'>Nombre completo:</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" className='input-control' value={name} />
                        </div>

                        <div className='mt-5'>
                            <label htmlFor="" className='label-control col-12'>Usuario:</label>
                            <input onChange={(e) => setUserName(e.target.value)} type="text" className='input-control' value={username} />
                        </div>

                        <div className='mt-5'>
                            <label htmlFor="" className='label-control col-12'>Contraseña:</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className='input-control' value={password} />
                        </div>

                        <div className='mt-5'>
                            <input type="submit" className='btn btn-primary col-12' />
                        </div>
                    </div>
                </form>
                <div>
                    <p onClick={regiterForm} className='text-primary'>Ya tengo una cuenta, ir al Login</p>
                </div>
            </div>
        </>
    )
}
