import { MdSentimentVeryDissatisfied } from 'react-icons/md';
import '../error.scss';

export default function page(prop) {
    return (
        <div className='error__page'>
            <MdSentimentVeryDissatisfied />
            <div className="text">
                <h1>Oops! Something went wrong</h1>
                <p>Sorry, we are unable to process your request at this time. Please try again later.</p>
            </div>
        </div>
    )
}