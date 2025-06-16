import React from 'react'
import { Outlet } from 'react-router-dom'
import './layoutStyle.css'


export const Layout = () => {
    return (
        <>
            <div className="contenedor">
                <div className="sidebar">

                </div>
                <div className="contentModules">
                    <nav className="seccion1">
                        <div className='infoUser'>
                            <img src="https://normalsuperiormontesdemaria.edu.co/uploadImagesEdunormas/us-1.png" alt="" />
                            <h3>Jiret Josefino Del Cristo Osorio</h3>
                        </div>
                    </nav>
                    <div className="seccion2">
                        <div className="card p-4">
                            <Outlet/>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
