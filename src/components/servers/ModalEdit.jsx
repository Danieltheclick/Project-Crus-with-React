import { Modal, ModalBody, ModalHeader, ModalFooter, FormGroup } from 'reactstrap'
import CrudServers from './CrudServers'

const ModalEdit = ({ handleEditChange, handleEditSubitm, todo, editing, setEditing, initialEditState }) => {
    return (
        <FormGroup>
            <CrudServers
                InitialEditState={initialEditState}
            ></CrudServers>
            {editing &&
                <div>
                    <Modal isOpen={editing}>
                        <ModalHeader className="encabezado text-center text-light">
                            <div><h3>Editar Formulario</h3></div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="container-fluid">
                                <form className="form row mt-3 formulario py-4" id="myForm" onSubmit={handleEditSubitm}>
                                    <label for="Ip" class="form-label col-1"><i class="fas fa-project-diagram"></i> </label>
                                    <div className="div col-5">
                                        <input
                                            type="text"
                                            placeholder="Ingresa Nombre del proyecto"
                                            name="ip"
                                            value={todo.ip}
                                            className="form-control mb-2"
                                            onChange={handleEditChange}

                                        />
                                    </div>

                                    <label for="Name" class="form-label col-1"><i class="fas fa-audio-description"></i> </label>
                                    <div className="div col-5">
                                        <input
                                            type="text"
                                            placeholder="Ingrese la descripción"
                                            name="name"
                                            value={todo.name}
                                            className="form-control mb-2"
                                            onChange={handleEditChange}

                                        />
                                    </div>

                                    <label for="Plataform" className="form-label col-1"><i class="fas fa-address-card"></i> </label>
                                    <div className="div col-5">
                                        <select
                                            className="form-control mb-2"
                                            name="plataform"
                                            value={todo.plataform}
                                            select defaultValue=""
                                            onChange={handleEditChange}
                                        >
                                            <option value="GDT"> GDT </option>
                                            <option value="WAS"> WAS </option>
                                            <option value="GCP"> GCP</option>
                                            <option value="IBM"> IBM </option>
                                        </select>
                                    </div>
                                    <label for="Type" className="form-label col-1"><i class="fas fa-address-card"></i> </label>
                                    <div className="div col-5">
                                        <select
                                            className="form-control mb-2"
                                            name="type"
                                            value={todo.type}
                                            select defaultValue=""
                                            onChange={handleEditChange}
                                        >
                                            <option value="PROD"> PROD </option>
                                            <option value="PREPO"> PREPO </option>
                                            <option value="QSA"> QSA</option>
                                            <option value="DEV"> DEV </option>
                                        </select>
                                    </div>
                                    <label for="proposedStartDate" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i>  </label>
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
                                    <label for="Os" className="form-label col-1"><i class="fas fa-address-card"></i> </label>
                                    <div className="div col-5">
                                        <input
                                            type="text"
                                            placeholder="Ingrese la descripción"
                                            name="os"
                                            value={todo.os}
                                            className="form-control mb-2"
                                            onChange={handleEditChange}

                                        />
                                    </div>
                                    <label for="Description" className="form-label col-1"><i class="fas fa-address-card"></i> </label>
                                    <div className="div col-5">
                                        <input
                                            type="text"
                                            placeholder="Ingrese la descripción"
                                            name="description"
                                            value={todo.description}
                                            className="form-control mb-2"
                                            onChange={handleEditChange}

                                        />
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
