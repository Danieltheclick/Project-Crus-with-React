
const PlantillaForm = ({handleSubitm , handleChange, funcion, todo }) => {
    return (
        
        <>
            <div className="container-fluid">
                <form className="form row mt-3 formulario py-4" id = "myForm" onSubmit={handleSubitm}>
                    <label for="TypeRequeriment" class="form-label col-1"><i class="fas fa-project-diagram"></i> Type Requeriment: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingresa Nombre del proyecto"
                            name="typeRequeriment"
                            value={todo.typeRequeriment}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div> 
                    
                    <label for="Description" class="form-label col-1"><i class="fas fa-audio-description"></i> Description: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese la descripción"
                            name="description"
                            value={todo.description}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="StatusPrice" class="form-label col-1"><i class="fas fa-battery-three-quarters"></i> status Price: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese el estado del proyecto"
                            name="statusPrice"
                            value={todo.statusPrice}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="TypeField" class="form-label col-1"><i class="fas fa-calendar-check"></i> Type Field: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese la fecha de inicio"
                            name="typeField"
                            value={todo.typeField}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="Approval" class="form-label col-1"><i class="fas fa-calendar-check"></i> Approval: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese la fecha de inicio"
                            name="approval"
                            value={todo.approval}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    
                    <button className="btn btn-dark col-2 justify-content-center" type="submit" >
                        {funcion}
                    </button>
                    
                </form>
            </div>
            <br></br><hr></hr>
            
        </>
    )
}

export default PlantillaForm
