import { Col, Container, Row } from "react-bootstrap";

const Cabecalho = () => {
    return(
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mt-4">Thales Alfredo Borsatto Ondas</h1>
            <h2 className="mb-5">DESENVOLVEDOR FULL STACK</h2>
            <Container className="d-flex">
            <Col className="d-flex justify-content-center">
                <ul>
                    <li className="mb-3">(19) 97125-0294</li>
                    <li>thalesondas0@gmail.com</li>
                </ul>
            </Col>
            <Col className="d-flex justify-content-center">
                <ul>
                    <li className="mb-3">linkedin.com/in/thales-ondas</li>
                    <li>github.com/thalesondas</li>
                </ul>
            </Col>
            </Container>
            <Row>
                <li>Link do Site</li>
            </Row>
        </Container>
    )
}

export default Cabecalho;