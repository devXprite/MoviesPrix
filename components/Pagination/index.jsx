import Link from "next/link";
import styles from "./pagination.scss";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


export default function Pagination(props) {
    const { pathname, currentPage, totalPage } = props;

    const nextPageUrl = `${pathname}?page=${currentPage === totalPage ? currentPage : currentPage + 1}`;
    const prevPageUrl = `${pathname}?page=${currentPage === 1 ? 1 : currentPage - 1}`;

    return (
        <div className="pagination">

            <Link href={prevPageUrl}>
                <button className="paginationButton" disabled={currentPage === 1} > <FaArrowLeft /> Previous</button>
            </Link>
            <Link href={nextPageUrl}>
                <button className="paginationButton" disabled={currentPage === totalPage}>Next <FaArrowRight /> </button>
            </Link>

        </div>
    )

}