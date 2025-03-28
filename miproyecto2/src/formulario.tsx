import { useState } from "react";
const Formulario:React.FC = ()=>{

    const [nombre,setNombre]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const enviar= (evenet:React.FormEvent<HTMLFormElement>) => {
        evenet.preventDefault()
    
        alert(`El nombre es: ${nombre}, El email es: ${email}, El password es: ${password}`);

    }
    return(
        <div>
            <form onSubmit={enviar}>
                <label>Nombre Completo</label>
                <input type="text" placeholder="Escribir Nombre" onChange={(evenet)=>{setNombre(evenet.target.value)}}></input>
                <label>Email</label>
                <input type="emial" placeholder="Escribir Correo" onChange={(evenet)=>{setEmail(evenet.target.value)}}></input>
                <label>Password</label>
                <input type="password" placeholder="Escribir Contraseña" onChange={(evenet)=>{setPassword(evenet.target.value)}}></input>
                <button type="submit">Aceptar</button>

            </form>
        </div>
    )
}
export default Formulario;