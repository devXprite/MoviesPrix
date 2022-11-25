/* eslint-disable @next/next/no-img-element */

import moment from 'moment';
import styles from './p.scss';
import ISO6391 from 'iso-639-1';
import { BsStarFill } from 'react-icons/bs';
import { FaDollarSign, FaClock, FaUserFriends,FaFire  } from 'react-icons/fa';

export default async function page({ params }) {
    const { id } = params;

    // fetch movie details from tmdb api 
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6217472bdd628b9268b65c128bf3cc6b&language=en-US`);
    const movie = await res.json();

    return (
        <div className="movie__container">

            {movie.backdrop_path ? (<img className="backdrop" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />) : ''}

            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className='content'>
                <h1 className='title'>{movie.title}</h1>
                <div className="rating">
                    <p className='stars'> <BsStarFill /> {movie.vote_average}</p>
                    <p className="runtime"> <FaClock /> {movie.runtime} mins</p>
                </div>
                <h2 className="heading">Genres</h2>
                <p className="genres">{movie.genres.map((genre, i) => <span key={i}>{genre.name}</span>)}</p>

                <h2 className="heading">OverView</h2>
                <p className='overview'>{movie.overview}</p>

                <h2 className="heading">Others</h2>
                <div className="stats">
                    <div className="box">
                        <p className="key">Budget</p>
                        <p className="value">$ {movie.budget}</p>
                    </div>
                    <div className="box">
                        <p className="key">Revenue</p>
                        <p className="value">$ {movie.revenue}</p>
                    </div>
                    <div className="box">
                        <p className="key">Status</p>
                        <p className="value">{movie.status}</p>
                    </div>
                    <div className="box">
                        <p className="key">Release Date</p>
                        <p className="value">{moment(movie.release_date).format('DD MMMM YYYY')}</p>
                    </div>
                    <div className='box'>
                        <p className="key">Country</p>
                        <p className="value">{movie.production_countries.map((country, i) => <span key={i}>{country.name}</span>)}</p>
                    </div>
                    <div className="box">
                        <p className="key">Original Language</p>
                        <p className="value">{ISO6391.getName(movie.original_language)}</p>
                    </div>
                    <div className='box'>
                        <p className='key'>Runtime</p>
                        <p className='value'>{movie.runtime} mins</p>
                    </div>
                    <div className='box'>
                        <p className='key'>Rating</p>
                        <p className='value'>{movie.vote_average}/10</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}