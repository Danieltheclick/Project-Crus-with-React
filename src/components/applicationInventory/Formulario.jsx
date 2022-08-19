import React, { useState } from "react"
import { nanoid } from 'nanoid'
import Swal from 'sweetalert2';
import PlantillaForm from "./PlantillaForm";
import CrudApplication from "./CrudApplication";
const Formulario = ({agregarTodo}) => {

    //valores por defecto
    const initialState = {
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