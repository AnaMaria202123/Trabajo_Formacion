import {Link} from "react-router-dom"
const Nav : React.FC = () =>{
    return(
            <nav className="navbar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/error">Error</Link></li>
                <li><Link to="/user/ana">User</Link></li>

              </ul>
            </nav>
          )
        }
    
          

export default Nav;