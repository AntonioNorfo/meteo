import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import "../App.css";

function NavbarMeteo() {
  return (
    <Navbar fixed="top">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-1024.png"
            alt="Weather Icon"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Offcanvas
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
          placement="end"
          className="bg-dark text-bg-dark"
        >
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3"></Nav>
            <Form className="d-flex mt-3" role="search">
              <Form.Control type="search" placeholder="Scrivi la città" className="me-2" aria-label="Search" />
              <Button variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarMeteo;
