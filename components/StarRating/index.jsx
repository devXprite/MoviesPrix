'use client';

import React from 'react';
import StarRatings from 'react-star-ratings';

export default function StarRating(props) {
  return (
    <div>
      <StarRatings
        rating={props.rating}
        numberOfStars={props.TotalStars || 10}
        name="rating"
        starSpacing={`${props.starSpacing || 2}px`}
        starDimension={`${props.starDimension || 20}px`}
        starRatedColor="#21daa2"
        starEmptyColor="#5c5c5c"
      />

    </div>
  );
}
