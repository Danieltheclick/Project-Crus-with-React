
export default function Nav({ Logout  }) {
    return (
        <>
            <nav className="navbar navbar-dark  fixed-top encabezado">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">General Status Project</a>
                    {
                        sessionStorage.getItem('mostrarNav') ? (
                            <>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="offcanvas offcanvas-end contenedor" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header contenedor">
                                        <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">Iluma Aliance</h5>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                                            <li className="nav-item ">
                                                <a className="nav-link text-light " aria-current="page" href="/general" >General Status</a>
                                            </li>
                                            <br></br>
                                            <li className="nav-item">
                                                <a className="nav-link text-light" href="/demand" >Demand Control</a>
                                            </li>
                                            <br></br>
                                            <li className="nav-item">
                                                <a className="nav-link text-light" href="/application">Application Inventory</a>
                                            </li>
                                            <br></br>
                                            <li className="nav-item">
                                                <a className="nav-link text-light" href="/servers">Servers</a>
                                            </li>
                                            <br></br>
                                            <li className="nav-item">
                                                <a className="nav-link text-light" href="/providers">Providers</a>
                                            </li>
                                            <br></br>
                                            <li className="nav-item">
                                                <a className="nav-link text-light" href="/factory">Factory Expenses</a>
                                            </li>
                                            <br></br>
                                            <li className="nav-item">
                                                <a className="nav-link text-light" href="/configLists" >Config Lists</a>
                                            </li>
                                            <br></br>
                                            <li className="nav-item">
                                                <a className="nav-link text-light" href="/" onClick={Logout}>Cerrar Sesión</a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                                
                            </>
                        ) : (
                            <h4></h4>
                        )
                    }

                </div>
            </nav>

        </>
    )
}
