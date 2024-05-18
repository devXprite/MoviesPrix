import styles from '../../movies/[id]/page.scss';
import Card from '../../../components/Card';
import PersonCard from '../../../components/PersonCard';
import ExpendedCard from '../../../components/ExpandedCard';
import tmdbClient from '../../../lib/tmdbClient';
import { unstable_noStore } from 'next/cache';

export async function generateMetadata({ params }) {
    const { id } = params;

    const { data: tvData } = await tmdbClient.get(`/tv/${id}?language=en-US`);

    return {
        title: tvData.name,
        description: tvData.overview,
        openGraph: {
            title: tvData.name,
            description: tvData.overview,
            images: [
                {
                    url: `https://image.tmdb.org/t/p/w500${tvData.poster_path}`,
                    width: 500,
                    height: 750,
                    alt: tvData.name,
                },
            ],
        },
        twitter: {
            cardType: 'summary_large_image',
        },
        canonical: 'https://moviesprix.vercel.app/tv/' + id,
    };
}

export default async function page({ params }) {
    unstable_noStore();
    const { id } = params;

    const tvData = (await tmdbClient.get(`/tv/${id}?language=en-US`)).data;
    const castData = (await tmdbClient.get(`/tv/${id}/credits?language=en-US`)).data.cast;
    const similarData = (await tmdbClient.get(`/tv/${id}/similar?language=en-US&page=1`)).data.results;

    return (
        <div className="details__page">
            <div className="section">
                <ExpendedCard {...tvData} />
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
                <h2 className="title">Similar TV Shows</h2>
                <div className="cardContainer">
                    {similarData.map(tv => (
                        <Card key={tv.id} type="tv" {...tv} />
                    ))}
                </div>
            </div>
        </div>
    );
}
