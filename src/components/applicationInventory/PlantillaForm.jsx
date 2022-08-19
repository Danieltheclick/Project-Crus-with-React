
const PlantillaForm = ({ handleSubitm, handleChange, funcion, todo }) => {
    return (

        <>
            <div className="container-fluid">
                <form className="form row mt-3 formulario py-4" id="myForm" onSubmit={handleSubitm}>
                    <label for="NombreProyecto" class="form-label col-1"><i class="fas fa-project-diagram"></i> Name: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingresa Nombre del proyecto"
                            name="name"
                            value={todo.name}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>

                    <label for="Description" class="form-label col-1"><i class="fas fa-audio-description"></i> Description: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese la descripción"
                            name="description"
                            value={todo.description}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <label for="Division" class="form-label col-1"><i class="fas fa-battery-three-quarters"></i> Divison: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese Divison del proyecto"
                            name="division"
                            value={todo.division}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <label for="BussinesManager" class="form-label col-1"><i class="fas fa-calendar-check"></i> Bussines Manager: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese bussinesManager"
                            name="bussinesManager"
                            value={todo.bussinesManager}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <a href="" className="icon-comment"></a>
                    <label for="FrontLanguage" class="form-label col-1"><i class="fas fa-calendar-check"></i> Front Language: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese FrontLanguage"
                            name="frontLanguage"
                            value={todo.frontLanguage}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <label for="BlackLanguaje" class="form-label col-1"><i class="fas fa-calendar-check"></i> Black Languaje: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese el Languaje"
                            name="blackLanguaje"
                            value={todo.blackLanguaje}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <label for="Port" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> Port: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese Supplier"
                            name="port"
                            value={todo.port}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <label for="ServerApplication" className="form-label col-1"><i class="fas fa-address-card"></i> Server Application: </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="serverApplication"
                            value={todo.serverApplication}
                            select defaultValue=""
                            onChange={handleChange}
                        >
                            <option value="Poseidon"> Poseidon </option>
                            <option value="Venys"> Venus </option>
                        </select>
                    </div>
                    <label for="IpServerApplication" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> Ip Server Application: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese Type"
                            name="ipServerApplication"
                            value={todo.ipServerApplication}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <label for="NameDataBase" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> Name DataBase: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese CECO"
                            name="nameDataBase"
                            value={todo.nameDataBase}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <label for="SeverDataBase" className="form-label col-1"><i class="fas fa-arrow-circle-right"></i> Server DataBase: </label>
                    <div className="div col-5">
                        <input
                            type="number"
                            placeholder="Ingrese Total hours (7h/day)"
                            name="serverDataBase"
                            value={todo.serverDataBase}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <label for="IpServerDataBase" className="form-label col-1"><i class="fas fa-arrow-circle-right"></i></label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese Ip Server Data Base"
                            name="ipServerDataBase"
                            value={todo.ipServerDataBase}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <button className="btn btn-dark col-2 justify-content-center" type="submit" >
                        {funcion}
                    </button>

                </form>
            </div>
            <br></br><hr></hr>

        </>
    )
}

export default PlantillaForm
