'use client';

import ISO6391 from 'iso-639-1';
import moment from 'moment';
import Link from 'next/link';

import { BsStarFill, BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import styles from './card.scss';

export default function Card(prop) {
  const [isBookmarked, setIsBookmarked] = useState(null);

  useEffect(() => {
    if (localStorage.getItem(prop.id)) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [prop.id]);

  return (
    <div className={`card ${prop.className}`}>
      <p className="rating">
        <BsStarFill />
        {' '}
        {prop.vote_average.toFixed(1)}
      </p>
      <p
        className="bookmark"
        onClick={() => {
          setIsBookmarked(!isBookmarked);
          if (isBookmarked) {
            localStorage.removeItem(prop.id);
          } else {
            localStorage.setItem(prop.id, JSON.stringify(prop));
          }
        }}
      >
        {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
      </p>

      <Link href={`/${prop.type === 'tv' ? 'tv' : 'movies'}/${prop.id}`}>
        <img
          className="image"
          src={
                    (prop.className === 'wide' && prop.backdrop_path)
                      ? `https://image.tmdb.org/t/p/w500${prop.backdrop_path}`
                      : `https://image.tmdb.org/t/p/w200${prop.poster_path}`

                }
          alt={prop.title || prop.name}
          // width={prop.className === 'wide' ? 450 : 250}
          // height={350}
        />
        <div className="info">
          <h2 className="title">{prop.title || prop.name}</h2>
          <p className="others">
            {moment(prop.release_date).format('MMMM YYYY')}
            {' '}
            •
            {ISO6391.getName(prop.original_language)}
            {' '}
            {prop.adult ? ' • 18+' : ''}
          </p>
          <p className="description">{prop.overview}</p>
        </div>
      </Link>
    </div>
  );
}
