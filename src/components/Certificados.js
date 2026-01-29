import { Container } from "react-bootstrap";

const Certificados = () => {
    return(
        <Container className="mt-5">
            <Container className="ms-3 d-flex flex-column justify-content-start align-items-start">
                <h3>Principais Certificados</h3>
                <hr />
            </Container>
            <div className="d-flex justify-content-center">
                <ul className="align-items">
                    <li>EF SET English Certificate 71/100 (C2 Proficient) <span className="letra-cinza">(EF SET)</span></li>
                    <li>Desenvolvimento Web Completo - 20 cursos + 20 Projetos <span className="letra-cinza">(Udemy)</span></li>
                    <li>Curso Desenvolvimento Web Moderno com JavaScript + Projetos <span className="letra-cinza">(Udemy)</span></li>
                    <li>Curso de Django Web Framework e Django Rest Framework (DRF) <span className="letra-cinza">(Udemy)</span></li>
                    <li>Java COMPLETO Programação Orientada a Objetos + Projetos <span className="letra-cinza">(Udemy)</span></li>
                </ul>     
            </div>
        </Container>   
    )
}

export default Certificados;