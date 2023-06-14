import styles from '../../movies/[id]/page.scss'
import Card from "../../../components/Card"
import PersonCard from "../../../components/PersonCard";
import ExpendedCard from "../../../components/ExpandedCard";

export async function generateMetadata({ params }) {
    const { id } = params;

    const resTv = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    const tvData = await resTv.json();

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
    }
}


export default async function page({ params }) {
    const { id } = params;

    const resTV = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    const tvData = await resTV.json();

    const resCast = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    const castData = (await resCast.json()).cast;

    // fetch similar TV shows
    const resSimilar = await fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`);
    const similarData = (await resSimilar.json()).results;

    return (
        <div className="details__page">
            <div className="section">
                <ExpendedCard {...tvData} />
            </div>
            <div className="section">
                <h2 className="title">Cast</h2>
                <div className="cardContainer">
                    {castData.map(person => <PersonCard key={person.id} {...person} />)}
                </div>
            </div>
            <div className="section">
                <h2 className="title">Similar TV Shows</h2>
                <div className="cardContainer">
                    {similarData.map(tv => <Card key={tv.id} type='tv' {...tv} />)}
                </div>
            </div>
        </div>
    )
}
