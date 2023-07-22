import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "../Assets/Cart.svg";
import "../Scss/nav.scss";
import { useNavigate ,Link} from "react-router-dom";

function NavScrollExample() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary nav
    "
    >
      <Container fluid>
        <div className="form-d">
          <Navbar.Brand href="#">
            <h2>OnlineStore</h2>
          </Navbar.Brand>

          <Form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search/${search}`);
            }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbar"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
          <Link to = "/cart">
            <img src={Cart} alt="" />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
