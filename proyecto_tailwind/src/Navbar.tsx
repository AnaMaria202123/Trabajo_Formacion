
const NavBar : React.FC = () =>{
    return(
        <nav className="bg-blue-600 p-4">
            <ul className="space-x-4 text-white">
                <li  className="hover:text-gray-300">Home</li>
                <li className="hover:text-black">Contactos</li>
                <li className="hover:text-yellow-300">About</li>
            </ul>
        </nav>
    )
}
export default NavBar;