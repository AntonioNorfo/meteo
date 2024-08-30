import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";

function Home() {
  return (
    <div className="home-background">
      <Container fluid className="text-white">
        <Row>
          <Col md={6}>
            <p className="header-text">Some City</p>
            <Card className="bg-transparent border-0" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://placedog.net/100/100" />
              <Card.Body>
                <Card.Title className="text-white">Friday</Card.Title>
                <Card.Text className="text-white">Today is Monday</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="d-flex align-items-start justify-content-center">
            <div className="temperature-display">+20°C</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
