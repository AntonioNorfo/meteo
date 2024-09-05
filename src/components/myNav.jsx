import React, { useState, useEffect } from "react";
import { Button, Container, Form, Navbar, Offcanvas } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../App.css";

function NavbarMeteo({ onCityChange }) {
  const [city, setCity] = useState("Palermo");
  const [dateTime, setDateTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onCityChange(city);
  };

  const isDetailsPage = location.pathname.includes("/details");

  const formatDateTime = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <Navbar bg="light" expand="md" className="navbar-meteo">
      <Container>
        <Navbar.Brand className="d-none d-md-block">Meteo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Meteo App</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={city}
                onChange={handleCityChange}
              />
              <Button variant="outline-success" type="submit">
                <FaSearch />
              </Button>
            </Form>
            <div className="date-time-container d-none d-md-block">
              <div>{formatDateTime(dateTime)}</div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarMeteo;
