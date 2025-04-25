import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Container>
        <Navbar.Brand>Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Proyectos</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;

const Presentacion: React.FC = () => {
    return (
        <Container id="inicio" className="mt-5">
            <Row className="align-items-center">
                <Col md={6} className="text-center mb-4">
                    <img
                        src="https://i.pinimg.com/736x/9d/14/43/9d14439eb9b3db190f932409bb1b7eaf.jpg"
                        className="img-fluid rounded-circle"
                    />
                </Col>
                <Col md={6} className="text-center text-md-start">
                    <h2>Ana María Zuñiga</h2>
                    <p>Soy desarrollador web apasionado por crear soluciones creativas y funcionales usando tecnologías modernas como React y Bootstrap.</p>
                </Col>
            </Row>
        </Container>
    );
};

export { NavBar, Presentacion };
