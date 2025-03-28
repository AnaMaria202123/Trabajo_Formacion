import Saludo from "./Saludo"
import Variable from "./Variable"
import EjercicioProps from "./EjercicioProps"
import Mensaje from "./Mensaje"
import PropsFC from "./PropsFC"
import Usuario from "./Usuario"
import UsuarioInterface from "./UsuariosInterface"
import Click from "./Click"
import ClickDatos from "./ClickDatos"
import Change from "./Change"
import Ejercicio from "./Ejercicio"


function App() {
  const usuarios =[
    {Id:1, Nombre:"Ana", Apellido:"Zuñiga", Direccion:"12345", Sueldo:"1500000"},
    {Id:2, Nombre:"Alexa", Apellido:"Lopez", Direccion:"12345", Sueldo:"1500000"},
    {Id:3, Nombre:"David", Apellido:"Zapata", Direccion:"12345", Sueldo:"1000000"},
    {Id:4, Nombre:"Adriana", Apellido:"Zuñiga", Direccion:"12345", Sueldo:"1500000"},
    {Id:5, Nombre:"John", Apellido:"Cruz", Direccion:"12345", Sueldo:"15000"},
    {Id:6, Nombre:"Milton", Apellido:"Patiño", Direccion:"12345", Sueldo:"1500000"},
]
  
  return (
    
   <div>
    <Saludo></Saludo>
    <Variable></Variable>
    <EjercicioProps nombre="Ana"></EjercicioProps>
    <Mensaje></Mensaje>
    <PropsFC saludo="Este es el saludo"></PropsFC>
    <Usuario></Usuario>
    <UsuarioInterface user={usuarios}></UsuarioInterface>
    <Click></Click>
    <ClickDatos></ClickDatos>
    <Change></Change>
    <Ejercicio></Ejercicio>
    
   </div>
  )
}

export default App;
