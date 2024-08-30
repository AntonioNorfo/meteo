import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const API_KEY = "f4d190637bc5aa1f90848f2eabab1eab";

function Home({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
    }
  }, [city]);

  useEffect(() => {
    if (weatherData && weatherData.main) {
      const temperatureCelsius = Math.round(weatherData.main.temp - 273.15);
      let backgroundImage;
      if (temperatureCelsius > 30) {
        backgroundImage =
          "url('https://st.depositphotos.com/3008028/3749/i/450/depositphotos_37496285-stock-photo-shining-sun-at-clear-blue.jpg')";
      } else if (temperatureCelsius > 20) {
        backgroundImage =
          "url('https://img.freepik.com/foto-premium/il-cielo-e-blu-e-il-sole-splende_900396-14014.jpg')";
      } else if (temperatureCelsius > 10) {
        backgroundImage = "url('https://mantovauno.it/wp-content/uploads/2021/04/pioggia1.jpg')";
      } else {
        backgroundImage =
          "url('https://www.unisr.it/mediaObject/unisr/imported/news-ricerca/uploads/2017/01/immagine-copertina/original/immagine-copertina.jpg')";
      }
      document.body.style.backgroundImage = backgroundImage;
    }
  }, [weatherData]);

  if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) {
    return <div className="text-light fs-4 fw-bold">Spiacenti, siamo in un Meteo italiano</div>;
  }

  const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const temperatureCelsius = Math.round(weatherData.main.temp - 273.15);

  return (
    <div className="container-center">
      <Container fluid className=" mt-5">
        <Row className="align-items-center">
          <Col md={6} className="d-flex flex-column align-items-center justify-content-center  ">
            <Card className="bg-transparent  mt-4 border-0 ">
              <h2>{weatherData.name}</h2>
              <Card.Img className="img" variant="" src={weatherIconUrl} alt="Weather icon" />
              <Card.Body>
                <Card.Title>{weatherData.weather[0].main}</Card.Title>
                <Card.Text>{weatherData.weather[0].description}</Card.Text>
                <Link to={`/details/${city}`}>
                  <Button variant="primary">More Info</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="mb-4">{`${temperatureCelsius}°C`}</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
