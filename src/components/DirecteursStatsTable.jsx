import React, { useMemo } from 'react';
import { useTable, useFilters } from 'react-table';
import ColumnFilter from './ColumnFilter';
import directeur_stat_data from '../data/directeur_stat_data.json';
const DirecteursStatsTable = () => {
    //TODO: fetch data from API
    const data = useMemo(() => directeur_stat_data, []);
    const columns = useMemo(() => [
        {
            Header: 'Nom du Directeur',
            accessor: 'directeur',
            placeHolderFilter: 'Directeur',
            Filter: ColumnFilter,
        },
        {
            Header: 'Nombre de Doctortorants',
            accessor: 'nombreDoctorant',
            placeHolderFilter: 'Code',
            Filter: '',
        },
    ], []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data, defaultColumn: { Filter: ColumnFilter } }, useFilters);
    return (
        <div className='w-fit'>
            {headerGroups.map((headerGroup) => (
                <div className='px-10 mb-3' {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => column.canFilter ? <React.Fragment key={column.id}>{column.render("Filter")}</React.Fragment> : null)}
                </div >
            ))}
            <div className='overflow-y-auto w-fit max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300'>
                <table className="m-0 table-fixed rounded-t-xl" {...getTableProps()}>
                    <thead className='sticky top-0'>
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
                        {rows.map((row) => {
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
            </div>
        </div>
    );
}

export default DirecteursStatsTable;