import { Container, Row, Col } from "react-bootstrap";

const Formacao = () => {
    return(
        <Container className="mt-5" style={{ fontSize: '0.8rem' }}>
            <Container className="ms-3 d-flex flex-column">
                <h3>Formação Acadêmica</h3>
                <hr />
            </Container>
            <Row className="ms-3 me-4 fw-bold">
                <Col>Análise e Desenvolvimento de Sistemas</Col>
                <Col className="text-end">Mar 2021 - Jul 2025</Col>
            </Row>
            <Row className="ms-3 me-4">
                <Col>Universidade Tecnológica Federal do Paraná (UTFPR)</Col>
                <Col className="text-end">Cornélio Procópio - PR</Col>
            </Row>
        </Container>
    )
}

export default Formacao;