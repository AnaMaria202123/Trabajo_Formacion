import { useEffect, useState } from 'react';

interface Personaje {
  name: string;
  image: string;
}

function Api2() {
  const [data, setData] = useState<Personaje[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(info => setData(info.results.slice(0, 6)));
  }, []);

  return (
    <div>
      <h2>RICK & MORTY</h2>
      <div className="cards">
        {data.map(p => (
          <div className="card">
            <img src={p.image} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Api2;
