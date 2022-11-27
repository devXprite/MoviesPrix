export default async function handler(req, res) {

    res.statusCode = 200

    res.setHeader('Content-Type', 'text/plain')
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      
      const websiteUrl = 'https://www.example.com';

      const sitemapUrlsArray = [
        '/',
        '/search',
        '/movies',
        '/tv',
        '/bookmarks'
      ]


      for (let i = 1; i <= 25; i++) {
        const movies = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${i}`)
        const moviesJson = await movies.json()
        moviesJson.results.forEach(movie => {
          sitemapUrlsArray.push(`/movies/${movie.id}`)
        })
      }

      const urlsArray = sitemapUrlsArray.map(url => websiteUrl + url )
      const sitemap = urlsArray.join(`\n`)      
  
    res.end(sitemap)
  }
  