import Swal from "sweetalert2"
import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ModalEdit from './ModalEdit'


function EditFormulario({currentTodo, updateTodo, setEditing, editing }) {
    //Acá recibimos los datos que se van a actualizar
    const [todo, setTodo] = useState(currentTodo)
    const initialEditState = {
        name: '',
        description: '',
        division: '',
        bussinesManager: '',
        frontLanguage: '',
        blackLanguaje: '',
        port: '',
        serverApplication: '',
        ipServerApplication: '',
        nameDataBase: '',
        serverDataBase: '',
        ipServerDataBase: '',
        id: nanoid(),
    }
    

    // useEffect para controlar que estamos enviado alguna informacion al campo y nos deje cambiar la misma
    useEffect(() => {
        setTodo(currentTodo)
    }, [currentTodo])
    
    
    
   

    //acá pintamos el formulario con los datos obtenidos
    const handleEditChange = (event) => {
        const { name, value } = event.target
    
        setTodo({ ...todo, [name]: value })

        console.log(todo)
    }

    
    const handleEditSubitm = (event) =>{
       event.preventDefault();
       if(!todo.name.trim() || !todo.description.trim()){
        Swal.fire({
            title:"Error!",
            text:"Los campos Name o Description son obligatorio",
            icon:"error",

        })
        return
    }

    Swal.fire({
        title:"Éxito!",
        text:"Campos actualizados correctamente",
        icon:"success",

    })
    
    //Actualizamos con los nuevos campos.
    updateTodo(todo.id , todo)

    }
    

    

    return (
        <>
        <ModalEdit
            handleEditChange={handleEditChange}
            handleEditSubitm={handleEditSubitm}
            todo={todo}
            editing={editing}
            setEditing={setEditing}
            initialEditState={initialEditState}
        >

        </ModalEdit>
        
        </>
    )
}

export default EditFormulario
