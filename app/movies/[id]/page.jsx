import PersonCard from '../../../components/PersonCard';
import styles from './page.scss';
import Card from '../../../components/Card';
import ExpendedCard from '../../../components/ExpandedCard';

export async function generateMetadata({ params }) {
  const { id } = params;

  const resMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
  const movieData = await resMovie.json();

  return {
    title: movieData.title,
    description: movieData.overview,
    openGraph: {
      title: movieData.title,
      description: movieData.overview,
      images: [
        {
          url: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
          width: 500,
          height: 750,
          alt: movieData.title,
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
    },
    canonical: 'https://moviesprix.vercel.app/movies/' + id,
  }

}


  export default async function page({ params }) {
    const { id } = params;

    const resMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    const movieData = await resMovie.json();

    const resCast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    const castData = (await resCast.json()).cast;

    const resSimilar = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`);
    const similarData = (await resSimilar.json()).results;

    return (
      <div className="details__page">
        <div className="section">
          <ExpendedCard {...movieData} />
        </div>
        <div className="section">
          <h2 className="title">Cast</h2>
          <div className="cardContainer">
            {castData.map((person) => (
              <PersonCard key={person.id} {...person} />
            ))}
          </div>
        </div>
        <div className="section">
          <h2 className="title">Similar Movies</h2>
          <div className="cardContainer">
            {similarData.map((movie) => (
              <Card key={movie.id} {...movie} />
            ))}
          </div>
        </div>

      </div>
    );
  }
