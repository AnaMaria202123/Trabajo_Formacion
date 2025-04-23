import {Modal, Button, Form} from "react-bootstrap"
import { useState } from "react";

const MyModal: React.FC = () =>{ 
    const [show, setShow] = useState<boolean>(false);
    const openShow = () =>{
        setShow(true);
    }
    const offShow = () =>{
        setShow(false);
    }
    return(
        <div>
        <Button variant="success" onClick={openShow}>Abrir Modal</Button>
        <Modal show={show} onHide={offShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Ejercicio</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Este es el ejercicio</h1>
                <Form >
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={offShow}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
        </div>
   
    );
}
export default MyModal;