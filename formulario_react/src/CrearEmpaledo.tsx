import { useState } from "react";

interface ForEmpleado{
    onSubmit:(data:{correo:string, alias:string, contraseña:string})=>void
}

const CrearEmpaledo:React.FC <ForEmpleado>= ({onSubmit}) => { 

const [correo,setCorreo] = useState("");
const [alias,setAlias] = useState("");
const [contraseña,setContraseña] = useState("");

 const enviar = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log("Formulario enviado correctamente")
        console.log(correo, alias, contraseña);
        onSubmit({correo, contraseña, alias});
    }
    return(
        <div>
            <h1>Crear Empleado</h1>
            <form onSubmit={enviar}>
            <label>Correo</label>
            <input type="email"  onChange={(evenet)=>setCorreo(evenet.target.value)}/>
            <label>Alias</label>
            <input type="text"  onChange={(evenet)=>setAlias(evenet.target.value)}/>
            <label>Contraseña</label>
            <input type="password"  onChange={(evenet)=>setContraseña(evenet.target.value)}/>
            <button type="submit">Enviar Formulario</button>
            </form>
            </div>
    )
}
export default CrearEmpaledo;