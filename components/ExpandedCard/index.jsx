/* eslint-disable @next/next/no-img-element */
import styles from './expendedCard.scss';
import moment from 'moment';
import ISO6391 from 'iso-639-1';
import StarRating from '../StarRating';

export default function ExpendedCard(props) {
  return (
    <div className="expendedCard">

      {props.backdrop_path ? (
        <img
          className="backdrop"
          src={`https://image.tmdb.org/t/p/w780/${props.backdrop_path}`}
          placeholderSrc={`https://image.tmdb.org/t/p/w300/${props.backdrop_path}`}
          alt={props.title || props.name}
          // width={1600}
          // height={900}
        />
      ) : ''}

      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w400/${props.poster_path}`}
          alt={props.title}
          // width={300}
          // height={450}
        />
      </div>
      <div className="content">
        <h1 className="title">{props.title || props.name}</h1>
        <p className="tagline">{props.tagline}</p>
        <div className="rating">
          <StarRating rating={props.vote_average} />
        </div>
        <h2 className="heading">Genres</h2>
        <p className="genres">{props.genres.map((genre, i) => <span key={i}>{genre.name}</span>)}</p>

        <h2 className="heading">OverView</h2>
        <p className="overview">{props.overview}</p>

        <h2 className="heading">Others</h2>
        <div className="stats">
          <div className="box">
            <p className="key">Budget</p>
            <p className="value">
              $
              {props.budget || '--'}
            </p>
          </div>
          <div className="box">
            <p className="key">Revenue</p>
            <p className="value">
              $
              {props.revenue || '--'}
            </p>
          </div>
          <div className="box">
            <p className="key">Status</p>
            <p className="value">{props.status}</p>
          </div>
          <div className="box">
            <p className="key">Original Language</p>
            <p className="value">{ISO6391.getName(props.original_language)}</p>
          </div>
          <div className="box">
            <p className="key">Runtime</p>
            <p className="value">
              {props.runtime}
              {' '}
              mins
            </p>
          </div>
          <div className="box">
            <p className="key">Rating</p>
            <p className="value">
              {props.vote_average}
              /10
            </p>
          </div>
          <div className="box">
            <p className="key">Release Date</p>
            <p className="value">{moment(props.release_date).format('DD MMMM YYYY')}</p>
          </div>
          <div className="box">
            <p className="key">Country</p>
            <p className="value">{props.production_countries.splice(0, 1).map((country, i) => <span key={i}>{country.name}</span>)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
