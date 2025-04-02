import React, { useState } from "react";
import Props from "./Props";
import Formulario from "./Formulario";
import CrearEmpleado from "./CrearEmpaledo";
import Detalle from "./Detalle";

  
const App: React.FC = ()=>{
  const [datos,setDatos]= useState<{correo:string, contraseña:string, alias:string}|null>(null)
  const enviarSubmit= (data:{correo:string, contraseña:string, alias:string}) =>{

    setDatos(data)

  }
  return (
    <div>
      <Props saludo="Hola este es mi saludo" nombre="Ana Zuñiga"></Props>
      <Formulario></Formulario>
      <CrearEmpleado onSubmit={enviarSubmit}></CrearEmpleado>
      {datos && <Detalle correo= {datos.correo} contraseña={datos.contraseña} alias={datos.alias}></Detalle>}
      
    </div>
    
  )
}


export default App;
