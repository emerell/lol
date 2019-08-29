import React from 'react';

const Pagination = ({  
        currentPage, 
        decreaseCurrentPageValue,
        increaseCurrentPageValue
    }) => {

    const MIN_PAGE_NUMBER = 1;
    const MAX_PAGE_NUMBER = 100;

    function paginateToPreviousPage(event) {
        if (currentPage == MIN_PAGE_NUMBER) {
            //TODO: Disable button
            return;
        }
        decreaseCurrentPageValue();
    }

    function paginateToNextPage(event) {
        if (currentPage == MAX_PAGE_NUMBER) {
            //TODO: Disable button
            return;
        }
        increaseCurrentPageValue();
    }

    return (
        <nav>
            <ul className="pagination">
                <button 
                    className="pagination__button pagination__button--prev" 
                    onClick={paginateToPreviousPage}
                >
                    Previous Page
                </button>
                <span className="pagination__results">
                    Page
                    <span className="pagination__number">{currentPage}</span>
                    out of
                    <span className="pagination__number">{MAX_PAGE_NUMBER}</span>
                </span>
                <button 
                    className="pagination__button pagination__button--next"
                    onClick={paginateToNextPage}
                    >Next Page</button>
            </ul>
        </nav>
    )
}

export default Pagination;