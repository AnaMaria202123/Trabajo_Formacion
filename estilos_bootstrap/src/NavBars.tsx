import {Container, Navbar, Nav} from "react-bootstrap"
const NavBars: React.FC = () => {

    return(
        
            <Navbar expand="lg" variant="dark" className="bg-dark">
                <Container>
                    <Navbar.Brand>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link>Dashboard</Nav.Link>
                            <Nav.Link>Products</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
    )
}
export default NavBars;