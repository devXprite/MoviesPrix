import moment from 'moment';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import tmdbClient from '../../lib/tmdbClient';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Explore Movies',
};

export default async function movies({ searchParams }) {
    const page = parseInt(searchParams.page) || 1;
    const { data } = await tmdbClient.get(
        `/discover/movie?language=en-US&include_adult=false&page=${page}&sort_by=vote_count.desc`
    );

    const cardComponents = data.results.map((movie, i) => <Card key={i} className="normal" {...movie} />);

    return (
        <>
            <h2 className="pageTitle">Movies</h2>
            <div className="gridCardContainer">{cardComponents}</div>

            <Pagination pathname="/movies" currentPage={page} totalPage={500 || data.total_pages} />
        </>
    );
}
