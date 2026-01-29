import { Container, Row, Col } from "react-bootstrap";

const Experiencia = () => {
    return (
        <Container className="mt-5" style={{ fontSize: '0.8rem' }}>
            <Container className="ms-3 d-flex flex-column align-items-start">
                <h3>Experiência Profissional</h3>
                <hr />
            </Container>
            
            <Container className="mb-4">
                <Row className="ms-2 me-2 fw-bold">
                    <Col>Desenvolvedor Full Stack</Col>
                    <Col className="text-end">Abr 2025 - Presente</Col>
                </Row>
                <Row className="ms-2 me-2">
                    <Col>DigitalSys Tecnologia</Col>
                    <Col className="text-end">Remoto</Col>
                </Row>
                <ul className="mt-3" style={{ lineHeight: '1.1rem' }}>
                    <li>Continuidade das atividades desempenhadas no período de estágio, com maior autonomia e responsabilidade nas entregas.</li>
                    <li>Desenvolvimento e manutenção de <strong>APIs REST</strong> e integração de <strong>WebSockets</strong> com decorators do <strong>NestJS</strong>, viabilizando comunicação em tempo real.</li>
                    <li>Desenvolvimento de um software de estatísticas, utilizando <strong>React/Next.js</strong> no frontend e <strong>Django (Django REST Framework)</strong> no backend, com aplicação de testes <strong>BDD (Gherkin)</strong>.</li>
                    <li>Apoio às atividades de <strong>infraestrutura</strong> e <strong>DevOps</strong>, incluindo containerização com <strong>Docker</strong>, orquestração com <strong>Kubernetes</strong>, acompanhamento de clusters com <strong>Lens</strong> e pipelines de <strong>CI/CD</strong> com <strong>GitHub Actions</strong>.</li>
                    <li>Deploy e manutenção de ambientes produtivos na <strong>DigitalOcean</strong>, utilizando <strong>Skaffold</strong> para automação do fluxo de desenvolvimento.</li>
                    <li>Automação do ciclo de extração da documentação interna, atualização diária da knowledge base do IA Agent da DigitalOcean e consulta via bot no Discord, garantindo respostas sempre atualizadas.</li>
                    <li>Exposição de métricas de aplicações Django para <strong>Prometheus/Grafana</strong> em ambiente containerizado (<strong>Kubernetes</strong>).</li>
                </ul>
            </Container>

            <Container>
                <Row className="ms-2 me-2 fw-bold">
                    <Col>Estágio em Desenvolvimento Full Stack</Col>
                    <Col className="text-end">Nov 2024 - Abr 2025</Col>
                </Row>
                <Row className="ms-2 me-2">
                    <Col>DigitalSys Tecnologia</Col>
                    <Col className="text-end">Remoto</Col>
                </Row>
                <ul className="mt-3" style={{ lineHeight: '1.1rem' }}>
                    <li>Desenvolvimento full stack de aplicação voltada à área da saúde, com <strong>APIs REST</strong> em <strong>NestJS</strong> e frontend em <strong>Vue.js + Ionic</strong>.</li>
                    <li>Implementação de autenticação segura com <strong>JWT</strong> e controle de permissões baseado em roles, fortalecendo a segurança da versão mobile.</li>
                    <li>Estruturação e execução de testes unitários com <strong>Jest</strong>, elevando a cobertura e a estabilidade das entregas.</li>
                    <li>Integração entre backend e frontend com <strong>Vue.js + Ionic</strong>, aplicando o padrão <strong>Atomic Design</strong> para organização e reutilização de componentes.</li>
                    <li>Contribuições pontuais em projetos com <strong>Django</strong> e <strong>React/Next.js</strong>, como implementação de recuperação de senha via e-mail.</li>
                </ul>
            </Container>
        </Container>
    );
}

export default Experiencia;
