import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Linkedin from '../images/linkedin.svg'
import Email from '../images/email.svg'
import Git from '../images/git.svg'
import Telefone from '../images/telefone.svg'
import Site from '../images/site.svg'

const Cabecalho = () => {
    return(
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mt-4">Thales Alfredo Borsatto Ondas</h1>
            <h2 className="mb-5">DESENVOLVEDOR FULL STACK</h2>
            <Container className="d-flex">
            <Col className="d-flex justify-content-center">
                <ul>
                    <li className="mb-3 sem-bolinha">
                        <Image className="img-svg" src={Telefone} alt="Telefone" />
                        (19) 97125-0294
                    </li>
                    <li className="sem-bolinha">
                        <Image className="img-svg" src={Email} alt="Email" />
                        thalesondas0@gmail.com
                    </li>
                </ul>
            </Col>
            <Col className="d-flex justify-content-center">
                <ul>
                    <li className="mb-3 sem-bolinha">
                        <Image className="img-svg" src={Linkedin} alt="LinkedIn" />
                        <a className="custom-link" href="linkedin.com/in/thales-ondas" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/thales-ondas
                        </a>
                    </li>
                    <li className="sem-bolinha me-5">
                        <Image className="img-svg" src={Git} alt="Git" />
                        <a className="custom-link" href="github.com/thalesondas" target="_blank" rel="noopener noreferrer">
                            github.com/thalesondas
                        </a>
                    </li>
                </ul>
            </Col>
            </Container>
            <Row>
                <li className="sem-bolinha">
                    <Image className="img-svg" src={Site} alt="Site" />
                    Link do Site
                </li>
            </Row>
        </Container>
    )
}

export default Cabecalho;