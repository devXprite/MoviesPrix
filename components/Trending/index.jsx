/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @next/next/no-img-element */
import './style.scss';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import ISO6391 from 'iso-639-1';
import moment from 'moment';
import StarRating from '../StarRating';
import Carousel from '../Carousel';
// import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from '../Image';

const Trending = async ({ movies }) => (

  <div className="trending">
    <Carousel>
      {
       movies.map((movie, i) => (
         <Link prefetch={false} key={i} href={`/movies/${movie.id}`}>
           <div className="trending__movie">
             <div className="playIcon">
               <FaPlay />
             </div>
             <div className="backdrop">
               {/* <img
                 src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                 alt={movie.title}
               /> */}
               <Image
                  src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                  placeholderSrc={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                  alt={movie.title}
                />
             </div>
             <div className="info">
               <h2 className="title">{movie.title}</h2>
               <p className="others">
                 {moment(movie.release_date).format('MMMM YYYY')} | {ISO6391.getName(movie.original_language)}
               </p>
               <div className="rating">
                 <StarRating rating={movie.vote_average} starDimension={16} />
                 <span>({movie.vote_average.toFixed(1)})</span>
               </div>
               <p className="overview">{movie.overview}</p>
             </div>
           </div>
         </Link>
       ))
                }
    </Carousel>
  </div>

);

export default Trending;
