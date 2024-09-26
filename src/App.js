import { useEffect } from "react";
import { Container } from "react-bootstrap"
import Cabecalho from "./components/Cabecalho";
import Objetivo from "./components/Objetivo";
import Resumo from "./components/Resumo";
import Competencias from "./components/Competencias";
import Certificados from "./components/Certificados";
import Formacao from "./components/Formacao";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {

  useEffect(() => {
    document.title = 'Curriculum Vitae - Thales Ondas';
  }, []);

  return (
    <Container className="page d-flex justify-content-center align-items-center">
      <Container className="inner-page">
        <Cabecalho />
        <Objetivo />
        <Resumo />
        <Competencias />
        <Certificados />
        <Formacao />
      </Container>
    </Container>
  );
}

export default App;