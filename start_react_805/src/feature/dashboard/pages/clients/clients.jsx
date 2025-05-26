import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Clients = () => {


  const [list, setList] = useState([])


  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character/')
      .then((result) => {
        setList(result.data.results)
      }).catch((err) => {
        console.log(err)
      })
      .finally(() => {
      });

  }, [])



  const dataRickAndMonthy = () => {

    console.log(list)

  }



  return (
    <>
      <div>Hola desde el Clients</div>
      <button onClick={dataRickAndMonthy}>ver</button>
      <table className='table'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>

        { list.map((element, index)=>( 

          <tr>
            <td>{index+1}</td>
            <td><img className='imagenTabla' src={element.image} alt="" /></td>
            <td>{element.name}</td>
            <td>Humano</td>
            <td><button className='btn btn-primary btn-sm'>Ver</button></td>
          </tr>

        )) }

        </tbody>
      </table>
    </>
  )
}
