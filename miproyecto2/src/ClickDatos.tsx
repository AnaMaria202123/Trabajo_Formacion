import"./Styleclickdatos.css" 
const ClickDatos:React.FC = () =>{

    const HasClick= () =>{
        alert("Estoy haciendo click en el boton");
        console.log("boton clickeado")
    }
    return(
        <div>
            <button className="click" onClick={HasClick}> HasClick</button>
        </div>
    )
}
export default ClickDatos;