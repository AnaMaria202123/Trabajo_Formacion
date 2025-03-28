interface User{
    Id: number;
    Nombre:string;
    Apellido: string;
    Direccion: string;
    Sueldo: number;
}
interface ListaUser{
    user:User[]
}

const UsuariosInterface:React.FC <ListaUser> = ({user}) => {
    return(
        <div>
        <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Sueldo</th>
                    </tr>
                </thead>

                <tbody>
                    {user.map((index)=>(
                    <tr>
                        <th>{index.Id}</th>
                        <th>{index.Nombre}</th>
                        <th>{index.Apellido}</th>
                        <th>{index.Direccion}</th>
                        <th>{index.Direccion}</th>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    )
    
}

export default UsuariosInterface;
                    


             