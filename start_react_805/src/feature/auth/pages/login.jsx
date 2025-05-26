import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    // Constante del Hook de Navigate()
    const navigate = useNavigate()


    // Valriable para capturar los datos del localstorage
    const DataLocalStorage = JSON.parse(localStorage.getItem('access805'));

    // Constantes para almacenar los datos del formulario 
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("");

    // Función para validar los datos y acceder al panel
    const handdleSubmit = (e) =>{
        e.preventDefault()
        console.log(DataLocalStorage)
        if(username=='' || password==''){
            alert("Los datos de acceso son obligatorios");
            return
        }

        if(username == DataLocalStorage?.username && password == DataLocalStorage?.password){
            alert("Credenciales correctas")
            navigate('/home/clients')
        }else{
            alert("Lo sentimos! Datos incorrectos")
            setUserName('')
            setPassword('')
        }

    }

    // Funcion para navegar al formulario o componente del registro
    const regiterForm = () =>{
        navigate('/register')
    }


    return (
        <>
            <div className="container-fluid   justify-content-center aling-items-center">
                <form onSubmit={ handdleSubmit }>
                    <div className="card  p-4">
                        <img src="" className='img-fluid' alt="" />
                        <div className='mt-5'>
                            <label htmlFor="" className='label-control col-12'>Usuario:</label>
                            <input onChange={ (e)=>setUserName(e.target.value) } type="text"  className='input-control' value={username} />
                        </div>

                        <div className='mt-5'>
                            <label htmlFor="" className='label-control col-12'>Contraseña:</label>
                            <input onChange={ (e)=>setPassword(e.target.value) } type="password" className='input-control' value={password} />
                        </div>

                        <div className='mt-5'>
                            <input type="submit" className='btn btn-primary col-12' />
                        </div>
                    </div>
                </form>
                <div>
                    <p onClick={ regiterForm } className='text-primary'>Registrate aqui</p>
                </div>
            </div>
        </>
    )
}
