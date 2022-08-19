import React, { useState } from "react"
import { nanoid } from 'nanoid'
import Swal from 'sweetalert2';
import PlantillaForm from "./PlantillaForm";

const Formulario = ({agregarTodo}) => {

    //valores por defecto
    const initialState = {
        workManager: '',
        attachmentName: '',
        billNumber: '',
        purchaseOrder: '',
        provider: '',
        description: '',
        facturationPeriod: '',
        invoiceMonth: '',
        society: '',
        dateAdmission: '',
        value: '',
        currencyType: '',
        cecos: '',
        status: '',
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
        if(!todo.workManager.trim() || !todo.attachmentName.trim()){
            Swal.fire({
                title:"Error!",
                text:"Los campos workManager o attachmentName son obligatorio",
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