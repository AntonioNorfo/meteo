import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../App.css";

const API_KEY = "f4d190637bc5aa1f90848f2eabab1eab";

export default function Details() {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        changeBackground(data.main.temp);
      });
  }, [city]);

  const changeBackground = (temperature) => {
    let backgroundImage;
    if (temperature < 0) {
      backgroundImage =
        "url('https://st.depositphotos.com/3008028/3749/i/450/depositphotos_37496285-stock-photo-shining-sun-at-clear-blue.jpg')";
    } else if (temperature >= 0 && temperature < 15) {
      backgroundImage = "url('https://img.freepik.com/foto-premium/il-cielo-e-blu-e-il-sole-splende_900396-14014.jpg')";
    } else if (temperature >= 15 && temperature < 25) {
      backgroundImage = "url('https://mantovauno.it/wp-content/uploads/2021/04/pioggia1.jpg')";
    } else {
      backgroundImage =
        "url('https://www.unisr.it/mediaObject/unisr/imported/news-ricerca/uploads/2017/01/immagine-copertina/original/immagine-copertina.jpg')";
    }
    document.body.style.backgroundImage = backgroundImage;
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto">
          <Card style={{ background: "transparent" }}>
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
              <ListGroup.Item>Wind Speed: {weatherData.wind.speed} m/s</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
