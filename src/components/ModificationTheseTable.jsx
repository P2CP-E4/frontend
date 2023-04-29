import React, { useMemo } from 'react';
import { useTable, usePagination, useFilters, useRowSelect } from 'react-table';
import Pagination from './Pagination';
import ColumnFilter from './ColumnFilter';
import ColumSelectFilter from './ColumnSelectFilter';
import doctorant_data from '../data/doctorant_data.json';
import CheckBox from './CheckBox';
import Radio from './Radio';
import { usePopUp } from '../hooks/usePopUp';
import PopUp from './PopUp';
import CarteModificationThese from './CarteModificationThese';
const ModificationTheseTable = () => {
    //TODO: fetch data from API
    const data = useMemo(() => doctorant_data, []);
    const columns = useMemo(() => [
        {
            Header: 'Nom et prénom',
            accessor: 'nomPrenom',
            placeHolderFilter: 'Nom/prenom',
            width: 175,
            className: "bg-[#F9F9F9] text-left pl-5",
        },
        {
            Header: 'Intitulé thése',
            accessor: 'intituleeThese',
            placeHolderFilter: 'Intitué thése',
            width: 220,
            Cell: ({ value }) => <span className='text-xs '>{value}</span>,
            className: "text-left pl-5",
        },
        {
            Header: 'Laboratoire',
            accessor: 'laboratoire',
            placeHolderFilter: 'Laboratoire',
            width: 80,
            className: "text-center",
            Filter: ColumSelectFilter,
        },
        {
            Header: 'Directeur',
            accessor: 'directeurPrincipal',
            placeHolderFilter: 'Directeur',
            width: 175,
            className: "text-left pl-5",
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
    } = useTable({
        columns, data, initialState: { pageSize: 6 }, defaultColumn: { Filter: ColumnFilter }, selectedRowIds: { 1: true }, autoResetSelectedRows: false,
    }, useFilters, usePagination, useRowSelect, (hooks) => {
        hooks.visibleColumns.push((columns) => [
            {
                id: 'selection',
                width: 40,
                className: "bg-[#F9F9F9] border-r-[#F9F9F9]",
                Cell: ({ row, toggleAllRowsSelected, toggleRowSelected }) => {
                    const currentState = row.getToggleRowSelectedProps();
                    return (
                        <Radio
                            {...currentState}
                            onClick={() => {
                                toggleAllRowsSelected(false);
                                toggleRowSelected(row.id, !currentState.checked);
                            }} />)
                },
            },
            ...columns
        ]);
    })
    const { pageIndex } = state;
    const [showCarteChangementThese, openCarteChangementThese, closeCarteChangementThese] = usePopUp();
    const handleClickEvent = () => {
        if (selectedFlatRows.length === 1) openCarteChangementThese();
        console.log(JSON.stringify(selectedFlatRows.map((row) => row.original), null, 2));
    }

    return (
        <>
            {headerGroups.map((headerGroup) => (
                <div className='flex w-3/4 gap-8 mb-3' {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => column.canFilter ? <React.Fragment key={column.id}>{column.render("Filter")}</React.Fragment> : null)}
                </div >
            ))}

            <table className="w-3/4 table-fixed" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-10 rounded-t-xl text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th className={`border ${column.className}`} {...column.getHeaderProps({ width: column.width, })}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr >
                    ))}
                </thead >
                <tbody className='text-sm font-light text-gray-600 bg-white' {...getTableBodyProps()}>
                    {page.map((row) => {
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
                <button className='bg-[#03C988] w-44 text-white rounded-xl mr-3 px-3 py-1 font-semibold hover:bg-white border-2 border-[#03C988] hover:text-[#03C988]' type='button' onClick={handleClickEvent}>Modifier</button>
            </div>
            <PopUp trigger={showCarteChangementThese} handleCloseEvent={closeCarteChangementThese}><CarteModificationThese /> </PopUp>
        </>
    );
}
export default ModificationTheseTable;