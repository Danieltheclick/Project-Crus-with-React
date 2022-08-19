import React, { useState } from 'react'
import Swal from "sweetalert2"
import FactoryExpenses from './FactoryExpenses'

function CrudGeneral({InitialEditState }) {
    const [editing, setEditing] = useState(false) // controlamos cuando se esta editando
    const [todos, setTodos] = useState([])
    const agregarTodo = todo => {
        setTodos((old) => [...old, todo]) //Copiamos los datos viejos y le añadimos los nuevos
    }

    
    const [currentTodo, setCurrentTodo] = useState(InitialEditState) // Datos actuales
   

    const eliminarTodo = (id) => {

        Swal.fire(
            {
                title: 'Realmente desea  eliminar este campo?',
                showDenyButton: true,
                confirmButtonText: 'SI',
                denyButtonText: `NO`,
                confirmButtonColor: '#04374f',

            }).then((result) => {
                if (result.isConfirmed) {
                    setTodos((old) => old.filter(item => item.id !== id))
                    setEditing(false)
                    Swal.fire('Datos Eliminados', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire({
                        title: 'No se eliminaron los datos',
                        icon: 'success'
                    })
                }
            })
        // <Modals
        //     id={id}
        //     setTodos={setTodos}
        //     setEditing={setEditing}
        // />

    }

    const editRow = (todo) => {
        setEditing(true)

        setCurrentTodo({
            id: todo.id,
            workManager: todo.workManager,
            attachmentName: todo.attachmentName,
            billNumber: todo.billNumber,
            purchaseOrder: todo.purchaseOrder,
            provider: todo.provider,
            description: todo.description,
            facturationPeriod: todo.facturationPeriod,
            invoiceMonth: todo.invoiceMonth,
            society: todo.society,
            dateAdmission: todo.dateAdmission,
            value: todo.value,
            currencyType: todo.currencyType,
            cecos: todo.cecos,
            status: todo.status,

        })
    }

    const updateTodo = (id, updateTodo) => {
        setEditing(false)

        setTodos(todos.map((todo) => (todo.id === id ? updateTodo : todo)))
    }

    return (

        <FactoryExpenses
            editing={editing}
            updateTodo={updateTodo}
            setEditing={setEditing}
            currentTodo={currentTodo}
            editing={editing}
            setEditing={setEditing}
            agregarTodo={agregarTodo}
            eliminarTodo={eliminarTodo}
            editRow={editRow}
            todos={todos}
            setCurrentTodo = {setCurrentTodo}
        ></FactoryExpenses>
        
      
        
    )
}

export default CrudGeneral
