import React, { useState } from 'react';
import FormComponent from '../Form/FormComponent';

export const MainComponent = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleRegistrarseClick = () => {
        // Cuando se hace clic en "Registrarse", cambiar el estado para mostrar el formulario
        setMostrarFormulario(true);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand text-secondary" href="/">|Seguros NPC|</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="nav justify-content-center collapse navbar-collapse" id="navbarNav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="/">Planes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="/">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="/">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Renderizar el formulario solo si mostrarFormulario es true */}
            {mostrarFormulario ? (
                <div className="container-fluid m-4">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <div className="jumbotron jumbotron-fluid ">
                                    <div className="container">
                                        <h1 className="display-4">Registrese</h1>
                                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates? Quisquam, voluptates? Quisquam, voluptates?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {<FormComponent />}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src="./public/segurocasa.jpg" className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title fw-bolder">SEGUROS NPC</h5>
                                    <p className="card-text text-secondary">En SEGUROS NPC, entendemos que la tranquilidad y la seguridad son fundamentales en la vida. Nos dedicamos a ofrecer soluciones de seguros adaptadas a tus necesidades, brindándote la confianza que mereces en cada etapa de tu vida.</p>
                                    <button className='btn btn-success px-4 float-start'>Login</button>
                                    <button className='btn btn-primary float-end' onClick={handleRegistrarseClick}>Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}



            <div className="container-fluid fixed-bottom">
                <footer className="d-flex flex-wrap justify-content-between align-items-center my-3 pt-2 border-top">
                    <div className="col-md-6 d-flex justify-content-end">
                        <span className="mb-3 mb-md-0 text-muted">© 2023 Company, Inc.</span>
                    </div>
                    <ul className="nav col-md-6 justify-content-start list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}
