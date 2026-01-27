import { Container } from "react-bootstrap";

const Formacao = () => {
    return(
        <Container className="mb-4">
            <Container className="ms-3 d-flex flex-column">
                <h3 className="ms-3">Formação Acadêmica</h3>
                <hr />
            </Container>
            <li className="me-5" style={{ textAlign: 'center' }}>Graduação em Análise e Desenvolvimento de Sistemas (2021-2025)<br />Universidade Tecnológica Federal do Paraná (UTFPR) Cornélio Procópio - PR</li>
        </Container>
    )
}

export default Formacao;