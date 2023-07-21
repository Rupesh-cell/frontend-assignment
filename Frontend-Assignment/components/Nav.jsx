import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from '../Assets/Cart.svg';
import "../Scss/nav.scss"

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav
    ">
      <Container fluid>
        <div className="nav-items">
        <Navbar.Brand href="#"><h2>OnlineStore</h2></Navbar.Brand>
        
        
          <Form >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbar"
              aria-label="Search"
            />
          
          </Form>
      
        <img src={Cart} alt="" />
        </div>
      </Container>
      
    </Navbar>
  );
}

export default NavScrollExample;