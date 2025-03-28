const Ejercicio = () => {
    let nombre = "";
    let apellido = "";

    const hacerClick = () => {
        alert(nombre + " " + apellido);
    };

    return (
        <div>
            <input type="text" placeholder="Escribe tu nombre" onChange={(evenet) => nombre = evenet.target.value} />
            <br />
            <input type="text" placeholder="Escribe tu apellido" onChange={(evenet) => apellido = evenet.target.value} />
            <br />
            <button className="botonclick" onClick={hacerClick}>Hacer Click</button>
        </div>
    );
};

export default Ejercicio;
