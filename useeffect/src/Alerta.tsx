import { useEffect } from "react";

function Alerta() {
  useEffect(() => {
    alert("Este componente se ha cargado.");
  }, []); 

  return <h1>Componente con advertencia</h1>;
}

export default Alerta;