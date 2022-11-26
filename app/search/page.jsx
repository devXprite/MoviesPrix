/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card";
import styles from "./page.scss";

export default function page() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        (async () => {
            setLoading(true);
            const res = await fetch("/api/search?q=" + query, { signal });
            const data = await res.json();
            setResults(data.results);
            setLoading(false);
        })();

        return () => controller.abort();
    }, [query]);


    return (
        <div className="search__page">
            <h2 className="pageTitle">Search</h2>

            <div className="search">
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} className="input__query" placeholder="Search for a movie ..."/>
                <select className="input__filter" name="adult" id="adult">
                    <option value="both">Both</option>
                    <option value="true">Adult</option>
                    <option value="false">Non-Adult</option>
                </select>
                <select className="input__filter" name="year" id="year">
                    <option value="both">All Years</option>
                    {[...Array(50).keys()].map((i) => {
                            return <option key={i} value={i + 1970}>{i + 1970}</option>
                    })}
                </select>
            </div>
            {query && <p className="query">search results fror <b>{query}</b></p>}

            {results
                ? (<div className="gridCardContainer">
                    {results.map(result => (<Card key={result.id} {...result} />))}
                </div>)
                : <p className="no__result">no results</p>
            }
        </div>
    )
}