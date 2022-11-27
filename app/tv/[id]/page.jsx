import styles from '../../movies/[id]/page.scss'
import Card from "../../../components/Card"
import PeopleCard from "../../../components/PeopleCard";
import ExpendedCard from "../../../components/ExpandedCard";

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
                    {castData.map(person => <PeopleCard key={person.id} {...person} /> )}
                </div>
            </div>
            <div className="section">
                <h2 className="title">Similar TV Shows</h2>
                <div className="cardContainer">
                    {similarData.map(tv => <Card key={tv.id} {...tv} /> )}
                </div>
            </div>
        </div>
    )
}