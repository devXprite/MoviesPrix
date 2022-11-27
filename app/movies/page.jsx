import moment from 'moment';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

export default async function movies({ searchParams }) {

    const page =  parseInt(searchParams.page) || 1;
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&sort_by=release_date.desc&primary_release_date.lte=${moment().format('YYYY-MM-DD')}&page=${page}`);

    const data = await response.json();
    const cardComponents = data.results.map((movie, i) => <Card key={i} className='normal' {...movie} />)

    return (
        <>
            <h2 className='pageTitle'>Movies</h2>
            <div className="gridCardContainer">
                {cardComponents}
            </div>

            <Pagination pathname='/movies' currentPage={page} totalPage={data.total_pages} />
        </> 
    )
}