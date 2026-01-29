import { Container } from "react-bootstrap";

const Competencias = () => {
    return(
        <Container className="mt-5">
            <Container className="ms-3 d-flex flex-column justify-content-start">
                <h3>Principais Hard Skills</h3>
                <hr />
            </Container>
            <Container className="d-flex">
                <ul>
                    <li>Typescript, JavaScript, Python</li>
                    <li>React, Vue.js, HTML, CSS</li>
                    <li>NestJS, Node.js, Django (com Django REST Framework)</li>
                    <li>PostgreSQL, TypeORM</li>
                    <li>Git, GitHub, Docker, Kubernetes, GitHub Actions, DigitalOcean</li>
                    <li>Testes unitários e testes de integração (Jest, unittest) e BDD (Gherkin)</li>
                    <li>Scrum</li>
                </ul>
            </Container>
        </Container>
    )
}

export default Competencias;