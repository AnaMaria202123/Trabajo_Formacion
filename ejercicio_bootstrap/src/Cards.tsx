// Projects.tsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Cards: React.FC = () => {

  const mostrarMensaje = (nombre: string) => {
    alert(`Este es el proyecto: ${nombre}`);
  }

  return (
    <Container className="mt-5">
      <Row className="g-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Proyecto 1</Card.Title>
              <Card.Text>Descripción del proyecto 1.</Card.Text>
              <Button variant="primary" onClick={() => mostrarMensaje("Proyecto 1")}>
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
              <Button variant="primary" onClick={() => mostrarMensaje("Proyecto 2")}>
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
              <Button variant="primary" onClick={() => mostrarMensaje("Proyecto 3")}>
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
