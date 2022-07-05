import { Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Tinkoff Operations Dashboard</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
