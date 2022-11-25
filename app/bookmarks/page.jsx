"use client";

import Card from '../../components/Card';
import styles from './page.scss';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';

export default function Bookmarks() {

    const [localStorageData, setLocalStorageData] = useState(null);

    useEffect(() => {
        const data = localStorage;
        setLocalStorageData(data);
    }, []);


    return (
        <div>
            <h2 className='pageTitle'>Bookmarks</h2>
            <div className="gridCardContainer">
                {
                    localStorageData 
                    ? Object.keys(localStorageData).filter(key => !isNaN(key)).length == 0 
                        ? <p className="noBookmark">No Bookmark Yet!</p>
                        : Object.keys(localStorageData).filter(key => !isNaN(key)).map((key, index) => <Card key={index} {...JSON.parse(localStorageData[key])} />)
                    : <Loader />
                }
            </div>
        </div>
    )
}
