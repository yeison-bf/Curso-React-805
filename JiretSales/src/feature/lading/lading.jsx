import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './components/navbar'

export const Landing = () => {
    return (
        <>
            <div className="container-fluid">
                <Navbar />
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://wallpapers.com/images/hd/puppy-background-kdvpi15bljx07ui0.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://st2.depositphotos.com/4568481/11875/i/450/depositphotos_118754108-stock-photo-samoyed-dog-at-the-park.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="m-4">
                    <div className="container">
                        <h2>Mis Mascotas</h2>
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-header">
                                        Mascota 1
                                    </div>
                                    <div className="card-body">
                                        <img src="https://st2.depositphotos.com/4568481/11875/i/450/depositphotos_118754108-stock-photo-samoyed-dog-at-the-park.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="card-footer">
                                        Estoy emn venta
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-header">
                                        Mascota 1
                                    </div>
                                    <div className="card-body">
                                        <img src="https://st2.depositphotos.com/4568481/11875/i/450/depositphotos_118754108-stock-photo-samoyed-dog-at-the-park.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="card-footer">
                                        Estoy emn venta
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-header">
                                        Mascota 1
                                    </div>
                                    <div className="card-body">
                                        <img src="https://st2.depositphotos.com/4568481/11875/i/450/depositphotos_118754108-stock-photo-samoyed-dog-at-the-park.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="card-footer">
                                        Estoy emn venta
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="m-4">
                    <div className="container">
                        <h2>Mis Servicios</h2>
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-header">
                                        Mascota 1
                                    </div>
                                    <div className="card-body">
                                        <img src="https://st2.depositphotos.com/4568481/11875/i/450/depositphotos_118754108-stock-photo-samoyed-dog-at-the-park.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="card-footer">
                                        Estoy emn venta
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-header">
                                        Mascota 1
                                    </div>
                                    <div className="card-body">
                                        <img src="https://st2.depositphotos.com/4568481/11875/i/450/depositphotos_118754108-stock-photo-samoyed-dog-at-the-park.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="card-footer">
                                        Estoy emn venta
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-header">
                                        Mascota 1
                                    </div>
                                    <div className="card-body">
                                        <img src="https://st2.depositphotos.com/4568481/11875/i/450/depositphotos_118754108-stock-photo-samoyed-dog-at-the-park.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="card-footer">
                                        Estoy emn venta
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
