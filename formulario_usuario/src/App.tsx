import React, { useState } from "react";
import Usuario from "./Usuario"
import PerfilUsuario from "./PerfilUsuario"

  
const App: React.FC = ()=>{
  const [datos,setDatos]= useState<{nombre:string, correo:string, edad:number}|null>(null)
  const enviarSubmit= (data:{nombre:string, correo:string, edad:number}) =>{

    setDatos(data)

  }
  return (
    <div>
      <Usuario onSubmit={enviarSubmit}></Usuario>
      {datos && <PerfilUsuario nombre= {datos.nombre} correo={datos.correo} edad={datos.edad}></PerfilUsuario>}
      
    </div>
    
  )
}
export default App;
