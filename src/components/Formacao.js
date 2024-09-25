import { Container } from "react-bootstrap";

const Formacao = () => {
    return(
        <Container className="mb-4">
            <Container>
                <h3>Formação Acadêmica</h3>
            </Container>
            <hr />
            <li className="me-5" style={{ textAlign: 'center' }}>Graduação em Análise e Desenvolvimento de Sistemas (2021-2025)<br />Universidade Tecnológica Federal do Paraná</li>
        </Container>
    )
}

export default Formacao;