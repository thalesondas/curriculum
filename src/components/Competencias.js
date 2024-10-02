import { Col, Container } from "react-bootstrap";

const Competencias = () => {
    return(
        <Container className="mt-1">
            <Container className="ms-3 d-flex flex-column justify-content-start">
                <h3 className="ms-3">Principais Competências / Idiomas</h3>
                <hr />
            </Container>
            <Container className="d-flex ms-3">
            <Col xs={3}>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                </ul>
            </Col>
            <Col xs={5}>
                <ul>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Versionamento Git/GitHub</li>
                </ul>
            </Col>
            <Col xs={4}>
                <ul>
                    <li>Bootstrap</li>
                    <li>Redux Toolkit</li>
                    <li>Java</li>
                    <li>Inglês Avançado</li>
                </ul>
            </Col>
            </Container>
        </Container>
    )
}

export default Competencias;