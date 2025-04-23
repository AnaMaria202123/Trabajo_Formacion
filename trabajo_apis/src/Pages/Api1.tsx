import { useEffect, useState } from 'react';

interface Digimon {
  name: string;
  img: string;
  level: string;
}

function Api1() {
  const [data, setData] = useState<Digimon[]>([]);

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then(res => res.json())
      .then(d => setData(d.slice(0, 6)));
  }, []);

  return (
    <div>
      <h2 className="title">TARJETAS DIGIMON</h2>
      <div className="cards">
        {data.map(d => (
          <div className="card">
            <img src={d.img} alt={d.name} />
            <h3>{d.name}</h3>
            <p>Nivel: {d.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Api1;
