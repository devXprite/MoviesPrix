/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @next/next/no-img-element */
import './style.scss';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import ISO6391 from 'iso-639-1';
import moment from 'moment';
import StarRating from '../StarRating';
import Carousel from '../Carousel';

const minToHours = (mins) => {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
};

const Trending = async ({ movies }) => (

  <div className="trending">
    <Carousel>
      {
       movies.map((movie, i) => (
         <Link key={i} href={`/movies/${movie.id}`}>
           <div className="trending__movie">
             <div className="playIcon">
               <FaPlay />
             </div>
             <div className="backdrop">
               <img
                 className="landscape"
                 src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                 alt={movie.title}
               />
               <img
                 className="portrait"
                 src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                 alt={movie.title}
               />
             </div>
             <div className="info">
               <h2 className="title">{movie.title}</h2>
               <p className="others">
                 {moment(movie.release_date).format('MMMM YYYY')} | {ISO6391.getName(movie.original_language)}
               </p>
               <div className="rating">
                 <StarRating rating={movie.vote_average} />
                 <span>({movie.vote_average.toFixed(1)})</span>
               </div>
               <p className="overview">{movie.overview}</p>
               {/* <Link href={`/movie/${movie.id}`}>
                            <button type="button" className="btn">
                              <FaPlay /> &nbsp; Play Trailer
                            </button>
                          </Link> */}
             </div>
           </div>
         </Link>
       ))
                }
    </Carousel>
  </div>

);

export default Trending;
