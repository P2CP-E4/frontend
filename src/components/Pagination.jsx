import React from 'react';
import PaginationButton from './PaginationButton';
const Pagination = ({ pageNumber, currentPageIndex, nextPage, previousPage, canNextPage, canPreviousPage, gotoPage }) => {
    const pagination = [];
    if (pageNumber <= 8) {

        for (let i = 1; i <= pageNumber; i++) {
            i === currentPageIndex ? pagination.push(<PaginationButton content={i} style={{ backgroundColor: "#03C988", color: "white" }} />) : pagination.push(<PaginationButton content={i} handleClickEvent={() => gotoPage(i - 1)} />);
        }

    } else if (currentPageIndex <= 4) {
        for (let i = 1; i <= 7; i++) {
            i === currentPageIndex ? pagination.push(<PaginationButton content={i} style={{ backgroundColor: "#03C988", color: "white" }} />) : pagination.push(<PaginationButton content={i} handleClickEvent={() => gotoPage(i - 1)} />);
        }
        pagination.push(<PaginationButton content="&#10095;" handleClickEvent={nextPage} disable={!canNextPage} />, <PaginationButton content={pageNumber} handleClickEvent={() => gotoPage(pageNumber - 1)} />);

    } else if (currentPageIndex > 4 && currentPageIndex < pageNumber - 3) {

        pagination.push(<PaginationButton content="1" handleClickEvent={() => gotoPage(0)} />, <PaginationButton content="&#10094;" handleClickEvent={previousPage} disable={!canPreviousPage} />);
        for (let i = currentPageIndex - 2; i <= currentPageIndex + 2; i++) {
            i === currentPageIndex ? pagination.push(<PaginationButton content={i} style={{ backgroundColor: "#03C988", color: "white" }} />) : pagination.push(<PaginationButton content={i} handleClickEvent={() => gotoPage(i - 1)} />);
        }
        pagination.push(<PaginationButton content="&#10095;" handleClickEvent={nextPage} disable={!canNextPage} />, <PaginationButton content={pageNumber} handleClickEvent={() => gotoPage(pageNumber - 1)} />);

    } else if (currentPageIndex >= pageNumber - 3) {

        pagination.push(<PaginationButton content={1} handleClickEvent={() => gotoPage(0)} />, <PaginationButton content="&#10094;" handleClickEvent={previousPage} disable={!canPreviousPage} />);
        for (let i = pageNumber - 6; i <= pageNumber; i++) {
            i === currentPageIndex ? pagination.push(<PaginationButton content={i} style={{ backgroundColor: "#03C988", color: "white" }} />) : pagination.push(<PaginationButton content={i} handleClickEvent={() => gotoPage(i - 1)} />);
        }

    }
    return (
        <div className='flex items-center justify-center w-screen'>
            {pagination.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)}
        </div>
    );
}

export default Pagination;