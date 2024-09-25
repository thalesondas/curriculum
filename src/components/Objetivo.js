import { Col, Container } from "react-bootstrap";

const Objetivo = () => {
    return(
        <Container className="d-flex flex-column align-items-center">
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
        </Container>
    )
}

export default Objetivo;