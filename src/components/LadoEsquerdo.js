import { Button, Container } from "react-bootstrap";

const LadoEsquerdo = () => {
    return(
        <Container className="mt-4 d-flex flex-column justify-content-center align-items-center">
            <p className="p-lado-esquerdo text-center py-2 px-3">
                Este "site" foi feito sem responsividade de propósito para simular o currículo em PDF, não funcionará corretamente em telas menores.
            </p>
            <Button className="btn-custom mt-3" href="/CV.pdf" download="Curriculum Vitae - Thales Ondas">
                Download do PDF do Currículo
            </Button>
        </Container>
    )
}

export default LadoEsquerdo;