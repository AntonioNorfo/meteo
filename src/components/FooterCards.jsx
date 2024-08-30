import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const cities = ["Genova", "Torino", "Milano", "Roma", "Napoli", "Palermo"];
const API_KEY = "f4d190637bc5aa1f90848f2eabab1eab";

const FooterCards = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await Promise.all(
        cities.map(async (city) => {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=${API_KEY}&units=metric`
          );
          const result = await response.json();
          return {
            name: city,
            weather: {
              main: result.weather[0].main,
              description: result.weather[0].description,
              icon: result.weather[0].icon,
            },
          };
        })
      );
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="footer-cards fixed-bottom mb-3">
      <Row className="justify-content-center">
        {weatherData.map((city, index) => (
          <Col key={index} xs={4} sm={3} md={2} className="mb-2">
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
                <Card.Title className=" footer-card-main">{city.weather.main}</Card.Title>
                <Card.Text className=" footer-card-description">{city.weather.description}</Card.Text>
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
