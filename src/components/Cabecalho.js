import { Col, Container, Row, Image } from "react-bootstrap";

const Cabecalho = () => {
    return(
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mt-5">Thales Ondas</h1>
            <h2 className="mb-5">Desenvolvedor Full Stack</h2>
            <Row className="mb-1">
                <p className="ms-4 mb-0">
                    <span className="ms-3">Americana - SP</span> |
                    <span className="ms-4 me-4">(19) 97125-0294</span>
                    <span className="ms-2">| thalesondas0@gmail.com</span>
                </p>
            </Row>
            <Row>
                <p className="mb-0">
                    <a href="https://linkedin.com/in/thales-ondas" target="_blank" rel="noreferrer" className="custom-link">linkedin.com/in/thales-ondas</a> | 
                    <a href="https://github.com/thalesondas" target="_blank" rel="noreferrer" className="custom-link mx-1">github.com/thalesondas</a> | 
                    <a href="https://portfolio-thalesondas.netlify.app/" target="_blank" rel="noreferrer" className="custom-link mx-1">portfolio-thalesondas.netlify.app/</a>
                </p>
            </Row>
        </Container>
    )
}

export default Cabecalho;