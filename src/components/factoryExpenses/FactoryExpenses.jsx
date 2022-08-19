import Formulario from "./Formulario"
import EditFormulario from "./EditFormulario"
import Todo from "./Todo"
import React from 'react'

const FactoryExpenses = ({updateTodo,setEditing,currentTodo,editing,editRow,agregarTodo,eliminarTodo,todos,setCurrentTodo}) =>{

    
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
                                <th >workManager</th>
                                <th >attachmentName</th>
                                <th >billNumber</th>
                                <th >purchaseOrder</th>
                                <th >provider</th>
                                <th >description</th>
                                <th >facturationPeriod</th>
                                <th >invoiceMonth</th>
                                <th >society</th>
                                <th >dateAdmission</th>
                                <th >value</th>
                                <th >currencyType</th>
                                <th >cecos</th>
                                <th >status</th>
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

export default FactoryExpenses
