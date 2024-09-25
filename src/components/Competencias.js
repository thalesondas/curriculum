import { Col, Container } from "react-bootstrap";

const Competencias = () => {
    return(
        <>
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
        </>
    )
}

export default Competencias;