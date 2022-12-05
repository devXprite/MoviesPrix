import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './pagination.scss';

export default function Pagination(props) {
  const { pathname, currentPage, totalPage } = props;

  const nextPageUrl = `${pathname}?page=${currentPage === totalPage ? currentPage : currentPage + 1}`;
  const prevPageUrl = `${pathname}?page=${currentPage === 1 ? 1 : currentPage - 1}`;

  return (
    <div className="pagination">

      <Link href={prevPageUrl}>
        <button
          className="paginationButton"
          disabled={currentPage === 1}
          type="button"
        >
          {' '}
          <FaArrowLeft />
          {' '}
          Previous
        </button>
      </Link>
      <Link href={nextPageUrl}>
        <button
          className="paginationButton"
          disabled={currentPage === totalPage}
          type="button"
        >
          Next
          <FaArrowRight />
        </button>
      </Link>

    </div>
  );
}
