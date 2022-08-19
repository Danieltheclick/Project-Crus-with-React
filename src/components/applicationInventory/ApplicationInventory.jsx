import Formulario from "./Formulario"
import EditFormulario from "./EditFormulario"
import Todo from "./Todo"
import React from 'react'

const ApplicationInventory = ({updateTodo,setEditing,currentTodo,editing,editRow,agregarTodo,eliminarTodo,todos,setCurrentTodo}) =>{

    
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
                                <th >Division</th>
                                <th >bussines Manager</th>
                                <th >front Language</th>
                                <th >black Languaje</th>
                                <th >port</th>
                                <th >serverApplication</th>
                                <th >ip Server Application</th>
                                <th >name DataBase</th>
                                <th >server DataBase</th>
                                <th >ip Server DataBase</th>
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

export default ApplicationInventory
