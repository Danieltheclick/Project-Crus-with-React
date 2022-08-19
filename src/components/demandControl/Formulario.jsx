import React, { useState } from "react"
import { nanoid } from 'nanoid'
import Swal from 'sweetalert2';
import PlantillaForm from "./PlantillaForm";

const Formulario = ({agregarTodo}) => {

    //valores por defecto
    const initialState = {
        nameProject: '',
        productOwner: '',
        dbtLeader: '',
        dateAdmission: '',
        proposedStartDate: '',
        priority: '',
    }

    const [todo, setTodo] = useState(initialState)     
    


    const heandleAddformChange = (event) =>{
        const {name , value} = event.target;

        // Copiamos lo que venga  con el spread operator, 
        // utilizamos el name para saber a que input nos referimos y le asignamos el valor 
        setTodo((old) => ({
            ...old,[name]: value
        }))
        
    };

    const handleAddformSubmit = (event) =>{
        event.preventDefault();
        if(!todo.nameProject.trim() || !todo.productOwner.trim()){
            Swal.fire({
                title:"Error!",
                text:"Los campos Name o Description son obligatorio",
                icon:"error",

            })
            return
        }

        Swal.fire({
            title:"Éxito!",
            text:"Campos agregados correctamente",
            icon:"success",

        })

        agregarTodo({
            nameProject: todo.nameProject,
            productOwner: todo.productOwner,
            dbtLeader: todo.dbtLeader,
            dateAdmission: todo.dateAdmission,
            proposedStartDate: todo.proposedStartDate,
            priority: todo.priority,
            id:nanoid(),
        })

        setTodo(initialState)
        
    }


    return (
        <PlantillaForm
            handleSubitm = {handleAddformSubmit}
            handleChange = {heandleAddformChange}
            funcion = {'Agregar'}
            todo = {todo}
        />
    )
}

export default Formulario