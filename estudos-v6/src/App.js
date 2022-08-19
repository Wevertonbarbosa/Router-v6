import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css';
//Componentes Exportados...
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Pagina1 from "./Pages/Pagina1/Pagina1";
import Explorando from "./Pages/Pagina1/PgExplorando/Explorando";
import Pagina2 from "./Pages/Pagina2/Pagina2";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          {/* Pagina 1 com seus complementos */}
          <Route path="/pagina1"  element={<Pagina1/>} />
          <Route path="/explorando" element={<Explorando/>} />
          {/* Pagina 2 com seus complementos */}
          <Route path="/pagina2" element={<Pagina2/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
