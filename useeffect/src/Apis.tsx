import { useEffect, useState } from "react";

interface Pokemoncito {
    name: string;
    url: string;
};

const Apis: React.FC = () => {

    const [pokemon, setPokemon] = useState<Pokemoncito[]>([]);  //Estado donde recoje la informacion

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=6")
            .then(res => res.json()) //respuesta
            .then(data => setPokemon(data.results)) // para almacenar dichos datos
    }, []);

    return (
        <div className="contenedor">
            <h1 className="titulo">TARJETAS POKEMON</h1>
            <div className="grid">
                {
                    pokemon.map((poke) => (
                        <div className="tarjeta">
                            <p className="nombre">{poke.name}</p>
                            <p className="url">{poke.url}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Apis;