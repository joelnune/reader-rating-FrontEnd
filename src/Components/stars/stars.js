import React, { useState } from 'react';
import './stars.css'; // Assuming you have CSS for the stars

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (index, isHalf) => {
    const newRating = isHalf ? index + 0.5 : index + 1;
    setRating(newRating);
  };

  const handleHover = (index, isHalf) => {
    const newHoverRating = isHalf ? index + 0.5 : index + 1;
    setHoverRating(newHoverRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div>
      <div className="star-rating" onMouseLeave={handleMouseLeave}>
        {[...Array(totalStars)].map((_, index) => (
          <div
            key={index}
            className="star-container"
            onMouseMove={(e) => handleHover(index, e.clientX < e.currentTarget.getBoundingClientRect().left + e.currentTarget.offsetWidth / 2)}
            onClick={(e) => handleRating(index, e.clientX < e.currentTarget.getBoundingClientRect().left + e.currentTarget.offsetWidth / 2)}
          >
            <div className={`star ${hoverRating > index ? (hoverRating > index + 0.5 ? 'filled' : 'half-filled') : rating > index ? (rating > index + 0.5 ? 'filled' : 'half-filled') : ''}`}>
              ★
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default StarRating;
