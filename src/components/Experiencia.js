import { Container, Row, Col } from "react-bootstrap";

const Experiencia = () => {
    return (
        <Container className="mt-1">
            <Container className="ms-3 d-flex flex-column align-items-start">
                <h3 className="ms-3">Experiência Profissional</h3>
                <hr />
            </Container>
            
            <Container className="mb-3">
                <Row className="fw-bold">
                    <Col>Desenvolvedor Full Stack</Col>
                    <Col className="text-end">Abr 2025 - Presente</Col>
                </Row>
                <Row>
                    <Col>DigitalSys Tecnologia</Col>
                    <Col className="text-end">Remoto</Col>
                </Row>
                <ul className="mt-2" style={{ fontSize: '0.9rem', lineHeight: '1.2rem' }}>
                    <li>Continuidade das atividades desempenhadas no período de estágio, com maior autonomia e responsabilidade nas entregas.</li>
                    <li>Desenvolvimento e manutenção de APIs REST e integração de WebSockets com decorators do NestJS, viabilizando comunicação em tempo real.</li>
                    <li>Desenvolvimento de um software de estatísticas, utilizando React/Next.js no frontend e Django (Django REST Framework) no backend, com aplicação de testes BDD (Gherkin).</li>
                    <li>Apoio às atividades de infraestrutura e DevOps, incluindo containerização com Docker, orquestração com Kubernetes, acompanhamento de clusters com Lens e pipelines de CI/CD com GitHub Actions.</li>
                    <li>Deploy e manutenção de ambientes produtivos na DigitalOcean, utilizando Skaffold para automação do fluxo de desenvolvimento.</li>
                    <li>Automação do ciclo de extração da documentação interna, atualização diária da knowledge base do IA Agent da DigitalOcean e consulta via bot no Discord, garantindo respostas sempre atualizadas.</li>
                    <li>Exposição de métricas de aplicações Django para Prometheus/Grafana em ambiente containerizado (Kubernetes).</li>
                </ul>
            </Container>

            <Container>
                <Row className="fw-bold">
                    <Col>Estágio em Desenvolvimento Full Stack</Col>
                    <Col className="text-end">Nov 2024 - Abr 2025</Col>
                </Row>
                <Row>
                    <Col>DigitalSys Tecnologia</Col>
                    <Col className="text-end">Remoto</Col>
                </Row>
                <ul className="mt-2" style={{ fontSize: '0.9rem', lineHeight: '1.2rem' }}>
                    <li>Desenvolvimento full stack de aplicação voltada à área da saúde, com APIs REST em NestJS e frontend em Vue.js + Ionic.</li>
                    <li>Implementação de autenticação segura com JWT e controle de permissões baseado em roles, fortalecendo a segurança da versão mobile.</li>
                    <li>Estruturação e execução de testes unitários com Jest, elevando a cobertura e a estabilidade das entregas.</li>
                    <li>Integração entre backend e frontend com Vue.js + Ionic, aplicando o padrão Atomic Design para organização e reutilização de componentes.</li>
                    <li>Contribuições pontuais em projetos com Django e React/Next.js, como implementação de recuperação de senha via e-mail.</li>
                </ul>
            </Container>
        </Container>
    );
}

export default Experiencia;
