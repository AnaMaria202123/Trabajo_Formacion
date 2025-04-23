import { useEffect, useState } from 'react';

interface PersonajeHarry {
  name: string;
  image: string;
}

function Api3() {
  const [personajes, setPersonajes] = useState<PersonajeHarry[]>([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(res => res.json())
      .then(data => setPersonajes(data.slice(0, 6))); // Solo los primeros 6
  }, []);

  return (
    <div>
      <h2>PERSONAJES DE HARRY POTTER</h2>
      <div className="cards">
        {personajes.map((p) => (
          <div className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Api3;