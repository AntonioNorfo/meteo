import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";

const API_KEY = "f4d190637bc5aa1f90848f2eabab1eab";

export default function Details() {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <MDBTypography tag="h5">{weatherData.name}</MDBTypography>
              <div>
                <MDBIcon fas icon="sun fa-fw" style={{ color: "#868B94" }} />{" "}
                <span className="ms-1">{weatherData.weather[0].description}</span>
              </div>
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  width="100px"
                />
              </div>
              <div>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Feels Like: {weatherData.main.feels_like}°C</p>
                <p>Min Temperature: {weatherData.main.temp_min}°C</p>
                <p>Max Temperature: {weatherData.main.temp_max}°C</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
