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
        starDimension="20px"
        starRatedColor="#f1c40f"
        starEmptyColor="#5c5c5c"
        starSpacing="2px"
      />

    </div>
  );
}
