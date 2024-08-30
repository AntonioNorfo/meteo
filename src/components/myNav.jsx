import React, { useState } from "react";
import { Button, Container, Form, Navbar, Offcanvas } from "react-bootstrap";
import Autosuggest from "react-autosuggest";
import { FaSearch } from "react-icons/fa";
import "../App.css";

const API_KEY = "9c04de7779eb520cd5b30ad8cfb6a558";

function NavbarMeteo({ onCityChange }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleCityChange = (event, { newValue }) => {
    setCity(newValue);
  };

  const handleSearch = () => {
    onCityChange(city);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${value.toLowerCase()}&type=like&sort=population&cnt=5&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const cities = data.list.map((item) => ({
          name: item.name,
          country: item.sys.country,
        }));
        setSuggestions(cities);
      });
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => `${suggestion.name}, ${suggestion.country}`;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion.name}, {suggestion.country}
    </div>
  );

  return (
    <Navbar bg="dark" variant="dark" expand={false}>
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
            <Form className="d-flex navbar-form">
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={{
                  placeholder: "Cerca",
                  value: city,
                  onChange: handleCityChange,
                }}
              />
              <Button variant="outline-success" onClick={handleSearch}>
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
