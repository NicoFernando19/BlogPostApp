import { Navbar, Container, Nav } from "react-bootstrap";
function HeaderComponent() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">Post App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        </Navbar>
    );
}

export default HeaderComponent;