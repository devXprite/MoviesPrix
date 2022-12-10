import styles from './style.scss';

export default function PersonCard(props) {
  return (
    <div className="card card__person" key={props.id}>
      <img className="img" src={`https://image.tmdb.org/t/p/w200${props.profile_path}`} alt={props.name} />
      <div className="info">
        <h3 className="name">{props.name}</h3>
        <p className="character">{props.character}</p>
      </div>
    </div>
  );
}
