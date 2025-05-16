import React, { useState } from "react";

const Login = () => {

    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const dataLocalStorage = JSON.parse(localStorage.getItem('access'))
    function handdleSubmit(e){
        e.preventDefault();

        console.log(({email, password}))

        if(email == dataLocalStorage.email && password == dataLocalStorage.password){
            alert("Si puede ingresar")
        }else{
            alert("Pailas....")
        }

    }



    

    return (
        <>
            <div className="container vh-100 w-100 d-flex justify-content-center aling-items-center">
                <div className="card">
                    <form onSubmit={ handdleSubmit }>
                        <img src="https://img.freepik.com/vector-premium/vector-libre-hermoso-elemento-diseno-colibri-volador-pancartas-carteles-folletos-folletos_1009653-1.jpg?semt=ais_hybrid&w=740" className="img-fluid w-50" alt="" />
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" onChange={ (e) => setEmail(e.target.value) } className="form-control" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="text" onChange={ (e) => setPassword(e.target.value)} className="form-control" placeholder="name@example.com" />
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

