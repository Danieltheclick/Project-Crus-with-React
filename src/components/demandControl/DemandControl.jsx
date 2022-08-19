import Formulario from "./Formulario"
import EditFormulario from "./EditFormulario"
import Todo from "./Todo"
import React from 'react'

 const DemandControl = ({ updateTodo, setEditing, currentTodo, editing, editRow, agregarTodo, eliminarTodo, todos }) => {
    return (
        <div>
            <div>
                {
                    editing ? (
                        <EditFormulario
                            updateTodo={updateTodo}
                            setEditing={setEditing}
                            currentTodo={currentTodo}
                            editing={editing}
                            setEditing={setEditing}
                        />
                    ) : (
                        <>
                            <Formulario
                                agregarTodo={agregarTodo}
                            ></Formulario>
                            <div className="container-fluid table-responsive">
                                <table className="table table-sm table-hover table-bordered ">
                                    <thead className="">
                                        <tr>
                                            <th>#</th>
                                            <th >Name</th>
                                            <th >productOwner</th>
                                            <th >dbtLeader</th>
                                            <th >dateAdmission</th>
                                            <th >proposedStartDate</th>
                                            <th >priority</th>
                                            <th>Editar / Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            //Recorremos el todo, que nos devuelve un array
                                            todos.map((item, index) => (
                                                <Todo
                                                    key={item.id}
                                                    todo={item}
                                                    index={index}
                                                    eliminarTodo={eliminarTodo}
                                                    editRow={editRow}

                                                ></Todo>
                                            ))
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </>
                    )
                }



            </div>
        </div>
    )
}

export default DemandControl