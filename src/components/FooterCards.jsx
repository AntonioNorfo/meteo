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
    <div className="footer-cards fixed-bottom mb-3">
      <Row className="justify-content-center">
        {cities.map((city, index) => (
          <Col key={index} xs={4} sm={3} md={2} className="mb-2 ">
            <Card className="bg-transparent border-0 footer-card mx-2">
              <h5 className="footer-card-title">{city.name}</h5>
              <div className="d-flex justify-content-center">
                <Card.Img
                  className="footer-card-img"
                  variant=""
                  src={`https://openweathermap.org/img/wn/${city.weather.icon}@2x.png`}
                  alt="Weather icon"
                />
              </div>
              <Card.Body className="p-2">
                <Card.Title className="text-white footer-card-main">{city.weather.main}</Card.Title>
                <Card.Text className="text-white footer-card-description">{city.weather.description}</Card.Text>
                <Link to={`/details/${city.name}`}>
                  <Button variant="primary" size="sm">
                    More Info
                  </Button>
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
