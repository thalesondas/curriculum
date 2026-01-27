import { Col, Container } from "react-bootstrap";

const Competencias = () => {
    return(
        <Container className="mt-1">
            <Container className="ms-3 d-flex flex-column justify-content-start">
                <h3 className="ms-3">Principais Competências / Idiomas</h3>
                <hr />
            </Container>
            <Container className="d-flex ms-3">
            <Col xs={4}>
                <ul>
                    <li className="fw-bold">Principais Hard Skills</li>
                    <li>Typescript, JavaScript, Python</li>
                    <li>React, Vue.js, HTML, CSS</li>
                    <li>NestJS, Node.js, Django/DRF</li>
                </ul>
            </Col>
            <Col xs={4}>
                <ul>
                    <br/>
                    <li>PostgreSQL, TypeORM</li>
                    <li>Git, GitHub, Docker, Kubernetes</li>
                    <li>GitHub Actions, DigitalOcean</li>
                    <li>Jest, unittest, BDD (Gherkin)</li>
                </ul>
            </Col>
            <Col xs={4}>
                <ul>
                    <li className="fw-bold">Outros</li>
                    <li>Scrum</li>
                    <br/>
                    <li className="fw-bold">Idiomas</li>
                    <li>Inglês (B2-C1)</li>
                </ul>
            </Col>
            </Container>
        </Container>
    )
}

export default Competencias;