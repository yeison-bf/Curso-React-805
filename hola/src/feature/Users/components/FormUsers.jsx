import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const FormUsers = () => {

  const navigate = useNavigate()
  const [roles, setRoles] = useState([])
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    getDataRole(),
      getDataCompanies();
  }, [])

  async function getDataRole() {
    const response = await axios.get('http://localhost:3030/roles');
    setRoles(response.data)
  }

  async function getDataCompanies() {
    const response = await axios.get('http://localhost:3030/companies');
    setCompanies(response.data)
  }


  // Constantes para almacenar los datos del formulario
  const [fullName, setfullName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [roleId, setroleId] = useState("")
  const [companyId, setcompanyId] = useState("")


  async function handdleSave(e) {
    e.preventDefault()
    const response = await axios.post('http://localhost:3030/users',
      { fullName, email, password, roleId, companyId }
    )
    console.log(response)
    if (response.data.user) {
      navigate('/')
    }else{
      alert("Pailas, error en el registro... ")
    }
  }

  return (
    <div className='container p-5'>

      <h1>Formulario de registro</h1>
      <form onSubmit={handdleSave}>

        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input onChange={(e) => setfullName(e.target.value)} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correco electronico</label>
          <input onChange={(e) => setemail(e.target.value)} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input onChange={(e) => setpassword(e.target.value)} type="password" className="form-control" />
        </div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Rol</label>
              <select onChange={(e) => setroleId(e.target.value)} className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                {roles.map((element, index) => (
                  <option key={element.id} value={element.id}>{element.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Compañia</label>
              <select onChange={(e) => setcompanyId(e.target.value)} className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                {companies.map((element, index) => (
                  <option key={element.id} value={element.id}>{element.name}</option>
                ))}
              </select>
            </div>

          </div>
        </div>
        <div className="mb-3">
          <input type="submit" className="btn btn-primary" value="Registrar" />
        </div>
      </form>





    </div>
  )
}
