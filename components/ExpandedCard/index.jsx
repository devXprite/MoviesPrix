import styles from './expendedCard.scss';
import moment from 'moment';
import ISO6391 from 'iso-639-1';
import { BsStarFill } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';

export default function ExpendedCard(props) {
    return (
        <div className="expendedCard">

            {props.backdrop_path ? (<img className="backdrop" src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`} />) : ''}

            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w400/${props.poster_path}`} alt={props.title} />
            </div>
            <div className='content'>
                <h1 className='title'>{props.title || props.name}</h1>
                <p className="tagline">{props.tagline}</p>
                <div className="rating">
                    <p className='stars'> <BsStarFill /> {props.vote_average}</p>
                    <p className="runtime"> <FaClock /> {props.runtime} mins</p>
                </div>
                <h2 className="heading">Genres</h2>
                <p className="genres">{props.genres.map((genre, i) => <span key={i}>{genre.name}</span>)}</p>

                <h2 className="heading">OverView</h2>
                <p className='overview'>{props.overview}</p>

                <h2 className="heading">Others</h2>
                <div className="stats">
                    <div className="box">
                        <p className="key">Budget</p>
                        <p className="value">$ {props.budget || '--'}</p>
                    </div>
                    <div className="box">
                        <p className="key">Revenue</p>
                        <p className="value">$ {props.revenue || '--'}</p>
                    </div>
                    <div className="box">
                        <p className="key">Status</p>
                        <p className="value">{props.status}</p>
                    </div>
                    <div className="box">
                        <p className="key">Original Language</p>
                        <p className="value">{ISO6391.getName(props.original_language)}</p>
                    </div>
                    <div className='box'>
                        <p className='key'>Runtime</p>
                        <p className='value'>{props.runtime} mins</p>
                    </div>
                    <div className='box'>
                        <p className='key'>Rating</p>
                        <p className='value'>{props.vote_average}/10</p>
                    </div>
                    <div className="box">
                        <p className="key">Release Date</p>
                        <p className="value">{moment(props.release_date).format('DD MMMM YYYY')}</p>
                    </div>
                    <div className='box'>
                        <p className="key">Country</p>
                        <p className="value">{props.production_countries.map((country, i) => <span key={i}>{country.name}</span>)}</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}