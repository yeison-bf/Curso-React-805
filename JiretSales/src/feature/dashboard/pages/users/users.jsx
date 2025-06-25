import React, { useEffect, useState } from 'react'
import { UserServices } from './services/user.service'
import { useNavigate } from 'react-router-dom'

export const Users = () => {

  const navigate = useNavigate();

  const [listUser, setListUser] = useState([])
  const [formulario, setFormulario] = useState(false);
  useEffect(() => {
    getData()
  }, [formulario])


  const getData = async () => {
    const data = await UserServices.getAllDataUser();
    setListUser(data)
  }


  const handdleRegisterUser = () =>{
    navigate('/app/users/register')
  }

  // Función para eliminar un usuario
  const handdleDelete = async (id)=>{
    console.log()
    const response = await UserServices.deleteUser(id)
    console.log(response)
    if(response.success){
      alert("Usuario eliminado exitosamente")
      setFormulario(true)
    }else{
      alert("Error al eliminar al usuario")
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-end aling-items-end">
          <button onClick={handdleRegisterUser} className='btn btn-primary'>Nuevo registro</button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Empresa</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listUser.map((element, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{element.fullName}</td>
                  <td>{element.email}</td>
                  <td>{element.company.name}</td>
                  <td>
                    <button className='btn btn-primary btn-sm'>Editar</button>
                    <button onClick={()=>handdleDelete(element.id)} className='btn btn-danger btn-sm'>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}
