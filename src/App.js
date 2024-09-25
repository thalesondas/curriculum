import { Col, Container, Row } from "react-bootstrap"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
  return (
    <Container className="page d-flex justify-content-center align-items-center">
      <Container className="inner-page">
        <h1>Thales Alfredo Borsatto Ondas</h1>
        <h2>Desenvolvedor Full Stack</h2>
        <Container className="d-flex">
          <Col>
            <ul>
              <li>(19) 97125-0294</li>
              <li>thalesondas0@gmail.com</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>linkedin.com/in/thales-ondas</li>
              <li>github.com/thalesondas</li>
            </ul>
          </Col>
        </Container>
        <Row>
          <li>Link do Site</li>
        </Row>
        <h3>Objetivo</h3>
        <hr />
        <p>
          Aplicar minhas habilidades em desenvolvimento de software em uma posição que permita contribuir para o sucesso da empresa. Busco oportunidades como:
        </p>
        <Container className="d-flex">
          <Col><li>Desenvolvedor Full Stack</li></Col>
          <Col><li>Desenvolvedor Back-end</li></Col>
        </Container>
        <li>Desenvolvedor Front-end</li>
        <h3>Resumo</h3>
        <hr />
        <p>Estou me formando em Análise e Desenvolvimento de Sistemas pela UTFPR de
          Cornélio Procópio, onde adquiri conhecimento em várias linguagens de
          programação, bancos de dados, bibliotecas e frameworks, etc. Além de aprimorar
          alguns desses conhecimentos e aprender novas tecnologias por meio de cursos
          online gratuitos e da plataforma Udemy.
        </p>
        <h3>Principais Competências / Idiomas</h3>
        <hr />
        <Container className="d-flex">
          <Col>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Versionamento Git/GitHub</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>React Bootstrap</li>
              <li>Python</li>
              <li>Java</li>
              <li>Inglês Avançado</li>
            </ul>
          </Col>
        </Container>
        <h3>Certificados</h3>
        <hr />
        <ul>
          <li>EF SET English Certificate 71/100 (C2 Proficient) (EF SET)</li>
          <li>Desenvolvimento Web Completo - 20 cursos + 20 Projetos (Udemy)</li>
          <li>Curso Desenvolvimento Web Moderno com JavaScript + Projetos (Udemy)</li>
          <li>Formação Cientista de Dados: O Curso Completo (Udemy)</li>
          <li>Excel para Análise de Dados (Preditiva Analytics)</li>
          <li>Power BI para Análise de Dados (Preditiva Analytics)</li>
        </ul>
        <h3>Formação Acadêmica</h3>
        <hr />
        <li>Graduação em Análise e Desenvolvimento de Sistemas (2021-2025)<br />Universidade Tecnológica Federal do Paraná</li>
      </Container>
    </Container>
  );
}

export default App;