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
            Header: 'Date du proces verbal',
            accessor: 'date',
            placeHolderFilter: 'Date PV',
            width: 150,
            Filter: ColumSelectFilter,
        },
        {
            Header: 'Code',
            accessor: 'code',
            placeHolderFilter: 'Code',
            width: 150,
            Filter: ColumnFilter,
        },
        {
            Header: 'Lien',
            accessor: 'url',
            placeHolderFilter: 'Lien',
            width: 200,
            Filter: '',
            Cell: ({ value }) => <a href={value} target='_blank' className='text-[#13005A] underline'>Lien vers fichier PDF</a>
        },
        {
            Header: 'Ordre du jour',
            accessor: '',
            placeHolderFilter: 'Ordre du jour',
            width: 300,
            Filter: ColumnFilter,
            Cell: ({ value }) => <p className='text-xs whitespace-pre-line'>Non Lorem ex esse cupidatat id esse anim laboris mollit ea. Fugiat et ex non tempor</p>
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
                <div className='flex justify-center w-[800px] gap-1 mb-3' {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => column.canFilter ? <React.Fragment key={column.id}>{column.render("Filter")}</React.Fragment> : null)}
                    <button type="button" className="w-fit border-transparent rounded-3xl bg-[#03C988] text-white text-sm px-7 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988] whitespace-nowrap">Exporter</button>
                    <button type="button" className="w-fit border-transparent rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988] whitespace-nowrap">Ajouter PV</button>
                </div >
            ))}
            <table className="table-fixed" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-10  text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th className='text-center border'{...column.getHeaderProps({ width: column.width, })}>
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
                                    <td className='px-2 py-3 text-center whitespace-nowrap' {...cell.getCellProps({ width: cell.column.width, })}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table >
            <div className='bg-[#F9F9F9] border border-[#D9D9D9] w-[800px] h-12 rounded-b-xl flex justify-between items-center'>
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