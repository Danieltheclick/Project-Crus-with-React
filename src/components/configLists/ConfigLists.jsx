import Formulario from "./Formulario"
import EditFormulario from "./EditFormulario"
import Todo from "./Todo"
import React from 'react'

const ConfigLists = ({updateTodo,setEditing,currentTodo,editing,editRow,agregarTodo,eliminarTodo,todos,setCurrentTodo}) =>{

    
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
                                <th >typeRequeriment</th>
                                <th >statusPrice</th>
                                <th >typeField</th>
                                <th >approval</th>
                                <th >Description</th>
                                <th className="col-2">Editar / Eliminar</th>
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

export default ConfigLists
