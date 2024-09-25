import { Col, Container } from "react-bootstrap";

const Competencias = () => {
    return(
        <Container className="mt-1">
            <Container className="d-flex justify-content-start">
                <h3>Principais Competências / Idiomas</h3>
            </Container>
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
            <Col style={{ transform: 'translateX(-22px)' }}>
                <ul>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li style={{ whiteSpace: 'nowrap' }}>Versionamento Git/GitHub</li>
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
        </Container>
    )
}

export default Competencias;