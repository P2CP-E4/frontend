import React, { useMemo } from 'react';
import { useTable, usePagination, useFilters, useGlobalFilter } from 'react-table';
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


const DoctorantTable = () => {
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
            Cell: ({ value }) => < span className='flex justify-between' ><span className='text-xs'>{value}</span><img src={edit_icon} alt='edit' className='w-5 h-5 cursor-pointer' onClick={openDoctorantPopUp} /></span >,
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
            Cell: ({ value }) => <span className='flex items-center justify-between'><span className='text-xs '>{value}</span><img src={edit_icon} alt='edit' className='w-5 h-5 cursor-pointer' onClick={openDirecteurPopUp} /></span>,
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
    } = useTable({ columns, data, initialState: { pageSize: 7 }, defaultColumn: { Filter: ColumnFilter } }, useFilters, useGlobalFilter, usePagination);
    const { pageIndex } = state;
    return (
        <>
            {headerGroups.map((headerGroup) => (
                <div className='flex mb-3'>
                    {headerGroup.headers.map((column) => column.canFilter ? column.render("Filter") : null)}
                </div >
            ))}

            <table className="w-11/12 table-auto" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <>
                            <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-10 rounded-t-xl text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (

                                    <th className='pl-5 text-left border '{...column.getHeaderProps()}>
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
                                    <td className='px-5 py-3 text-left whitespace-nowrap' {...cell.getCellProps}>{cell.render('Cell')}</td>
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
            <PopUp trigger={doctorantPopUpTrigger} handleCloseEvent={closeDoctorantPopUp}><CarteInformationDoctorant handleCloseEvent={closeDoctorantPopUp} /></PopUp>
            <PopUp trigger={directeurPopUpTrigger} handleCloseEvent={closeDirecteurPopUp}><CartesInformationsDirecteur handleCloseEvent={closeDirecteurPopUp} /></PopUp>
        </>
    );
}
export default DoctorantTable;