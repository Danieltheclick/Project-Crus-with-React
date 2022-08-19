const PlantillaForm = ({handleSubitm , handleChange, funcion, todo }) => {
    return (

        <>
            <div className="container-fluid">
                <form className="form row mt-3 formulario py-4" id = "myForm" onSubmit={handleSubitm}>
                    <label for="nameProject" class="form-label col-1"><i class="fas fa-project-diagram"></i> Name: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingresa Nombre del proyecto"
                            name="nameProject"
                            value={todo.nameProject}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>

                    <label for="productOwner" class="form-label col-1"><i class="fas fa-audio-description"></i> Product Owner: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese la descripción"
                            name="productOwner"
                            value={todo.productOwner}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>

                    <label for="dbtLeader" className="form-label col-1"><i class="fas fa-address-card"></i> DBT Lead: </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="dbtLeader"
                            value={todo.dbtLeader}
                            select defaultValue=""
                            onChange={handleChange}
                            >
                            <option value="AlexanderCardenas"> Alexander Cardenas </option>
                            <option value="BeatrizDuque"> Beatriz Duque </option>
                            <option value="OscarMejia"> Oscar Mejia </option>
                            <option value="LinaMaria Morales"> Lina Maria Morales </option>
                            <option value="DianaYepez"> Diana Yepez </option>
                            <option value="LuzAmparo"> Luz Amparo </option>
                        </select>
                    </div>
                    <label for="dateAdmission" class="form-label col-1"><i class="fas fa-comment-alt"></i> Date Admission: </label>
                    <div className="div col-5">
                        <input
                            type="date"
                            placeholder="Ingrese Divisions"
                            name="dateAdmission"
                            value={todo.dateAdmission}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <label for="proposedStartDate" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> Proposed StartDate : </label>
                    <div className="div col-5">
                        <input
                            type="date"
                            placeholder="Ingrese Type"
                            name="proposedStartDate"
                            value={todo.proposedStartDate}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    {/* <label for="priority" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> priority: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese CECO"
                            name="priority"
                            value={todo.priority}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div> */}
                    <label for="priority" className="form-label col-1"><i class="fas fa-address-card"></i> Priority: </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="priority"
                            value={todo.priority}
                            select defaultValue=""
                            onChange={handleChange}
                            >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                            
                        </select>
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
