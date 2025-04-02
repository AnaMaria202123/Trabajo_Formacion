import { useState } from "react";

interface ForUsuario{
    onSubmit:(data:{nombre:string, correo:string, edad:number})=>void
}

const Usuario:React.FC <ForUsuario>= ({onSubmit}) => { 

const [nombre,setNombre] = useState("");
const [correo,setCorreo] = useState("");
const [edad,setEdad] = useState(0);

 const enviar = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log("Formulario enviado correctamente")
        console.log(nombre, correo, edad);
        onSubmit({nombre, correo, edad});
    }
    return(
        <div>
            <h1>Datos usuario</h1>
            <form onSubmit={enviar}>
            <label>Nombre</label>
            <input type="text"  onChange={(evenet)=>setNombre(evenet.target.value)}/>
            <label>Correo</label>
            <input type="email"  onChange={(evenet)=>setCorreo(evenet.target.value)}/>
            <label>Edad</label>
            <input type="text"  onChange={(evenet)=>setEdad(parseInt(evenet.target.value))}/>
            <button type="submit">Enviar Formulario</button>
            </form>
            </div>
    )
}
export default Usuario;