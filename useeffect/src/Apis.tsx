import { useEffect, useState } from "react";

const Apis: React.FC = () =>{

const [pokemon, setPokemon] = useState([]);  //Estado donde recoje la informacion
useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=6")
    .then(res => res.json()) //respuesta
    .then(data=>setPokemon(data)) // para almacenar dichos datos
}, []);
    return(
        <div>
            <h1>TARJETAS POKEMON</h1>
        </div>
    )
}
export default Apis;