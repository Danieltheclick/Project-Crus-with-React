const PlantillaForm = ({handleSubitm , handleChange, funcion, todo }) => {
    return (

        <>
            <div className="container-fluid">
                <form className="form row mt-3 formulario py-4" id = "myForm" onSubmit={handleSubitm}>
                    <label for="Ip" class="form-label col-1"><i class="fas fa-project-diagram"></i> IP: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingresa Nombre del proyecto"
                            name="ip"
                            value={todo.ip}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>

                    <label for="Name" class="form-label col-1"><i class="fas fa-audio-description"></i> Name: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese la descripción"
                            name="name"
                            value={todo.name}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>

                    <label for="Plataform" className="form-label col-1"><i class="fas fa-address-card"></i> Plataform: </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="plataform"
                            value={todo.plataform}
                            select defaultValue=""
                            onChange={handleChange}
                            >
                            <option value="GDT"> GDT </option>
                            <option value="WAS"> WAS </option>
                            <option value="GCP"> GCP</option>
                            <option value="IBM"> IBM </option>
                        </select>
                    </div>
                    <label for="Type" className="form-label col-1"><i class="fas fa-address-card"></i> Type: </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="type"
                            value={todo.type}
                            select defaultValue=""
                            onChange={handleChange}
                            >
                            <option value="PROD"> PROD </option>
                            <option value="PREPO"> PREPO </option>
                            <option value="QSA"> QSA</option>
                            <option value="DEV"> DEV </option>
                        </select>
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
                    <label for="Os" className="form-label col-1"><i class="fas fa-address-card"></i> OS: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese la descripción"
                            name="os"
                            value={todo.os}
                            className="form-control mb-2"
                            onChange={handleChange}

                        />
                    </div>
                    <label for="Description" className="form-label col-1"><i class="fas fa-address-card"></i> Description: </label>
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
                    <button className="btn btn-dark col-1 justify-content-center" type="submit" >
                        {funcion}
                    </button>

                </form>
            </div>
            <br></br><hr></hr>

        </>
    )
}

export default PlantillaForm
