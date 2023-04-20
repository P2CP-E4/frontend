import React, { useMemo } from 'react';
import { useTable, usePagination, useFilters, useRowSelect } from 'react-table';
import { usePopUp } from '../hooks/usePopUp';
import Pagination from './Pagination';
import PopUp from './PopUp';
import CarteInformationDoctorant from './CarteInformationDoctorant';
import CartesInformationsDirecteur from './CarteInformationDirecteur';
import ColumnFilter from './ColumnFilter';
import ColumSelectFilter from './ColumnSelectFilter';
import StatusCustomCard from './StatusCustomCard';
import edit_icon from '../assets/images/edit_icon.svg';
import doctorant_data from '../data/doctorant_data.json';
import CheckBox from './CheckBox';


const ReinscriptionTable = () => {
    //TODO: fetch data from API
    //* usePopUp is a custom hook made to handle the popUp events
    const [doctorantPopUpTrigger, openDoctorantPopUp, closeDoctorantPopUp] = usePopUp();
    const [directeurPopUpTrigger, openDirecteurPopUp, closeDirecteurPopUp] = usePopUp();

    const data = useMemo(() => doctorant_data, []);
    const columns = useMemo(() => [
        {
            Header: 'Nom et prénom',
            accessor: 'nomPrenom',
            placeHolderFilter: 'Nom/prenom',
            width: 175,
            className: "bg-[#F9F9F9] text-left pl-5",
            Cell: ({ value }) => < span className='flex justify-between' ><span className='text-xs'>{value}</span><img src={edit_icon} alt='edit' className='w-5 h-5 cursor-pointer' onClick={openDoctorantPopUp} /></span >,
        },
        {
            Header: 'Date 1ére inscription',
            accessor: 'premiereInscription',
            placeHolderFilter: 'Date 1ère insc',
            width: 100,
            className: "text-center",

        },
        {
            Header: 'Directeur',
            accessor: 'directeurPrincipal',
            placeHolderFilter: 'Directeur',
            width: 150,
            className: "text-center",
            Cell: ({ value }) => <span className='flex items-center justify-between'><span className='text-xs '>{value}</span><img src={edit_icon} alt='edit' className='w-5 h-5 cursor-pointer' onClick={openDirecteurPopUp} /></span>,
        },
        {
            Header: 'Code PV',
            accessor: 'code_pv',
            placeHolderFilter: 'Code PV',
            width: 100,
            className: "text-center",
        },
        {
            Header: 'Status',
            accessor: 'status',
            placeHolderFilter: 'status',
            Filter: ColumSelectFilter,
            width: 100,
            className: "text-center",
            Cell: ({ value }) => <StatusCustomCard value={value} />
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
        selectedFlatRows,
    } = useTable({ columns, data, initialState: { pageSize: 6 }, defaultColumn: { Filter: ColumnFilter } }, useFilters, usePagination, useRowSelect, (hooks) => {
        hooks.visibleColumns.push((columns) => [
            {
                id: 'selection',
                Header: ({ getToggleAllRowsSelectedProps }) => <CheckBox {...getToggleAllRowsSelectedProps()} />,
                width: 40,
                className: "bg-[#F9F9F9] border-r-[#F9F9F9]",
                Cell: ({ row }) => <CheckBox {...row.getToggleRowSelectedProps()} />,
            },
            ...columns,
        ])
    });
    const { pageIndex } = state;
    const handleClickEvent = () => {
        console.log(JSON.stringify(selectedFlatRows.map((row) => row.original), null, 2));
    }

    return (
        <>
            {headerGroups.map((headerGroup) => (
                <div className='flex justify-center w-3/4 mb-3'>
                    {headerGroup.headers.map((column) => column.canFilter ? column.render("Filter") : null)}
                </div >
            ))}

            <table className="w-3/4 table-fixed" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <>
                            <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-10 rounded-t-xl text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (

                                    <th className={`border ${column.className}`} {...column.getHeaderProps({ width: column.width, })}>
                                        {column.render("Header")}
                                        {console.log(column)}
                                    </th>
                                ))}
                            </tr >
                        </>
                    ))}
                </thead >
                <tbody className='text-sm font-light text-gray-600 bg-white' {...getTableBodyProps()}>
                    {page.map((row) => {
                        console.log(row.cells);
                        prepareRow(row);
                        return (
                            <tr className='border-b border-gray-200 hover:bg-gray-100' {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    < td className={`px-5 py-3 ${cell.column.className}`} {...cell.getCellProps({ width: cell.column.width })} > {cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table >
            <div className='bg-[#F9F9F9] border border-[#D9D9D9] w-3/4 h-12 pl-24 rounded-b-xl flex justify-center items-center'>
                <Pagination
                    pageNumber={pageCount}
                    currentPageIndex={pageIndex + 1}
                    nextPage={nextPage}
                    previousPage={previousPage}
                    canNextPage={canNextPage}
                    canPreviousPage={canPreviousPage}
                    gotoPage={gotoPage}
                />
                <button className='bg-[#03C988] w-44 text-white rounded-lg mr-3 px-3 py-1 font-semibold hover:bg-white border-2 border-[#03C988] hover:text-[#03C988]' type='button' onClick={handleClickEvent}>reinscrire</button>
            </div>
            <PopUp trigger={doctorantPopUpTrigger} handleCloseEvent={closeDoctorantPopUp}><CarteInformationDoctorant handleCloseEvent={closeDoctorantPopUp} /></PopUp>
            <PopUp trigger={directeurPopUpTrigger} handleCloseEvent={closeDirecteurPopUp}><CartesInformationsDirecteur handleCloseEvent={closeDirecteurPopUp} /></PopUp>
        </>
    );
}
export default ReinscriptionTable;