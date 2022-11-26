import ExpendedCard from "../../../components/ExpandedCard";

export default async function page({ params }) {
    const { id } = params;

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    const movieData = await res.json();

    return <ExpendedCard {...movieData} />
}