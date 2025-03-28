const Usuario: React.FC = () => {

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
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Sueldo</th>
                    </tr>
                </thead>

                <tbody>
                    {usuarios.map((index)=>(
                    <tr>
                        <th>{index.Nombre}</th>
                        <th>{index.Apellido}</th>
                        <th>{index.Direccion}</th>
                        <th>{index.Sueldo}</th>
                    </tr>
                        
                    )
                
                    )
                    }
                    


                </tbody>
            </table>
        </div>
    )
}
export default Usuario;