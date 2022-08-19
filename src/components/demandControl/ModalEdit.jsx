import { Modal, ModalBody, ModalHeader, ModalFooter, FormGroup } from 'reactstrap'
import CrudDemand from './CrudDemand'

export const ModalEdit = ({ handleEditChange, handleEditSubitm, todo, editing, setEditing, initialEditState }) => {
    return (
        <FormGroup>
            <CrudDemand
                InitialEditState={initialEditState}
            ></CrudDemand>
            {editing &&
                <div>
                    <Modal isOpen={editing}>
                        <ModalHeader className="encabezado text-center text-light">
                            <div><h3>Editar Formulario</h3></div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="container-fluid">
                                <form className="form row mt-3 formulario py-4" id="myForm" onSubmit={handleEditSubitm}>
                                    <label for="nameProject" class="form-label col-1"><i class="fas fa-project-diagram"></i>: </label>
                                    <div className="div col-5">
                                        <input
                                            type="text"
                                            placeholder="Ingresa Nombre del proyecto"
                                            name="nameProject"
                                            value={todo.nameProject}
                                            className="form-control mb-2"
                                            onChange={handleEditChange}

                                        />
                                    </div>

                                    <label for="productOwner" class="form-label col-1"><i class="fas fa-audio-description"></i>: </label>
                                    <div className="div col-5">
                                        <input
                                            type="text"
                                            placeholder="Ingrese la descripción"
                                            name="productOwner"
                                            value={todo.productOwner}
                                            className="form-control mb-2"
                                            onChange={handleEditChange}

                                        />
                                    </div>

                                    <label for="dbtLeader" className="form-label col-1"><i class="fas fa-address-card"></i>: </label>
                                    <div className="div col-5">
                                        <select
                                            className="form-control mb-2"
                                            name="dbtLeader"
                                            value={todo.dbtLeader}
                                            select defaultValue=""
                                            onChange={handleEditChange}
                                        >
                                            <option value="AlexanderCardenas"> Alexander Cardenas </option>
                                            <option value="BeatrizDuque"> Beatriz Duque </option>
                                            <option value="OscarMejia"> Oscar Mejia </option>
                                            <option value="LinaMaria Morales"> Lina Maria Morales </option>
                                            <option value="DianaYepez"> Diana Yepez </option>
                                            <option value="LuzAmparo"> Luz Amparo </option>
                                        </select>
                                    </div>
                                    <label for="dateAdmission" class="form-label col-1"><i class="fas fa-comment-alt"></i>: </label>
                                    <div className="div col-5">
                                        <input
                                            type="date"
                                            placeholder="Ingrese Divisions"
                                            name="dateAdmission"
                                            value={todo.dateAdmission}
                                            className="form-control mb-2"
                                            onChange={handleEditChange}

                                        />
                                    </div>
                                    <label for="proposedStartDate" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> : </label>
                                    <div className="div col-5">
                                        <input
                                            type="date"
                                            placeholder="Ingrese Type"
                                            name="proposedStartDate"
                                            value={todo.proposedStartDate}
                                            className="form-control mb-2"
                                            onChange={handleEditChange}

                                        />
                                    </div>
                                    <label for="priority" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> :</label>
                                    <div className="div col-5">
                                        <select
                                            className="form-control mb-2"
                                            name="priority"
                                            value={todo.priority}
                                            select defaultValue=""
                                            onChange={handleEditChange}
                                        >
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>

                                        </select>
                                    </div>
                                    <button className="btn btn-dark col-2 justify-content-center" type="submit" >
                                        Editar
                                    </button>
                                    <button className="btn btn-dark col-auto justify-content-center" onClick={() => setEditing(!editing)}>
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
