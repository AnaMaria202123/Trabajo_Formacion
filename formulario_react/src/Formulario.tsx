import React, { useState } from "react"


const Formulario:React.FC = () =>{ 

const [nombre,setNombre] = useState("");
const [apellido,setApellido] = useState("");
const [direccion,setDireccion] = useState("");
const [telefono,setTelefono] = useState("");
const [edad,setEdad] = useState("");

    const enviar = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log("Formulario enviado")
        console.log(nombre, apellido, direccion, telefono, edad);
    }
    return(
        <div>
            <form onSubmit={enviar}>
            <label>Nombre</label>
            <input type="text"  onChange={(evenet)=>setNombre(evenet.target.value)}/>
            <label>Apellido</label>
            <input type="text"  onChange={(evenet)=>setApellido(evenet.target.value)}/>
            <label>Direccion</label>
            <input type="text"  onChange={(evenet)=>setDireccion(evenet.target.value)}/>
            <label>Telefono</label>
            <input type="text"  onChange={(evenet)=>setTelefono(evenet.target.value)}/>
            <label>Edad</label>
            <input type="text"  onChange={(evenet)=>setEdad(evenet.target.value)}/>
            <button type="submit">Enviar</button>
            </form>

        </div>
    )
}
export default Formulario;