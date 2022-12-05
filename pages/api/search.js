// create api/search.js which will be used to search for movies
// and return the results to the client
// this is a server side api route

export default async function handler(req, res) {
  const { q, mediaType, includeAdult } = req.query;
  const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${process.env.TMDB_API_KEY}&query=${q}&include_adult=${includeAdult}`;
  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
