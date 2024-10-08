import { Col, Container, Row, Image } from "react-bootstrap";
import Linkedin from '../images/linkedin.svg'
import Email from '../images/email.svg'
import Git from '../images/git.svg'
import Telefone from '../images/telefone.svg'
import Site from '../images/site.svg'

const Cabecalho = () => {
    return(
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mt-4">Thales Alfredo Borsatto Ondas</h1>
            <h2 className="mb-4 text-uppercase">Desenvolvedor Full Stack</h2>
            <Container className="mt-2 d-flex">
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
            <Col className="d-flex justify-content-start">
                <ul>
                    <li className="mb-3 sem-bolinha">
                        <Image className="img-svg" src={Linkedin} alt="LinkedIn" />
                        <a className="custom-link" href="https://linkedin.com/in/thales-ondas" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/thales-ondas
                        </a>
                    </li>
                    <li className="sem-bolinha me-5">
                        <Image className="img-svg" src={Git} alt="Git" />
                        <a className="custom-link" href="https://github.com/thalesondas" target="_blank" rel="noopener noreferrer">
                            github.com/thalesondas
                        </a>
                    </li>
                </ul>
            </Col>
            </Container>
            <Row>
                <li className="sem-bolinha">
                    <Image className="img-svg" src={Site} alt="Site" />
                    <a className="custom-link" href="https://portfolio-thalesondas.netlify.app" target="_blank" rel="noopener noreferrer">
                        portfolio-thalesondas.netlify.app
                    </a>
                </li>
            </Row>
        </Container>
    )
}

export default Cabecalho;