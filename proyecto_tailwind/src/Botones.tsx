
const Botones: React.FC = () => {

    return(
        <div className="flex flex-col justify-content-center items-center bg-yellow-300 w-full min-h-screen">
            <h1 className="text-4xl text-blue-100">Hola! Este es mi primer componente con tailwind</h1>
            <p>Este es el parrafo dek componente Tailwind</p>
            <button className="bg-red-300 rounded text-white px-8 py-4">Ok</button>
        </div>
    )
}
export default Botones;