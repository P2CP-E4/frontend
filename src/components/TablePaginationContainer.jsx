import React from 'react';
import TablePagination from './TablePagination';
const TablePaginationContainer = ({ pageNumber, currentPageIndex, nextPage, previousPage, canNextPage, canPreviousPage, gotoPage }) => {
    const pagination = [];
    if (currentPageIndex <= 4) {

        for (let i = 1; i <= 7; i++) {
            i === currentPageIndex ? pagination.push(<TablePagination content={i} style={{ backgroundColor: "#03C988" }} />) : pagination.push(<TablePagination content={i} style={{ backgroundColor: "#070606" }} handleClickEvent={() => gotoPage(i - 1)} />);
        }

        pagination.push(<TablePagination content="&#10095;&#10095;" handleClickEvent={nextPage} disable={!canNextPage} />);

    } else if (currentPageIndex > 4 && currentPageIndex < pageNumber - 3) {

        pagination.push(<TablePagination content="1" handleClickEvent={() => gotoPage(0)} />, <TablePagination content="&#10096;&#10096;" handleClickEvent={previousPage} disable={!canPreviousPage} />);

        for (let i = currentPageIndex - 2; i <= currentPageIndex + 2; i++) {
            i === currentPageIndex ? pagination.push(<TablePagination content={i} style={{ backgroundColor: "#03C988" }} />) : pagination.push(<TablePagination content={i} style={{ backgroundColor: "#070606" }} handleClickEvent={() => gotoPage(i - 1)} />);
        }

        pagination.push(<TablePagination content="&#10095;&#10095;" handleClickEvent={nextPage} disable={!canNextPage} />, <TablePagination content={pageNumber - 1} handleClickEvent={() => gotoPage(pageNumber - 2)} />);

    } else if (currentPageIndex >= pageNumber - 3) {

        pagination.push(<TablePagination content="1" handleClickEvent={() => gotoPage(0)} />, <TablePagination content="&#10096;&#10096;" handleClickEvent={previousPage} disable={!canPreviousPage} />);

        for (let i = pageNumber - 6; i < pageNumber; i++) {
            i === currentPageIndex ? pagination.push(<TablePagination content={i} style={{ backgroundColor: "#03C988" }} />) : pagination.push(<TablePagination content={i} style={{ backgroundColor: "#070606" }} handleClickEvent={() => gotoPage(i - 1)} />);
        }

    }
    return (
        <div className='flex justify-center items-center w-screen'>
            {pagination.map((item) => {
                return item;
            })}
        </div>
    );
}

export default TablePaginationContainer;