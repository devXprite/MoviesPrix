import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Explore TV'
}

export default async function page({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&page=${page}&sort_by=vote_count.desc`);

  const data = await response.json();
  const cardComponents = data.results.map((movie, i) => <Card key={i} type="tv" {...movie} />);

  return (
    <>
      <h2 className="pageTitle">TV Series</h2>

      <div className="gridCardContainer">
        {cardComponents}
      </div>

      <Pagination pathname="/tv" currentPage={page} totalPage={500 || data.total_pages} />

    </>
  );
}
