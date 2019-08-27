import React from 'react';

const Pagination = ({  
        currentPage,
        paginateToPreviousPage, 
        paginateToNextPage,
    }) => {

    const PAGENUMBERS = 100;

    return (
        <nav>
            <ul className="pagination">
                <button 
                    className="pagination__button pagination__button--prev" 
                    onClick={() => paginateToPreviousPage()}
                >
                    Previous page
                </button>
                <span className="pagination__results">
                    Page
                    <span className="pagination__number">{currentPage}</span>
                    out of
                    <span className="pagination__number">{PAGENUMBERS}</span>
                </span>
                <button 
                    className="pagination__button pagination__button--next"
                    onClick={() => paginateToNextPage()}
                    >Next Page</button>
            </ul>
        </nav>
    )
}

export default Pagination;