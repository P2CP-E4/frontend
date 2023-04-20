import React, { useMemo } from 'react'
import { useTable, useFilters, useGlobalFilter, usePagination } from 'react-table';
import Pagination from './Pagination';
import ColumnFilter from './ColumnFilter';
import ColumSelectFilter from './ColumnSelectFilter';
import StatusCustomCard from './StatusCustomCard';
import doctorant_data from '../data/doctorant_data.json';
const ModificationStatusTable = () => {
    //TODO: fetch data from API
    const data = useMemo(() => doctorant_data, []);

    const columns = useMemo(() => [
        {
            Header: 'Nom et prénom',
            accessor: 'nomPrenom',
            placeHolderFilter: 'Nom/prenom',
            Filter: ColumnFilter,
        },
        {
            Header: 'Date 1ére inscription',
            accessor: 'premiereInscription',
            placeHolderFilter: 'Date 1ère insc',
            Filter: ColumnFilter,
        },
        {
            Header: 'Directeur',
            accessor: 'directeurPrincipal',
            placeHolderFilter: 'Directeur',
            Filter: ColumnFilter,
        },
        {
            Header: 'Code PV',
            accessor: 'code_pv',
            placeHolderFilter: 'Code PV'
        },
        {
            Header: 'Status',
            accessor: 'status',
            placeHolderFilter: 'status',
            Filter: ColumSelectFilter,
            Cell: ({ value }) => <StatusCustomCard value={value} />
        }
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
                <div className='flex justify-between w-2/3 mx-auto mb-3'>
                    {headerGroup.headers.map((column) => column.canFilter ? column.render("Filter") : null)}
                </div >
            ))}
            <table className="w-2/3 table-fixed rounded-t-xl" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <>
                            <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-10 rounded-t-xl text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (

                                    <th className='text-center border'{...column.getHeaderProps()}>
                                        {column.render("Header")}
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
                                    <td className='px-2 py-3 text-center whitespace-nowrap' {...cell.getCellProps}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table >
            <div className='bg-[#F9F9F9] border border-[#D9D9D9] w-2/3 h-12 rounded-b-xl flex justify-between items-center mb-12'>
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

export default ModificationStatusTable
