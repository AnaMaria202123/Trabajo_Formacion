interface ResumenUsuario{
    nombre: string;
    correo: string;
    edad: number;
    
}

const PerfilUsuario:React.FC <ResumenUsuario>= ({nombre,correo,edad}) =>{
    return(
        <div>
            <h1>Detalle del Usuario</h1>
            <p><strong>Nombre:</strong>{nombre}</p>
            <p><strong>Correo:</strong>{correo}</p>
            <p><strong>Edad:</strong>{edad}</p>
        </div>
    )
}
export default PerfilUsuario;