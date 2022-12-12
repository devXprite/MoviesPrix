'use client';

import { MdSentimentVeryDissatisfied } from 'react-icons/md';
import './error.scss';

export default function page({ statusCode }) {
  return (
    <div className="error__page">
      <MdSentimentVeryDissatisfied />
      <div className="text">
        <h1>Oops! Something went wrong</h1>
        <p>
          Sorry, we are unable to process your request at this time.
          {statusCode
            ? `An error ${statusCode} occurred on server. Please try again later.`
            : 'An error occurred on client. Please view console for more details.'}
        </p>
      </div>
    </div>
  );
}
