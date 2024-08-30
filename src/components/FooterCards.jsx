import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const cities = [
  { name: "Genova", weather: { main: "Clear", description: "clear sky", icon: "01d" } },
  { name: "Torino", weather: { main: "Clouds", description: "few clouds", icon: "02d" } },
  { name: "Milano", weather: { main: "Rain", description: "light rain", icon: "10d" } },
  { name: "Roma", weather: { main: "Thunderstorm", description: "thunderstorm", icon: "11d" } },
  { name: "Napoli", weather: { main: "Drizzle", description: "drizzle", icon: "09d" } },
  { name: "Palermo", weather: { main: "Snow", description: "snow", icon: "13d" } },
];

const FooterCards = () => {
  return (
    <div className="footer-cards fixed-bottom mb-5">
      <Row className="justify-content-center">
        {cities.map((city, index) => (
          <Col key={index} xs={6} sm={4} md={2} className="mb-4">
            <Card className="bg-transparent border-0">
              <h2>{city.name}</h2>
              <Card.Img
                className="img"
                variant=""
                src={`https://openweathermap.org/img/wn/${city.weather.icon}@2x.png`}
                alt="Weather icon"
              />
              <Card.Body>
                <Card.Title className="text-white">{city.weather.main}</Card.Title>
                <Card.Text className="text-white">{city.weather.description}</Card.Text>
                <Link to={`/details/${city.name}`}>
                  <Button variant="primary">More Info</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FooterCards;
