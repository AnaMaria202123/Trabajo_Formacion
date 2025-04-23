import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "./Componente/Nav";
import Api1 from "./Pages/Api1";
import Api2 from "./Pages/Api2";
import Api3 from "./Pages/Api3";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api1" element={<Api1 />} />
        <Route path="/api2" element={<Api2 />} />
        <Route path="/api3" element={<Api3 />} />
      </Routes>
    </Router>
  );
}

export default App;
