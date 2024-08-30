import React, { useState } from "react";
import { Button, Container, Form, Navbar, Offcanvas } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../App.css";

function NavbarMeteo({ onCityChange }) {
  const [city, setCity] = useState("");
  const location = useLocation();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onCityChange(city);
  };

  const isDetailsPage = location.pathname.includes("/details");

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
        {!isDetailsPage && (
          <>
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
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarMeteo;
