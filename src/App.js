// Importação dos componentes necessários
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Home2 from "./Components/Home2";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// Componente funcional principal App
function App() {
  return (
    <div className="App">
      {/* Componente Router do React Router */}
      <Router>
        {/* Componente Header */}
        <Header />

        {/* Definição das rotas */}
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<Home />} />

          {/* Rota para a página "Sobre" */}
          <Route path="/about" element={<About />} />

          {/* Rota para a página "Contato" */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* <Home2 /> */}
      <Footer />
    </div>
  );
}

// Exportação do componente App
export default App;