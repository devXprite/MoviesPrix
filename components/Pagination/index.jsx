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
          <FaArrowLeft />
          {' '}
          Previous
        </button>
      </Link>

      <div className="paginationNumber">
        {currentPage > 3 && (
          <>
            <Link href={`${pathname}?page=1`}>
              <span>1</span>
            </Link>
            <span>...</span>
          </>
        )}
        {currentPage > 2 && (
          <Link href={`${pathname}?page=${currentPage - 2}`}>
            <span>{currentPage - 2}</span>
          </Link>
        )}

        {currentPage > 1 && (
          <Link className="prevPage" href={`${pathname}?page=${currentPage - 1}`}>
            <span>{currentPage - 1}</span>
          </Link>
        )}

        <span className="currentPage">{currentPage}</span>

        {currentPage < totalPage && (
          <Link className="nextPage" href={`${pathname}?page=${currentPage + 1}`}>
            <span>{currentPage + 1}</span>
          </Link>
        )}

        {currentPage < totalPage - 1 && (
          <Link href={`${pathname}?page=${currentPage + 2}`}>
            <span>{currentPage + 2}</span>
          </Link>
        )}

        {currentPage < totalPage - 2 && (
          <>
            <span>...</span>
            <Link href={`${pathname}?page=${totalPage}`}>
              <span>{totalPage}</span>
            </Link>
          </>
        )}
      </div>

      <Link href={nextPageUrl}>
        <button
          className="paginationButton"
          disabled={currentPage === totalPage}
          type="button"
        >
          Next
          {' '}
          <FaArrowRight />
        </button>
      </Link>

    </div>
  );
}
