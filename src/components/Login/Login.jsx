import { useState } from 'react'
import axios from 'axios'
import PlantillaLogin from './PlantillaLogin'
import Nav from '../Nav'
import Swal from 'sweetalert2';

const Login = () => {

    const adminuser = {
        email: 'admin@admin.com',
        password: 'admin123'
    }

    const [mostrarNav, setmostrarNav] = useState(false)
    const [error, setError] = useState('')

    
    const Login = details => {
        console.log(details)
        if (details.email == adminuser.email && details.password == adminuser.password) {
            console.log('logueado ')
            setmostrarNav(true)
            sessionStorage.setItem('mostrarNav', mostrarNav)
            Swal.fire({
                title: "Bienvenido",
                text: "Bienvenido",
                icon: "success",
                showConfirmButton: false
            }) 
            setTimeout(() => {
                window.location.href = '/general'
            }, 1500)
        } else {
            Swal.fire({
                title: "Error",
                text: "Datos erroneos",
                icon: "error",
                showConfirmButton: false,
                timer:1500
            }) 
        }
    }

    const Logout = () => {
        sessionStorage.setItem('mostrarNav', !mostrarNav)
    }
    
    

    return (
        // <div className="App">
        //     {(user.email != '') ? (
        //         <div className="welcome">
        //             <h2> Welcome, <span>{user.name}</span></h2>
        //             <button>Logout</button>
        //         </div>
        //     ) : (
        //         <PlantillaLogin
        //             Login = {Login}
        //             error={error}
        //         />
        //     )}
        // </div>
        <>
            <PlantillaLogin
                Login={Login}
                error={error}

            />
            <Nav
                mostrarNav={mostrarNav}
                Logout={Logout}
                setmostrarNav={setmostrarNav}
            />
        </>
    )
}

export default Login
