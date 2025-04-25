import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img src="https://via.placeholder.com/150" alt="Perfil" className="img-fluid rounded-circle" />
        </Col>
        <Col md={6}>
          <h1>Hola, soy Ana María</h1>
          <p>Desarrollador Web. Estoy aprendiendo React y Tailwind CSS para crear aplicaciones modernas y escalables.</p>
        </Col>
      </Row>
    </Container>
  );
};

const Proyectos: React.FC = () => {
  const mostrarMensaje = (nombre: string) => {
    alert(`Este es el proyecto: ${nombre}`);
  };

  return (
    <Container className="mt-5">
      <Row className="g-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Proyecto 1</Card.Title>
              <Card.Text>Descripción del proyecto 1.</Card.Text>
              <Button variant="primary" onClick={() => mostrarMensaje('Proyecto 1')}>
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Proyecto 2</Card.Title>
              <Card.Text>Descripción del proyecto 2.</Card.Text>
              <Button variant="primary" onClick={() => mostrarMensaje('Proyecto 2')}>
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Proyecto 3</Card.Title>
              <Card.Text>Descripción del proyecto 3.</Card.Text>
              <Button variant="primary" onClick={() => mostrarMensaje('Proyecto 3')}>
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const Contacto: React.FC = () => {
  const [showAlert, setShowAlert] = React.useState(false);

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <Container className="mt-5">
      <h2>Contacto</h2>
      <Form onSubmit={enviarFormulario}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Tu nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Tu email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Tu mensaje" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      {showAlert && <Alert variant="success" className="mt-3">Formulario enviado con éxito!</Alert>}
    </Container>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Mi Portafolio</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/proyectos">Proyectos</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;
