const genrateSitemap = async (count) => {
    const websiteUrl = 'https://moviesprix.vercel.app';

    const sitemapUrlsArray = [
        '/',
        '/search',
        '/movies',
        '/tv',
        '/bookmarks',
    ];

    const promiseArray = [];

    for (let i = 1; i <= count; i++) {
        promiseArray.push(fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${i}`));
    }

    const movies = await Promise.all(promiseArray);
    const moviesJson = await Promise.all(movies.map((movie) => movie.json()));

    // moviesJson.forEach((moviesObj) => {
    //     moviesObj.results.forEach((movie) => {
    //         sitemapUrlsArray.push(`/movies/${movie.id}`);
    //     });
    // });

    for (const moviesObj of moviesJson) {
        for (const movie of moviesObj.results) {
            sitemapUrlsArray.push(`/movies/${movie.id}`);
        }
    }

    const sitemap = sitemapUrlsArray.map((url) => websiteUrl + url).join('\n');

    return sitemap;
}



export async function GET(req) {
    const sitemap = await genrateSitemap(100);

    return new Response(
        sitemap,
        {
            status: 200,
            headers: {
                'content-type': 'text/plain',
                'cache-control': 'stale-while-revalidate, s-maxage=3600',
            },
        },
    )
}