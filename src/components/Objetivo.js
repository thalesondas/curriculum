import { Col, Container } from "react-bootstrap";

const Objetivo = () => {
    return(
        <Container className="mt-3 d-flex flex-column align-items-center">
            <Container className="d-flex flex-column justify-content-start align-items-start">
                <h3 className="ms-3">Objetivo</h3>
                <hr />
            </Container>
            <p className="text-center" style={{ lineHeight: '1.3rem'}}>
                Aplicar minhas habilidades em desenvolvimento de software em uma posição que<br/>
                permita contribuir para o sucesso da empresa. Busco oportunidades como:
            </p>
            <Container className="d-flex">
                <Col className="ms-5 d-flex justify-content-start"><li>Desenvolvedor Full Stack</li></Col>
                <Col className="me-5"><li>Desenvolvedor Back-end</li></Col>
            </Container>
            <li className="mt-1 me-5">Desenvolvedor Front-end</li>
        </Container>
    )
}

export default Objetivo;