import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useFilters, usePagination } from 'react-table';
import axios from 'axios';
import { usePopUp } from '../hooks/usePopUp';
import fileDownload from 'js-file-download';
import Pagination from './Pagination';
import ColumnFilter from './ColumnFilter';
import ColumSelectFilter from './ColumnSelectFilter';
import PopUp from './PopUp';
import CarteAjoutPv from './CarteAjoutPv';
import CarteMajPv from './CarteMajPv';

const PvTable = () => {
    const PV_TABLE_GET_DATA_URL = 'http://localhost:9000/api/PVs/allPV';
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get(PV_TABLE_GET_DATA_URL)
            .then((res) => {
                setTableData(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const data = useMemo(() => tableData, [tableData]);

    const columns = useMemo(() => [
        {
            Header: 'Date du proces verbal',
            accessor: 'date',
            placeHolderFilter: 'Date PV',
            width: 150,
            Filter: ColumSelectFilter,
            Cell: ({ value }) => {
                let strDate = value.slice(0, 10);
                const [year, month, day] = strDate.split('-')
                return `${day}/${month}/${year}`;
            }
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
            accessor: 'ordreDuJour',
            placeHolderFilter: 'Ordre du jour',
            width: 300,
            Filter: ColumnFilter,
            Cell: ({ value }) => <p className='text-xs whitespace-pre-line'>{value}</p>
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
    const [ajoutPvTrigger, openAjoutPv, closeAjoutPv] = usePopUp();
    const [MAJTrigger, openMAJ, closeMAJ] = usePopUp();
    const handleExport = () => {
        const EXPORTER_XLS_URL = 'http://localhost:9000/api/PVs/exporter'
        axios.get(EXPORTER_XLS_URL, { responseType: 'blob' })
            .then(res => {
                fileDownload(res.data, 'pv.xlsx')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            {headerGroups.map((headerGroup) => (
                <div className='flex justify-center w-[850px] gap-1 mb-3' {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => column.canFilter ? <React.Fragment key={column.id}>{column.render("Filter")}</React.Fragment> : null)}
                    <button type="button" onClick={openAjoutPv} className="w-fit border-transparent rounded-3xl bg-[#00337C] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#00337C] border hover:border-[#00337C] whitespace-nowrap">Ajouter PV</button>
                    <button type="button" onClick={openMAJ} className="w-fit border-transparent rounded-3xl bg-[#00337C] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#00337C] border hover:border-[#00337C] whitespace-nowrap">Mise à jour PV</button>
                    <button type="button" onClick={handleExport} className="w-fit border-transparent rounded-3xl bg-[#00337C] text-white text-sm px-7 py-2 hover:bg-white hover:text-[#00337C] border hover:border-[#00337C] whitespace-nowrap">Exporter</button>
                </div >
            ))}
            <table className="table-fixed " {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-10 text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
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
            <PopUp trigger={ajoutPvTrigger} handleCloseEvent={closeAjoutPv}><CarteAjoutPv /></PopUp>
            <PopUp trigger={MAJTrigger} handleCloseEvent={closeMAJ}><CarteMajPv /></PopUp>
        </>
    );
}

export default PvTable;