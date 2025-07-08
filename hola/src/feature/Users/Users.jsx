import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getDataUsers } from './services/user.services'
import { useNavigate } from 'react-router-dom'

export const Users = () => {

    const navigate = useNavigate()
    const [listUsers, setListUsers] = useState([])


    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const response = await getDataUsers()
        setListUsers(response)
    }


    const handdelForm = () => {
        navigate('registro')
    }

    const handldeDelete= async (id)=>{
        alert(id)
        const response = await axios.delete('http://localhost:3030/users/'+id)
        console.log(response)
        if(response.data.success){
            getData()
        }else{
            alert("Vea pirobo, pailas, no funcionó... ")
        }
    }


    return (
        <div className='container p-5'>
            <div className="row">
                <div className="col-12">
                    <button className='btn btn-primary' onClick={handdelForm}>Nuevo Registro</button>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers.map((element, index) => (
                        <tr key={element.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{element.fullName}</td>
                            <td>{element.email}</td>
                            <td>{element.role.name}</td>
                            <td>{element.company.name}</td>
                            <td>
                                <button onClick={(e)=>handldeDelete(element.id)} className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
