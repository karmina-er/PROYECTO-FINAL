import "./Formulario.css"
import { useState } from "react"

export function Formulario(){
    const[nombre, setNombre] = useState("")
    const[contraseña, setContraseña] = useState("")


    return(
        <section>
            <h1>Login </h1>

            <form className='formulario'>
                <input
                 type="text" 
                 value={nombre}
                 onChange={e => setNombre(e.target.value)}
                 />
                <input 
                type="password"
                value={contraseña}
                onChange={e => setContraseña(e.target.value)} 
                />
                <button>Iniciar sesion</button>
            </form>

        </section>
    )
}