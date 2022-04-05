import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Banner.css';
import image from '../../image/technology.jpg';

const Banner = () => {
  return (
    <section className='banner-area'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <div className='banner-content'>
              <h1 className='banner-title'>
                Advanced Technology <br />
                <span>Resplendent nation</span>
              </h1>
              <p>
              Technology has given tools and machines to be used to solve problems around the world. 
              </p>
              <Link className='btn' to='/reviewtwo'>
                View All Review
              </Link>
            </div>
          </Col>
          <Col md={6}>
              <div className="banner-img">
                  <img src={image} alt="" />
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
