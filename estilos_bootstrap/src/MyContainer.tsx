import { Container, Row, Col } from "react-bootstrap";

const MyContainer: React.FC = () => {

    return(
        <Container fluid className="d-flex justify-content-center mt-5 align-items-center">
            <Row className="g-4">
                <Col md={12} className="bg-primary text-white p-4 text-center fs-6 "><h1>Hola este es container</h1></Col>
                <Col md={6} className="bg-success text-white p-4 text-center fs-6"><p>Texto para ejemplo container</p></Col>
                <Col md={6} className="bg-danger text-white p-4 text-center fs-6"><p>Texto para ejemplo container</p></Col>
            </Row>
        </Container>
    );

}
export default MyContainer;