import React, { useEffect, useState } from 'react'
import { UserServices } from './services/user.service'
import { useNavigate } from 'react-router-dom'

export const Users = () => {

  const navigate = useNavigate();

  const [listUser, setListUser] = useState([])

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    const data = await UserServices.getAllDataUser();
    setListUser(data)
  }


  const handdleRegisterUser = () =>{
    navigate('/app/users/register')
  }

  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-end aling-items-end">
          <button onClick={handdleRegisterUser} className='btn btn-primary'>Nuevo registro</button>
        </div>
        <div className="col-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Empresa</th>
              </tr>
            </thead>
            <tbody>
              {listUser.map((element, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{element.fullName}</td>
                  <td>{element.email}</td>
                  <td>{element.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}
