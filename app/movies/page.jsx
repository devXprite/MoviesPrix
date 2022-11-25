import moment from 'moment';
import Link from 'next/link';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import styles from './movies.scss';

export default async function movies({ searchParams }) {

    const { page = 1 } = searchParams;

    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6217472bdd628b9268b65c128bf3cc6b&sort_by=release_date.desc&primary_release_date.lte=${moment().format('YYYY-MM-DD')}&page=${page}`);

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