import { Container } from "react-bootstrap";

const Certificados = () => {
    return(
        <Container className="mt-1">
            <Container className="ms-3 d-flex flex-column justify-content-start align-items-start">
                <h3 className="ms-3">Certificados</h3>
                <hr />
            </Container>
            <ul className="ms-3">
                <li>EF SET English Certificate 71/100 (C2 Proficient) <span className="letra-cinza">(EF SET)</span></li>
                <li>Desenvolvimento Web Completo - 20 cursos + 20 Projetos <span className="letra-cinza">(Udemy)</span></li>
                <li>Curso Desenvolvimento Web Moderno com JavaScript + Projetos <span className="letra-cinza">(Udemy)</span></li>
                <li>Formação Cientista de Dados: O Curso Completo <span className="letra-cinza">(Udemy)</span></li>
                <li>Excel para Análise de Dados <span className="letra-cinza">(Preditiva Analytics)</span></li>
                <li>Power BI para Análise de Dados <span className="letra-cinza">(Preditiva Analytics)</span></li>
            </ul>     
        </Container>   
    )
}

export default Certificados;