import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Sidebar } from './components/sidebar'


export const Layout = () => {
    return (
        <>
            <div className="contenedor">
                <Sidebar/>
                <div className="contentModules">
                   <Navbar/>
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
