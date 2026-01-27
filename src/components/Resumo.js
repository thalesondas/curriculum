import { Container } from "react-bootstrap";

const Resumo = () => {
    return(
        <Container>
            <Container className="ms-3 mt-3 d-flex flex-column align-items-start">
                <h3 className="ms-3">Resumo</h3>
                <hr />
            </Container>
            <p className="text-center" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.4rem' }}>
                Desenvolvedor de software formado em Análise e Desenvolvimento de Sistemas pela UTFPR, com experiência no<br/>
                desenvolvimento de aplicações web e APIs em ambientes produtivos. Atuação com JavaScript e TypeScript em soluções<br/>
                front-end (React/Next.js, Vue.js) e back-end (NestJS e Django/DRF), com persistência de dados em PostgreSQL e utilização<br/>
                de TypeORM. Experiência com testes automatizados (testes unitários e de integração com Jest e unittest, e BDD com Gherkin)<br/>
                e noções em DevOps, incluindo containerização com Docker, Kubernetes, pipelines de CI/CD com GitHub Actions e deploy na<br/>
                DigitalOcean.
            </p>
        </Container>
    )
}

export default Resumo;