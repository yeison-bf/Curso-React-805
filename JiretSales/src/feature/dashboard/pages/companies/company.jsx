import React, { useEffect, useState } from 'react'
import { CompanyServices } from './services/company.services'
import { IoMdAddCircle } from "react-icons/io";


export const Company = () => {

  const [listCompanies, setListCompanies] = useState([]);

  // Hooks del useEffect para traer datos de las compañias
  useEffect(() => {
    getdataCompanies()
  }, [])


  // Función para obtener los datos de la compañia
  const getdataCompanies = async () => {
    const dataCompanies = await CompanyServices.getAllData();
    setListCompanies(dataCompanies)
    console.log(dataCompanies)
  }





  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-end aling-items-end">
          <button className='btn btn-primary'><IoMdAddCircle /> Nuevo registro</button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">NIT</th>
                <th scope="col">Nombre</th>
                <th scope="col">Dirección</th>
                <th scope="col">Correo</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listCompanies.map((element, index) => (
                <tr >
                  <th scope="row">1</th>
                  <td>{element.nit}</td>
                  <td>{element.name}</td>
                  <td>{element.address}</td>
                  <td>{element.email}</td>
                  <td>
                    <button className='btn btn-primary btn-sm'>Editar</button>
                    <button className='btn btn-danger btn-sm'>Eliminar</button>
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
