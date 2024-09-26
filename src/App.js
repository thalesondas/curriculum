import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import LadoDireito from "./components/LadoDireito";
import LadoEsquerdo from "./components/LadoEsquerdo";
import Cabecalho from "./components/Cabecalho";
import Objetivo from "./components/Objetivo";
import Resumo from "./components/Resumo";
import Competencias from "./components/Competencias";
import Certificados from "./components/Certificados";
import Formacao from "./components/Formacao";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(previousMode => !previousMode)
  }

  useEffect(() => {
    document.title = 'Curriculum Vitae - Thales Ondas';
  }, []);

  return (
    <Container className={`page d-flex justify-content-between align-items center ${darkMode ? 'dark-mode' : ''}`}>
        <div style={{ width: '22%' }}>
          <LadoEsquerdo />
        </div>
        <div className="inner-page">
          <Cabecalho />
          <Objetivo />
          <Resumo />
          <Competencias />
          <Certificados />
          <Formacao />
        </div>
        <div style={{ width: '22%' }}>
          <LadoDireito passDarkMode={toggleDarkMode} />
        </div>
    </Container>
  );
}

export default App;