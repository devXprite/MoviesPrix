'use client';

import ISO6391 from 'iso-639-1';
import moment from 'moment';
import Link from 'next/link';

import { BsStarFill, BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './card.scss';


export default function Card(prop) {
  const [isBookmarked, setIsBookmarked] = useState(null);

  useEffect(() => {
    try {
      if (window?.localStorage?.getItem(prop.id)) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    } catch (error) {
      // console.log('Unable to access localStorage');
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
          try {
            setIsBookmarked(!isBookmarked);
            if (isBookmarked) {
              window?.localStorage.removeItem(prop.id);
            } else {
              window?.localStorage.setItem(prop.id, JSON.stringify(prop));
            }
          } catch (error) {
            console.log('Unable to Bookmark this item because localStorage is not accessible');
          }

        }}
      >
        {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
      </p>

      <Link prefetch={false} href={`/${prop.type === 'tv' ? 'tv' : 'movies'}/${prop.id}`}>
        <LazyLoadImage
          className="image"
          src={
            (prop.className === 'wide' && prop.backdrop_path)
              ? `https://image.tmdb.org/t/p/w780${prop.backdrop_path}`
              : `https://image.tmdb.org/t/p/w200${prop.poster_path}`

          }
          placeholderSrc={
            (prop.className === 'wide' && prop.backdrop_path) 
            ? `https://image.tmdb.org/t/p/w300${prop.backdrop_path}`
              : `https://image.tmdb.org/t/p/w45${prop.poster_path}`
          }
          effect="blur"
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
