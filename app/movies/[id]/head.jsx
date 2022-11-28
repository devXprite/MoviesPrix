import { NextSeo } from 'next-seo';

import { NEXT_SEO_DEFAULT } from '../../../next-seo.config';

export default async function Head({ params }) {

    const { id } = params;

    const resMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    const movieData = await resMovie.json();


    const updateMeta = {
        ...NEXT_SEO_DEFAULT,
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
        canonical : 'https://moviesprix.vercel.app/movies/' + id,
    };

    if (movieData.backdrop_path) {
        updateMeta.openGraph.images.push({
            url: `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`,
            width: 500,
            height: 750,
            alt: movieData.title,
        });
    }

    return <NextSeo {...updateMeta} useAppDir={true} />;
}