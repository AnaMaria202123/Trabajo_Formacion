import {BrowserRouter as Router} from  "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./Pages/About/About";
import Error from "./Pages/Error/PageNotFound";
import Home from "./Pages/Home/Home"
import Nav from "./Componentes/Nav";
import User from "./User/User";
import Profile from "./User/Profile";

function App() {
  

  return (
    <div>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/error" element={<Error></Error>}></Route>
          <Route path="/user/:name" element={<User></User>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>


        </Routes>
      </Router>
    </div>
  )
}

export default App
