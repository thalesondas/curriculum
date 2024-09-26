import { Container } from "react-bootstrap";

const Resumo = () => {
    return(
        <Container>
            <Container className="mt-3 d-flex flex-column align-items-start">
                <h3>Resumo</h3>
            </Container>
            <hr />
            <p className="text-center" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.4rem' }}>
            Estou me formando em Análise e Desenvolvimento de Sistemas pela UTFPR de<br/>
            Cornélio Procópio, onde adquiri conhecimento em várias linguagens de<br/>
            programação, bancos de dados, bibliotecas e frameworks, etc. Além de aprimorar<br/>
            alguns desses conhecimentos e aprender novas tecnologias por meio de cursos<br/>
            online gratuitos e da plataforma Udemy.
            </p>
        </Container>
    )
}

export default Resumo;