import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useReview();

  return (
    <section className='review-area'>
      <Container>
        <Row>
          <Col md={12}>
            <h2 className='text-center mb-5'>
              Total Customer Review {reviews.length}
            </h2>
            <div className='grid grid-col-3 gap-50'>
              {reviews
                .map((review) => <ReviewItem key={review.id} review={review} />)
                .slice(0, 3)}
            </div>
            <Link className='btn review-btn' to='/reviewtwo'>
              View All Review
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Review;
