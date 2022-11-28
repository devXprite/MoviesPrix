import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../../next-seo.config';

export default async function Head({ params }) {
    const { id } = params;
    const resTv = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    const tvData = await resTv.json();

    const updateMeta = {
        ...NEXT_SEO_DEFAULT,
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
        canonical : 'https://moviesprix.vercel.app/tv/' + id,
    };

    if (tvData.backdrop_path) {
        updateMeta.openGraph.images.push({
            url: `https://image.tmdb.org/t/p/w500${tvData.backdrop_path}`,
            width: 500,
            height: 750,
            alt: tvData.name,
        });
    }

    return <NextSeo {...updateMeta} useAppDir={true} />;
}