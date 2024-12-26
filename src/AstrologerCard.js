// AstrologerCard.js
import React from 'react';
import './AstrologerCard.css'; // Add custom styling in this file

const AstrologerCard = ({ astrologer }) => {
  return (
    <div className="astrologer-card">
      <div className="card-content">
        <img src={astrologer.image} alt={astrologer.name} className="astrologer-image" />
        <div className="card-details">
          <div className="card-header">
            <h3 className="astrologer-name">{astrologer.name}</h3>
            <span className="rating">
              ⭐ {astrologer.rating}
            </span>
            <img className="verified-icon" src="https://via.placeholder.com/20" alt="verified" />
          </div>
          <p className="astrologer-info">
            Vedic, Numerology... <br />
            {astrologer.languages} <br />
            Exp: {astrologer.experience} Years
          </p>
          <div className="price-info">
            <span className="old-price">₹{astrologer.oldPrice}</span>
            <span className="free-price">FREE</span>
          </div>
        </div>
        <button className="chat-button">Chat</button>
      </div>
    </div>
  );
};

export default AstrologerCard;
