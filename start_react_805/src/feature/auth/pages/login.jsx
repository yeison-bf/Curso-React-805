import React, { useState } from "react";

const Login = () => {


    const [username, SetUserName] = useState('Maria')
    const [password, SetPassword] = useState('')
    const [validateCredential, setValidateCredential] = useState(false)
    const [dataStorage, setDataStorage] = useState(JSON.parse(localStorage.getItem ('access805')))


    const handdleSubmit = (e) => {
        e.preventDefault()
        console.log(dataStorage)
        if(username == '' || password == ''){
            setValidateCredential(true)
            return
        }
        console.log({username, password})

        if(username == dataStorage.username && password == dataStorage.password){
            console.log("Registro exitoso")
        }else{
            SetPassword('')
            SetUserName('')
            console.log("Credenciales incorrectas")
        }
    }


    return (
        <>
            <div className="container pt-5 w-100 d-flex justify-content-center aling-items-center">
                <div className="card">
                    <form onSubmit={ handdleSubmit } >
                        <img src="https://img.freepik.com/vector-premium/vector-libre-hermoso-elemento-diseno-colibri-volador-pancartas-carteles-folletos-folletos_1009653-1.jpg?semt=ais_hybrid&w=740" className="img-fluid w-50" alt="" />
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input value={username} onChange={ (e)=> SetUserName(e.target.value) } type="text" className="form-control"  />
                            { validateCredential ? (<small className="text-danger">Este campo requerido</small>) : '' }
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input value={password} type="text" onChange={ (e)=> SetPassword(e.target.value) }className="form-control"  />
                            { validateCredential ? (<small className="text-danger">Este campo requerido</small>) : '' }
                        </div>
                        <div className="mb-3">
                            <input type="submit" value="Acceder" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Login;

