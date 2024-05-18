import Card from '../components/Card';
import Trending from '../components/Trending';
import tmdbClient from '../lib/tmdbClient';
import styles from './page.scss';

export const metadata = {
    title: 'Home',
};

const categoryArray = [
    {
        title: 'Popular',
        apiUrl: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    },
    {
        title: 'Top Rated',
        apiUrl: `/movie/top_rated?language=en-US&page=1`,
    },

    {
        title: 'Best by Tom Cruise',
        apiUrl: `/discover/movie?language=en-US&include_adult=false&page=1&with_cast=500&with_people=500&sort_by=vote_count.desc`,
    },
    {
        title: 'Action',
        apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=28`,
    },
    {
        title: 'Best by Shah Rukh Khan',
        apiUrl: `/discover/movie?language=en-US&include_adult=false&page=1&with_cast=35742&with_people=35742&sort_by=vote_count.desc`,
    },
    {
        title: 'Comedy',
        apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=35`,
    },
    {
        title: 'Best from Bollywood',
        apiUrl: `/discover/movie?sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_original_language=hi`,
    },
    {
        title: 'Horror',
        apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=27`,
    },
    {
        title: 'Best from 2010',
        apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&primary_release_year=2010&sort_by=vote_count.desc`,
    },
    {
        title: 'Best by Leonardo DiCaprio',
        apiUrl: `/discover/movie?language=en-US&include_adult=false&page=1&with_cast=6194&with_people=6194&sort_by=vote_count.desc`,
    },
    {
        title: 'Sci-Fi',
        apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=878&sort_by=vote_count.desc`,
    },
    {
        title: 'Crime',
        apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=80`,
    },
];

const getCardsByCategory = async api => {
    // const res = await fetch(api);

    try {
        const { data } = await tmdbClient.get(api);
        const cardComponents = data.results.map((movie, i) => <Card key={i} {...movie} />);
        return cardComponents;
    } catch (error) {
        console.log(error);
    }
};

export default async function Home() {
    const { results: trendingMovies } = (await tmdbClient.get('trending/movie/week')).data;

    return (
        <div>
            <Trending movies={trendingMovies} />
            {/* <CategoryCard /> */}

            {await Promise.all(
                categoryArray.map(async category => (
                    <div key={category.title} className="categoryContainer">
                        <h2 className="categoryTitle">{category.title}</h2>
                        <div className="cardContainer">{await getCardsByCategory(category.apiUrl)}</div>
                    </div>
                ))
            )}
        </div>
    );
}
