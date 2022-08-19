import {Modal, ModalBody, ModalHeader, ModalFooter, FormGroup} from 'reactstrap'
import CrudGeneral from "./CrudGeneral"

function ModalEdit({handleEditChange, handleEditSubitm, todo, editing, setEditing,initialEditState, editRow}) {
    return (
        <FormGroup>
            <CrudGeneral
                InitialEditState={initialEditState}
            ></CrudGeneral>
                {editing &&
                    <div>
                    <Modal isOpen={editing}>
                        <ModalHeader className="encabezado text-center text-light">
                            <div><h3>Editar Formulario</h3></div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="container-fluid">
                            <form className="form row mt-3 formulario py-4" id = "myForm" onSubmit={handleEditSubitm}>
                                <label for="NombreProyecto" class="form-label col-1"><i class="fas fa-project-diagram"></i> </label>
                                <div className="div col-5">
                                    <input
                                        type="text"
                                        placeholder="Ingresa Nombre del proyecto"
                                        name="name"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.name}
                                        
                                        
                                    />
                                </div> 
                                
                                <label for="Description" class="form-label col-1"><i class="fas fa-audio-description"></i> </label>
                                <div className="div col-5">
                                    <input
                                        type="text"
                                        placeholder="Ingrese la descripción"
                                        name="description"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.description}
                                        
                                        
                                    />
                                </div>
                                <label for="Status" class="form-label col-1"><i class="fas fa-battery-three-quarters"></i></label>
                                <div className="div col-5">
                                    <input
                                        type="text"
                                        placeholder="Ingrese el estado del proyecto"
                                        name="status"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.status}
                                        
                                        
                                    />
                                </div>
                                <label for="StarDate" class="form-label col-1"><i class="fas fa-calendar-check"></i></label>
                                <div className="div col-5">
                                    <input
                                        type="date"
                                        placeholder="Ingrese la fecha de inicio"
                                        name="startDate"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.startDate}
                                        
                                        
                                    />
                                </div>
                                <a href="" className="icon-comment"></a>
                                <label for="EndDate" class="form-label col-1"><i class="fas fa-calendar-check"></i></label>
                                <div className="div col-5">
                                    <input
                                        type="date"
                                        placeholder="Ingrese la Fecha de finalización"
                                        name="endDate"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.endDate}
                                        
                                        
                                    />
                                </div>
                                <label for="DeplyDate" class="form-label col-1"><i class="fas fa-calendar-check"></i></label>
                                <div className="div col-5">
                                    <input
                                        type="date"
                                        placeholder="Ingrese la Fecha de Implementación"
                                        name="deployDate"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.deployDate}
                                        
                                        
                                    />
                                </div>
                                <label for="Supplier" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i></label>
                                <div className="div col-5">
                                    <input
                                        type="text"
                                        placeholder="Ingrese Supplier"
                                        name="supplier"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.supplier}
                                        
                                        
                                    />
                                </div>
                                <label for="DBTLead" className="form-label col-1"><i class="fas fa-address-card"></i> </label>
                                <div className="div col-5">
                                    <select
                                        className="form-control mb-2"
                                        value={todo.dBTLead}
                                        name="dBTLead"
                                        select defaultValue=""
                                        onChange={''}
                                        >
                                        <option value="AlexanderCardenas"> Alexander Cardenas </option>
                                        <option value="BeatrizDuque"> Beatriz Duque </option>
                                        <option value="OscarMejia"> Oscar Mejia </option>
                                        <option value="LinaMaria Morales"> Lina Maria Morales </option>
                                        <option value="DianaYepez"> Diana Yepez </option>
                                        <option value="LuzAmparo"> Luz Amparo </option>
                                    </select>
                                </div>
                                <label for="Divisions" class="form-label col-1"><i class="fas fa-comment-alt"></i></label>
                                <div className="div col-5">
                                    <input
                                        type="text"
                                        placeholder="Ingrese Divisions"
                                        name="divisions"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.divisions}
                                        onChange={''}
                                        
                                    />
                                </div>
                                <label for="Type" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> </label>
                                <div className="div col-5">
                                    <input
                                        type="text"
                                        placeholder="Ingrese Type"
                                        name="type"
                                        onChange={handleEditChange}
                                        
                                        className="form-control mb-2"
                                        value={todo.type}
                                        onChange={''}
                                        
                                    />
                                </div>
                                <label for="CECO" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> </label>
                                <div className="div col-5">
                                    <input
                                        type="text"
                                        placeholder="Ingrese CECO"
                                        name="ceco"
                                        onChange={handleEditChange}  
                                        className="form-control mb-2"
                                        value={todo.ceco}
                                        
                                    />
                                </div>
                                <label for="Totalhours" className="form-label col-1"><i class="fas fa-arrow-circle-right"></i></label>
                                <div className="div col-5">
                                    <input
                                        type="number"
                                        placeholder="Ingrese Total hours (7h/day)"
                                        name="totalhours"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.totalhours}
                                        
                                    />
                                </div>
                                <label for="Notes" className="form-label col-1"><i class="fas fa-comment-alt"></i> </label>
                                <div className="div col-5">
                                    <input
                                        type="text"
                                        placeholder="Ingrese las Notas"
                                        name="notes"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.notes}
                                        
                                    />
                                </div>
                                <label for="Completion" className="form-label col-1"><i class="fas fa-percentage"></i></label>
                                <div className="div col-5">
                                    <input
                                        type="text"
                                        placeholder="Ingrese las Notas"
                                        name="completion"
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        value={todo.completion}
                                    />
                                </div>   
                                <button className="btn btn-dark col-2 justify-content-center" type="submit" >
                                    Editar
                                </button>
                                <button className="btn btn-dark col-auto justify-content-center"onClick={()=> setEditing(!editing)}>
                                    Cancelar
                                </button>
                            </form>
                            
                        </div>
                        </ModalBody>
                        <ModalFooter className="encabezado text-center text-light">
                            <h3 >Iluma Aliance</h3>
                        </ModalFooter>
                    </Modal>
                </div>
                }
        
        </FormGroup>
    )
}

export default ModalEdit
