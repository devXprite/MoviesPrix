'use client';

import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Card from '../../components/Card';
import styles from './page.scss';

export default function page() {
  const [mediaType, setMediaType] = useState('movie');
  const [searchQuery, setSearchQuery] = useState('');
  const [includeAdult, setIncludeAdult] = useState(true);

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async () => {
      setLoading(true);
      const res = await fetch(`/api/search?q=${searchQuery}&mediaType=${mediaType}&includeAdult=${includeAdult}`, { signal });
      const data = await res.json();
      setResults(data.results);
      setLoading(false);
    })();

    return () => controller.abort();
  }, [searchQuery, mediaType, includeAdult]);

  return (
    <div className="search__page">
      <h2 className="pageTitle">Search</h2>

      <div className="search">
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="input__query" placeholder="Search for a movie ..." />
        <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} className="input__filter">
          <option value="movie">Movie</option>
          <option value="tv">TV Show</option>
        </select>
        <select value={includeAdult} onChange={(e) => setIncludeAdult(e.target.value)} className="input__filter">
          <option value="true">Include Adult</option>
          <option value="false">Exclude Adult</option>
        </select>
      </div>
      {searchQuery && (
        <p className="query">search results for <b>{searchQuery}</b> in <b>{mediaType}</b></p>
      )}

      {
        loading
          ? (<div className="loader">
            <Loader />
          </div>)
          : (results
            ? (<div className="gridCardContainer">
              {results.map((result) => (<Card key={result.id} type={mediaType} {...result} />))}
            </div>)
            : <p className="no__result">no results</p>
          )
      }
    </div>
  );
}
