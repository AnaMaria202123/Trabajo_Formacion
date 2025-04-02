interface ResumenEmpleado{
    correo: string;
    alias: string;
    contraseña: string;
    
}

const Detalle:React.FC <ResumenEmpleado>= ({correo,alias,contraseña}) =>{
    return(
        <div>
            <h1>Detalle de los datos Empleado</h1>
            <p><strong>Correo:</strong>{correo}</p>
            <p><strong>Alias:</strong>{alias}</p>
            <p><strong>Contraseña:</strong>{contraseña}</p>
        </div>
    )
}
export default Detalle;