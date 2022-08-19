import React, { useState } from "react"
import { nanoid } from 'nanoid'
import Swal from 'sweetalert2';
import PlantillaForm from "./PlantillaForm";
import CrudGeneral from "./CrudGeneral";

const Formulario = ({agregarTodo}) => {

    //valores por defecto
    const initialState = {
        name: '',
        description: '',
        status: '',
        startDate: '',
        endDate: '',
        deployDate: '',
        supplier: '',
        dBTLead: '',
        divisions: '',
        type: '',
        ceco: '',
        totalhours: '',
        notes: '',
        completion: '',
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
            text:"Campos agregados correctamente",
            icon:"success",

        })

        agregarTodo({
            name: todo.name,
            description: todo.description,
            status: todo.status,
            startDate: todo.startDate,
            endDate: todo.endDate,
            deployDate: todo.deployDate,
            supplier: todo.supplier,
            dBTLead: todo.dBTLead,
            divisions: todo.divisions,
            type: todo.type,
            ceco: todo.ceco,
            totalhours: todo.totalhours,
            notes: todo.notes,
            completion: todo.completion,
            id:nanoid(),
        })

        setTodo(initialState)
        
    }


    return (
        <>
        
        <PlantillaForm
            handleSubitm = {handleAddformSubmit}
            handleChange = {heandleAddformChange}
            funcion = {'Agregar'}
            todo = {todo}
        />
        </>
    )
}

export default Formulario