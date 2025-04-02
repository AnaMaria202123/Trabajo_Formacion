interface Mensaje{
    saludo:string;
    nombre: string;
}
const Props: React.FC <Mensaje>= ({saludo, nombre})  =>{
    return(
        <div>
            <p>Este es el componente props</p>
            <h1>{saludo}</h1>
            <h1>{nombre}</h1>
        </div>
    )
}
export default Props;