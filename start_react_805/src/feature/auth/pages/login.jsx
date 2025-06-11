import React, { useState } from 'react'

export const Login = () => {


    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    // Funcion para guardar en el localstorage
    function handdleSaveData(e){
        e.preventDefault();
        localStorage.setItem('dataAcces', JSON.stringify({username, password}) )
    }


    // Funcion para obtener los datos del localstorage
    function handdeGetData(e){
        e.preventDefault()
        const data = JSON.parse(localStorage.getItem('dataAcces'))
        console.log(data)


        
    }


    return (
        <>
            <div className="container-fluid   justify-content-center aling-items-center">
                <form onSubmit={ handdeGetData }>
                    <div className="card  p-4">
                        <img src="" className='img-fluid' alt="" />
                        <div className='mt-5'>
                            <label htmlFor="" className='label-control col-12'>Usuario:</label>
                            <input onChange={ (e)=>setUserName(e.target.value) } type="text"  className='input-control'  />
                        </div>

                        <div className='mt-5'>
                            <label htmlFor="" className='label-control col-12'>Contraseña:</label>
                            <input onChange={ (e)=>setPassword(e.target.value) } type="password" className='input-control' />
                        </div>

                        <div className='mt-5'>
                            <input type="submit" className='btn btn-primary col-12' />
                        </div>
                    </div>
                </form>
                <div>
                    <p className='text-primary'>Registrate aqui</p>
                </div>
            </div>
        </>
    )
}
