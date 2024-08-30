import React, { useState } from "react";
import { Button, Container, Form, Navbar, Offcanvas } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../App.css";

const API_KEY = "9c04de7779eb520cd5b30ad8cfb6a558";

function NavbarMeteo({ onCityChange }) {
  const [city, setCity] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onCityChange(city);
  };

  return (
    <Navbar variant="dark" className="fixed-top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-1024.png"
            alt="Weather Icon"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          Meteo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Cerca città</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex ms-auto navbar-form" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="me-2"
                aria-label="Search"
                value={city}
                onChange={handleCityChange}
              />
              <Button variant="outline-success" type="submit">
                <FaSearch color="white" />
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarMeteo;
