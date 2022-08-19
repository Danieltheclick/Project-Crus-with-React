import React, { useState } from 'react'
import Swal from "sweetalert2"
import ApplicationInventory from './ApplicationInventory'

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
            name: todo.name,
            description: todo.description,
            division: todo.division,
            bussinesManager: todo.bussinesManager,
            frontLanguage: todo.frontLanguage,
            blackLanguaje: todo.blackLanguaje,
            port: todo.port,
            serverApplication: todo.serverApplication,
            ipServerApplication: todo.ipServerApplication,
            nameDataBase: todo.nameDataBase,
            serverDataBase: todo.serverDataBase,
            ipServerDataBase: todo.ipServerDataBase,

        })
    }

    const updateTodo = (id, updateTodo) => {
        setEditing(false)

        setTodos(todos.map((todo) => (todo.id === id ? updateTodo : todo)))
    }

    return (

        <ApplicationInventory
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
        ></ApplicationInventory>
        
        
        
        
    )
}

export default CrudGeneral
