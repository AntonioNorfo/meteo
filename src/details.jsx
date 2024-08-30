import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_KEY = "f4d190637bc5aa1f90848f2eabab1eab";

export default function Details() {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={weatherIconUrl} alt="Weather icon" />
            <Card.Body>
              <Card.Title>{weatherData.name}</Card.Title>
              <Card.Text>{weatherData.weather[0].description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Temperature: {weatherData.main.temp}°C</ListGroup.Item>
              <ListGroup.Item>Feels Like: {weatherData.main.feels_like}°C</ListGroup.Item>
              <ListGroup.Item>Min Temperature: {weatherData.main.temp_min}°C</ListGroup.Item>
              <ListGroup.Item>Max Temperature: {weatherData.main.temp_max}°C</ListGroup.Item>
              <ListGroup.Item>Pressure: {weatherData.main.pressure} hPa</ListGroup.Item>
              <ListGroup.Item>Humidity: {weatherData.main.humidity}%</ListGroup.Item>
              <ListGroup.Item>Sea Level: {weatherData.main.sea_level} hPa</ListGroup.Item>
              <ListGroup.Item>Ground Level: {weatherData.main.grnd_level} hPa</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
