import React, { useState } from "react/cjs/react.development"


const PlantillaLogin = ({Login}) => {

    const [details, setDetails] = useState({email:'', password:''})

    const submitHandle = (event) =>{

        event.preventDefault()

        Login(details)
    }

    const updateState = (event) =>{
        const {name , value} = event.target;
        setDetails({
            ...details, [name]: value
        })
    }
    

    return (
        <div className="row pt-4">
            <div className="col-lg-4 col-md-8 mx-auto">
                <div className="card">
                    <div className="container text-center fa-5x">
                    <i class="fas fa-user"></i>
                    </div>
                    <div className="card-header">
                        Iniciar Sesión
                    </div>
                    <div className="card-boddy m-2">
                        <form onSubmit={submitHandle}>
                            <div className="form-roup">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className='form-control' 
                                    placeholder='Correo' 
                                    required
                                    autoFocus
                                    onChange={updateState}
                                    value={details.email}
                                    />
                                    
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    name='password' 
                                    id='password'
                                    className='form-control' 
                                    placeholder='Contraseña' 
                                    required
                                    onChange={updateState}
                                    value={details.password}

                                    />
                            </div>
                            <button type='submit' className='btn btn-primary btn-default'>Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantillaLogin
