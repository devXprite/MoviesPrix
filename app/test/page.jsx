import Trending from '../../components/Trending';

export default async function Page() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`);
  const data = await res.json();
  const movies = data.results;

  return (
    <div>
      <Trending movies={movies} />
    </div>
  );
}
