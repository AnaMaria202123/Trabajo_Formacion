import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/api1">Api1</Link></li>
        <li><Link to="/api2">Api2</Link></li>
        <li><Link to="/api3">Api3</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
