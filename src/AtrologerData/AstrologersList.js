import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './AstrologerCard.css'; // Custom styles for this card
import { AstrologersData } from './AstrologersData'; // Import the astrologers' data
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/metropolis'; 
import 'typeface-poppins';

const AstrologersList = () => {
  return (
    <Container className="astrologers-list my-2">
      <Row className="g-4">
         <p className=" d-none d-md-block pt-2 heading-text">Chat with Astrologers</p>
       {/* 'g-4' adds gutters between rows/columns */}
        {AstrologersData.map((astrologer) => (
         
          <Col key={astrologer.name} xs={12} sm={12} md={6} lg={4} >
            <div className={`astrologer-card px-2 py-2 d-flex justify-content-between align-items-center ${astrologer.isBusy ? 'busy' : 'available'}`}>
              
              {/* Verified Icon */}
              {astrologer.isVerified && (
                <img
                  src="./images/Vector.png" /* Replace with the correct path */
                  alt="Verified"
                  className="verified-icon"
                />
              )}

              {/* Astrologer Image */}
              <img
                src={astrologer.image}
                alt={astrologer.name}
                className="astrologer-image"
                style={{ borderColor: '#35BA80' }}
              />

              {/* Astrologer Details */}
              <div className="astrologer-details">
                <h6 className="astrologer-name pb-1">
                  {astrologer.name} <span className="text-warning">★ <span className="rating-astro"> {astrologer.rating} </span></span>
                </h6>
                <p className="astrologer-expertise">{astrologer.specializations.join(', ')}</p>
                <p className="astrologer-languages">{astrologer.languages.join(', ')}</p>
                <p className="astrologer-experience">Exp. {astrologer.experience} years</p>

                {/* Rate and Discount */}
                <div className="astrologer-rate">
  {astrologer.isFree ? (
    <>
      <span className="old-rate">₹{astrologer.originalPrice}</span>{' '}
      <span className="new-rate text-danger">FREE</span>
    </>
  ) : astrologer.discountedPrice < astrologer.originalPrice &&
    astrologer.discountedPrice !== 0 &&
    astrologer.discountedPrice !== null &&
    astrologer.discountedPrice !== '' ? (
    <>
      <span className="old-rate">₹{astrologer.originalPrice}</span>{' '}
      <span className="new-rate text-danger">₹{astrologer.discountedPrice}/Min</span>
    </>
  ) : (
    <span>₹{astrologer.originalPrice}/Min</span>
  )}
</div>

              </div>

              {/* Chat Button */}
              <div className="chat-section mt-2">
                <a href="#"
                  className={`astrologer-chat-btn ${astrologer.isBusy ? 'busy' : 'available'}`}
                  style={{
                    border: astrologer.isBusy ? '1px solid #EF5862' : '1px solid #35BA80 ',
                    color: astrologer.isBusy ? '#EF5862' : '#35BA80',
                  }}
                >
                  {astrologer.isFree ? 'Chat' : 'Chat'}
                </a>
                {astrologer.isBusy && (
                  <div className="wait-time ">
                    Wait {astrologer.waitTime} min
                  </div>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AstrologersList;
