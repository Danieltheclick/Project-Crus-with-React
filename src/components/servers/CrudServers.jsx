import React, { useState } from 'react'
import Swal from "sweetalert2"
import Servers from './Servers'

const CrudServers = ({InitialEditState }) =>{
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
       

    }

    const editRow = (todo) => {
        setEditing(true)

        setCurrentTodo({
            id: todo.id,
            ip: todo.ip,
            name: todo.name,
            plataform: todo.plataform,
            type: todo.type,
            proposedStartDate: todo.proposedStartDate,
            os: todo.os,
            description: todo.description,
            

        })
    }

    const updateTodo = (id, updateTodo) => {
        setEditing(false)

        setTodos(todos.map((todo) => (todo.id === id ? updateTodo : todo)))
    }

    return (

        
        <Servers
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
        />
        
        
    )
}

export default CrudServers
