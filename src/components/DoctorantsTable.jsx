import React, { useMemo } from 'react';
import { useTable, usePagination, useFilters, useGlobalFilter } from 'react-table';
import Pagination from './Pagination';
import doctorant_data from '../data/doctorant_data.json';
import ColumnFilter from './ColumnFilter';
import ColumSelectFilter from './ColumnSelectFilter';
const DoctorantTable = () => {
    //TODO: fetch data from API
    const data = useMemo(() => doctorant_data, []);
    const columns = useMemo(() => [
        {
            Header: 'Nom et prénom',
            accessor: 'nomPrenom',
            placeHolderFilter: 'Nom/prenom'
        },
        {
            Header: 'Date 1ére inscription',
            accessor: 'premiereInscription',
            placeHolderFilter: 'Date 1ère insc'
        },
        {
            Header: 'Intitulé thése',
            accessor: 'intituleeThese',
            placeHolderFilter: 'Intitué thése'
        },
        {
            Header: 'Laboratoire',
            accessor: 'laboratoire',
            placeHolderFilter: 'Laboratoire',
            Filter: ColumSelectFilter,
        },
        {
            Header: 'Directeur',
            accessor: 'directeurPrincipal',
            placeHolderFilter: 'Directeur',
        },
        {
            Header: 'Code PV',
            accessor: 'code_pv',
            placeHolderFilter: 'Code PV'
        },
        {
            Header: 'Date FCT',
            accessor: 'FCT',
            placeHolderFilter: 'Date FCT'
        },
        {
            Header: 'Status',
            accessor: 'status',
            placeHolderFilter: 'status',
            Filter: ColumSelectFilter,
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
    } = useTable({ columns, data, initialState: { pageSize: 7 }, defaultColumn: { Filter: ColumnFilter } }, useFilters, useGlobalFilter, usePagination);
    const { pageIndex } = state;
    return (
        <>
            {headerGroups.map((headerGroup) => (
                <div className='flex mb-3'>
                    {headerGroup.headers.map((column) => column.canFilter ? column.render("Filter") : null)}
                </div >
            ))}
            <table className="w-11/12 table-fixed rounded-t-xl" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <>
                            <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-10 rounded-t-xl text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (

                                    <th className='text-center border'{...column.getHeaderProps()}>
                                        {column.render("Header")}
                                        {console.log(column)}
                                    </th>
                                ))}
                            </tr>
                        </>
                    ))}
                </thead >
                <tbody className='text-sm font-light text-gray-600 bg-white' {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr className='border-b border-gray-200 hover:bg-gray-100' {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td className='px-6 py-3 text-left whitespace-nowrap' {...cell.getCellProps}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table >
            <div className='bg-[#F9F9F9] border border-[#D9D9D9] w-11/12 h-12 rounded-b-xl flex justify-center items-center'>
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
export default DoctorantTable;