import Formulario from "./Formulario"
import EditFormulario from "./EditFormulario"
import Todo from "./Todo"
import React from 'react'

const GeneralStatus = ({updateTodo,setEditing,currentTodo,editing,editRow,agregarTodo,eliminarTodo,todos,setCurrentTodo}) =>{

    
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
                        setCurrentTodo={setCurrentTodo}
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
                                <th >Description</th>
                                <th >Status</th>
                                <th >StarDate</th>
                                <th >EndDate</th>
                                <th >DeployDate</th>
                                <th >Supplier</th>
                                <th >DBT Lead</th>
                                <th >Division</th>
                                <th >Type</th>
                                <th >CECO</th>
                                <th >Total hours (7h/day)</th>
                                <th >Notes</th>
                                <th >% Completion</th>
                                <th>Editar / Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //Recorremos el todo, que nos devuelve un array
                                todos && todos.map((item, index) => (
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

export default GeneralStatus
