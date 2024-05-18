import PersonCard from '../../../components/PersonCard';
import styles from './page.scss';
import Card from '../../../components/Card';
import ExpendedCard from '../../../components/ExpandedCard';
import tmdbClient from '../../../lib/tmdbClient';
import { unstable_noStore } from 'next/cache';

export async function generateMetadata({ params }) {
    const { id } = params;
    const { data: movieData } = await tmdbClient.get(`/movie/${id}?language=en-US`);

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
    };
}

export default async function page({ params }) {
    unstable_noStore();

    const { id } = params;

    const movieData = (await tmdbClient.get(`/movie/${id}?language=en-US`)).data;
    const castData = (await tmdbClient.get(`/movie/${id}/credits?language=en-US`)).data.cast;
    const similarData = (await tmdbClient.get(`/movie/${id}/similar?language=en-US&page=1`)).data.results;

    return (
        <div className="details__page">
            <div className="section">
                <ExpendedCard {...movieData} />
            </div>
            <div className="section">
                <h2 className="title">Cast</h2>
                <div className="cardContainer">
                    {castData.map(person => (
                        <PersonCard key={person.id} {...person} />
                    ))}
                </div>
            </div>
            <div className="section">
                <h2 className="title">Similar Movies</h2>
                <div className="cardContainer">
                    {similarData.map(movie => (
                        <Card key={movie.id} {...movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}
