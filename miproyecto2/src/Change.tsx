const Change = () => {
    const cambio = (dato:string) =>{
        console.log(dato);
    }
    return (
        <div>
        <input type="text"  onChange={(evenet)=>cambio(evenet.target.value)}placeholder="Escriba aqui"></input>
             
        </div>
    )
}
export default Change;
// evenet para acceder lo que tiene mi etiqueta