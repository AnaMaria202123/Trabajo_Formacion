// Contacto.tsx
import { Container, Form, Button } from "react-bootstrap";

const Contacto: React.FC = () => {

  const mostrarAlerta = () => {
    alert("Formulario enviado con éxito");
  };

  return (
    <Container className="mt-5">
      <h2>Contacto</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Tu nombre" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Tu email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje aquí" />
        </Form.Group>

        <Button variant="dark" onClick={mostrarAlerta}>
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contacto;
