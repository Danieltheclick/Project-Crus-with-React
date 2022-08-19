import React, { useState } from "react"
import { nanoid } from 'nanoid'
import Swal from 'sweetalert2';
import PlantillaForm from "./PlantillaForm";
const Formulario = ({agregarTodo}) => {

    //valores por defecto
    const initialState = {
        typeRequeriment: '',
        statusPrice: '',
        typeField: '',
        approval: '',
        description:'',
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
        if(!todo.typeRequeriment.trim() || !todo.statusPrice.trim()){
            Swal.fire({
                title:"Error!",
                text:"Los campos typeRequeriment o statusPrice son obligatorio",
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
            typeRequeriment: todo.typeRequeriment,
            statusPrice: todo.statusPrice,
            typeField: todo.typeField,
            approval: todo.approval,
            description: todo.description,
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