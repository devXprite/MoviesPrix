import Image from 'next/image';
import styles from './castCard.scss';

export default function CastCard(props) {
    return (
        <div className="cast__card">
            <h2>Cast</h2>
            <div className="container">
                {
                    props.castData.map((cast) => (
                        <div className="card" key={cast.id}>
                            <Image className="img" src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt={cast.name} width={250} height={350} />
                            <div className="info">
                                <h3 className="name">{cast.name}</h3>
                                <p className="character">{cast.character}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}