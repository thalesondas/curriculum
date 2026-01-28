import { Container } from "react-bootstrap";

const Resumo = () => {
    return(
        <Container>
            <Container className="ms-3 mt-3 d-flex flex-column align-items-start">
                <h3>Resumo</h3>
                <hr />
            </Container>
            <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.1rem', margin: '0 2rem' }}>
                Desenvolvedor de software formado em Análise e Desenvolvimento de Sistemas pela UTFPR, com experiência no
                desenvolvimento de aplicações web e APIs em ambientes produtivos. Atuação com <strong>JavaScript</strong> e <strong>TypeScript</strong> em soluções
                front-end (<strong>React/Next.js, Vue.js</strong>) e back-end (<strong>NestJS</strong> e <strong>Django/DRF</strong>), com persistência de dados em <strong>PostgreSQL</strong> e utilização
                de <strong>TypeORM</strong>.
            </p>
            <p className="mt-3 mb-4" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.1rem', margin: '0 2rem' }}>
                Experiência com testes automatizados (<strong>testes unitários</strong> e <strong>de integração</strong> com <strong>Jest</strong> e <strong>unittest</strong>, e <strong>BDD</strong> com <strong>Gherkin</strong>)
                e noções em <strong>DevOps</strong>, incluindo containerização com <strong>Docker</strong>, <strong>Kubernetes</strong>, pipelines de <strong>CI/CD</strong> com <strong>GitHub Actions</strong> e deploy
               na <strong>DigitalOcean</strong>.
            </p>
        </Container>
    )
}

export default Resumo;