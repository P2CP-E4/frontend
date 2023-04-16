import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import TablePaginationContainer from './TablePaginationContainer';
import doctorant_data from '../data/doctorant_data.json';
const DoctorantTable = () => {
    const data = useMemo(() => doctorant_data, []);
    //TODO:fetch data from API

    const columns = useMemo(() => [
        {
            Header: 'Nom et prénom',
            accessor: 'nomPrenom'
        },
        {
            Header: 'Date 1ére inscription',
            accessor: 'premiereInscription'
        },
        {
            Header: 'Intitulé thése',
            accessor: 'intituleeThese'
        },
        {
            Header: 'Laboratoire',
            accessor: 'laboratoire'
        },
        {
            Header: 'Directeur',
            accessor: 'directeurPrincipal'
        },
        {
            Header: 'Code PV',
            accessor: 'code_pv'
        },
        {
            Header: 'Date FCT',
            accessor: 'FCT'
        },
        {
            Header: 'Status',
            accessor: 'status'
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
        pageOptions,
        state,
        gotoPage,
        pageCount,
    } = useTable({ columns, data, initialState: { pageSize: 7 } }, usePagination);
    const { pageIndex } = state;
    console.log(pageIndex);
    return (
        <>
            <div className='w-11/12 rounded-xl'>
                <table className="table-fixed" {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr className='bg-[#F9F9F9] border-[#D9D9D9] border text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th className='py-3 px-6 text-left' {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead >
                    <tbody className='text-gray-600 text-sm font-light bg-white' {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr className='border-b border-gray-200 hover:bg-gray-100' {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td className='py-3 px-6 text-left whitespace-nowrap' {...cell.getCellProps}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table >
                <div className='bg-[#F9F9F9] border border-[#D9D9D9] h-12 flex justify-center items-center'>
                    <TablePaginationContainer
                        pageNumber={pageCount}
                        currentPageIndex={pageIndex + 1}
                        nextPage={nextPage}
                        previousPage={previousPage}
                        canNextPage={canNextPage}
                        canPreviousPage={canPreviousPage}
                        gotoPage={gotoPage}
                    />
                </div>
            </div>
        </>
    );
}
export default DoctorantTable;