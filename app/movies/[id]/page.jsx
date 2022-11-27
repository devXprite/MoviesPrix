import CastCard from "../../../components/CastCard";
import ExpendedCard from "../../../components/ExpandedCard";

export default async function page({ params }) {
    const { id } = params;

    const resMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    const movieData = await resMovie.json();

    const resCast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    const castData = (await resCast.json()).cast;

    return (
        <>
            <ExpendedCard {...movieData} />
            <CastCard castData={castData} />
        </>
    )
}