import React, { useEffect, useState } from 'react'
import { IoMdReturnLeft } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { CompanyServices } from '../../companies/services/company.services';
import { RolesServices } from '../../roles/servicio/roles.services';


export function FormUsers() {

    // Hooks para navegaciones internas
    const navigate = useNavigate()

    // Contantes para almacenar datos de compañias y roles
    const [listRoles, setListRoles] = useState([])
    const [listCompanies, setListCompanies] = useState([])

    // Variable de estado para almacenar los datos del objeto.
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        roleId: '',
        companyId: ''
    })

    // Funcion de retorno a la vista de usuarios 
    const handdleReturnUser = () => {
        navigate('/app/users')
    }


    // Hooks para inicio de carga de datos
    useEffect(() => {
        DataRoles();
        DataCompanies();
    }, [])

    // Función para petición de datos de roles
    async function DataRoles() {
        const response = await RolesServices.getAllData()
        setListRoles(response)
    }

    // Función para petición de datos de compañias
    const DataCompanies = async () => {
        const response = await CompanyServices.getAllData()
        setListCompanies(response)
    }


    // 

    const changeData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData(formData => ({ 
            ...formData,
            [name]: value
        }))
    }


    const handleSave = (e)=>{
        e.preventDefault()
        console.log(formData)
    }
    return (
        <>
            <small onClick={handdleReturnUser}> <IoMdReturnLeft /> Regresar</small>
            <hr />
            <h3>Registro de usuario</h3>
            <form onSubmit={handleSave}>
                <div class="mb-3">
                    {/* onChange((e)=>senPaswors(e.target.value))  */}
                    <label for="exampleFormControlInput1" class="form-label">Nombre completo</label>
                    <input onChange={changeData} type="text" name='fullName' value={formData.fullName} class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
                    <input onChange={changeData} type="email" name='email' class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                    <input onChange={changeData} type="password" name='password' class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Rol</label>
                    <select  onChange={changeData} name='roleId' class="form-select" aria-label="Default select example">
                        <option selected>Seleccione</option>
                        {listRoles.map((element, index) => (
                            <option key={element.id} value={element.id}>{element.name}</option>
                        ))}
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Compañia</label>
                    <select onChange={changeData} name='companyId' class="form-select" aria-label="Default select example">
                        <option selected>Seleccione</option>
                        {listCompanies.map((element, index) => (
                            <option key={element.id} value={element.id}>{element.name}</option>
                        ))}
                    </select>
                </div>
                <div class="mb-3 col-12 d-flex justify-content-end ">
                    <input  type="submit" value='Guardar' class="btn btn-primary" />
                </div>
            </form>
        </>
    )
}
