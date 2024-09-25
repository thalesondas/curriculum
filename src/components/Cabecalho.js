import { Col, Container, Row } from "react-bootstrap";

const Cabecalho = () => {
    return(
        <>
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
        </>
    )
}

export default Cabecalho;