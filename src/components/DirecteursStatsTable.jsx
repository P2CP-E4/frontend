import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useFilters } from 'react-table';
import axios from 'axios';
import ColumnFilter from './ColumnFilter';

const DirecteursStatsTable = () => {
    const DIRECTEUR_STAT_GET_URL = 'http://localhost:8080/api/Statistiques/DocsParEncad';
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get(DIRECTEUR_STAT_GET_URL)
            .then((res) => {
                setTableData(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const data = useMemo(() => tableData, [tableData]);

    const columns = useMemo(() => [
        {
            Header: 'Nom du Directeur',
            accessor: 'nomCompletDirecteur',
            placeHolderFilter: 'Directeur',
            Filter: ColumnFilter,
        },
        {
            Header: 'Directeur Principale',
            accessor: 'directeurCount',
            Filter: '',
            width: 100,
            Cell: item => <span className={item?.value > 6 ? "text-red-500" : ""}>{item?.value}</span>
        },
        {
            Header: 'Co-Directeur',
            accessor: 'coDirecteurCount',
            Filter: '',
            width: 100,
            Cell: item => <span className={item?.value > 6 ? "text-red-500" : ""}>{item?.value}</span>
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
        < div className='flex flex-col items-center w-fit' >
            <h1 className='mb-5'>Nombre de Doctorant par directeur</h1>
            {
                headerGroups.map((headerGroup) => (
                    <div className='px-10 mb-5' {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => column.canFilter ? <React.Fragment key={column.id}>{column.render("Filter")}</React.Fragment> : null)}
                    </div >
                ))
            }
            <div className='overflow-y-auto w-fit max-h-[490px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300'>
                <table className="m-0 table-fixed" {...getTableProps()}>
                    <thead className='sticky top-0'>
                        {headerGroups.map((headerGroup) => (
                            <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-12 text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th className='text-center border'{...column.getHeaderProps({ width: column.width })}>
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
                                        <td className='px-2 py-3 text-center whitespace-nowrap' {...cell.getCellProps({ width: cell.column.width })}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table >
            </div>
        </div >
    );
}

export default DirecteursStatsTable;