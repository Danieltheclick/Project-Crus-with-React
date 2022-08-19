
const PlantillaForm = ({handleSubitm , handleChange, funcion, todo }) => {
    return (
        
        <>
            <div className="container-fluid">
                <form className="form row mt-3 formulario py-4" id = "myForm" onSubmit={handleSubitm}>
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
                    <label for="Status" class="form-label col-1"><i class="fas fa-battery-three-quarters"></i> Status: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese el estado del proyecto"
                            name="status"
                            value={todo.status}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="StarDate" class="form-label col-1"><i class="fas fa-calendar-check"></i> StarDate: </label>
                    <div className="div col-5">
                        <input
                            type="date"
                            placeholder="Ingrese la fecha de inicio"
                            name="startDate"
                            value={todo.startDate}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <a href="" className="icon-comment"></a>
                    <label for="EndDate" class="form-label col-1"><i class="fas fa-calendar-check"></i> EndDate: </label>
                    <div className="div col-5">
                        <input
                            type="date"
                            placeholder="Ingrese la Fecha de finalización"
                            name="endDate"
                            value={todo.endDate}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="DeplyDate" class="form-label col-1"><i class="fas fa-calendar-check"></i> DeplyDate: </label>
                    <div className="div col-5">
                        <input
                            type="date"
                            placeholder="Ingrese la Fecha de Implementación"
                            name="deployDate"
                            value={todo.deployDate}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="Supplier" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> Supplier: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese Supplier"
                            name="supplier"
                            value={todo.supplier}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="DBTLead" className="form-label col-1"><i class="fas fa-address-card"></i> DBT Lead: </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="dBTLead"
                            value={todo.dBTLead}
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
                    <label for="Divisions" class="form-label col-1"><i class="fas fa-comment-alt"></i> Divisions: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese Divisions"
                            name="divisions"
                            value={todo.divisions}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="Type" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> Type: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese Type"
                            name="type"
                            value={todo.type}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="CECO" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> CECO: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese CECO"
                            name="ceco"
                            value={todo.ceco}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="Totalhours" className="form-label col-1"><i class="fas fa-arrow-circle-right"></i> Total hours: </label>
                    <div className="div col-5">
                        <input
                            type="number"
                            placeholder="Ingrese Total hours (7h/day)"
                            name="totalhours"
                            value={todo.totalhours}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="Notes" className="form-label col-1"><i class="fas fa-comment-alt"></i> Notes: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese las Notas"
                            name="notes"
                            value={todo.notes}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="Completion" className="form-label col-1"><i class="fas fa-percentage"></i>Completion: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese las Notas"
                            name="completion"
                            value={todo.completion}
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
