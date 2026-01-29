import { Container } from "react-bootstrap";

const Idiomas = () => {
    return(
        <Container className="my-5">
            <Container className="ms-3 d-flex flex-column justify-content-start">
                <h3>Idiomas</h3>
                <hr />
            </Container>
            <Container className="d-flex">
                <ul>
                    <li>Inglês intermediário/avançado (B2-C1)</li>
                </ul>
            </Container>
        </Container>
    )
}

export default Idiomas;