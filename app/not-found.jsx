'use client';

import { MdSentimentVeryDissatisfied } from 'react-icons/md';
import './error.scss';

const page = () => (
    <div className="error__page">
        <MdSentimentVeryDissatisfied />
        <div className="text">
            <h1>Oops! Page not found</h1>
            <p>Sorry, we are unable to find the page you are looking for.</p>
        </div>
    </div>
);

export default page;