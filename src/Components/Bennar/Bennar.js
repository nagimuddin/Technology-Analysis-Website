import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import technology from "../../image/technology.jpg";
import "./Bennar.css";

const Bennar = () => {
  return (
    <div className="bennar-area">
      <Container>
        <Row>
          <Col md={6}>
            <div className="bennar-details">
              <h1>
                Advanced Technology <br />
                <span>Resplendent nation</span>
              </h1>
              <p>
              Technology has given tools and machines to be used to solve problems around the world. There has been a complete transformation in the way we do things because of contributions from scientific technology. We can achieve more tasks while saving our time and hence in a better place than our previous generation.
              </p>
              <Button variant="secondary" className="button">
                Live Demo
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="bennar-container">
              <div className="bennar-img">
                <img src={technology} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bennar;
