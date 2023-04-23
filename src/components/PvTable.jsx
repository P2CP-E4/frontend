import React, { useMemo } from 'react';
import { useTable, useFilters, usePagination } from 'react-table';
import Pagination from './Pagination';
import ColumnFilter from './ColumnFilter';
import ColumSelectFilter from './ColumnSelectFilter';
import pv_data from '../data/pv_data.json';
const PvTable = () => {
    //TODO: fetch data from API
    const data = useMemo(() => pv_data.sort((a, b) => (a.date - b.date)), []);
    const columns = useMemo(() => [
        {
            Header: 'Année',
            accessor: 'date',
            placeHolderFilter: 'Année',
            Filter: ColumSelectFilter,
        },
        {
            Header: 'Code',
            accessor: 'code',
            placeHolderFilter: 'Code',
            Filter: ColumnFilter,
        },
        {
            Header: 'Lien',
            accessor: 'url',
            placeHolderFilter: 'Lien',
            Filter: '',
            Cell: ({ value }) => <a href={value} className='text-[#03C988] underline '>Lien vers fichier PDF</a>
        },
    ], []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        state,
        gotoPage,
        pageCount,
    } = useTable({ columns, data, initialState: { pageSize: 7 }, defaultColumn: { Filter: ColumnFilter } }, useFilters, usePagination,);
    const { pageIndex } = state;
    return (
        <>
            {headerGroups.map((headerGroup) => (
                <div className='flex justify-center w-1/2 gap-1 mb-3' {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => column.canFilter ? <React.Fragment key={column.id}>{column.render("Filter")}</React.Fragment> : null)}
                </div >
            ))}
            <table className="w-1/2 table-fixed rounded-t-xl" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-10 rounded-t-xl text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th className='text-center border'{...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead >
                <tbody className='text-sm font-light text-gray-600 bg-white' {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr className='border-b border-gray-200 hover:bg-gray-100' {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td className='px-2 py-3 text-center whitespace-nowrap' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table >
            <div className='bg-[#F9F9F9] border border-[#D9D9D9] w-1/2 h-12 rounded-b-xl flex justify-between items-center'>
                <Pagination
                    pageNumber={pageCount}
                    currentPageIndex={pageIndex + 1}
                    nextPage={nextPage}
                    previousPage={previousPage}
                    canNextPage={canNextPage}
                    canPreviousPage={canPreviousPage}
                    gotoPage={gotoPage}
                />
            </div>
        </>
    );
}

export default PvTable;