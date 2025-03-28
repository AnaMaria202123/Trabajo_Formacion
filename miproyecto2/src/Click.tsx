import"./Styleclick.css" 
const Click:React.FC = () =>{
    const nombre:string ="Ana María";
    const hacerClick= (nombre:string) =>{
        alert(`Bienvenido ${nombre}`);
        console.log("nombre")
    }
    return(
        <div>
            <button className="botonclick" onClick={() => {hacerClick(nombre)}}>Hacer Click</button>
        </div>
    )
}
export default Click;