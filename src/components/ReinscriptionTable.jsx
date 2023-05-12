import React, { useState, useEffect, useMemo } from 'react';
import { useTable, usePagination, useFilters, useRowSelect } from 'react-table';
import axios from 'axios';
import { usePopUp } from '../hooks/usePopUp';
import Pagination from './Pagination';
import PopUp from './PopUp';
import ColumnFilter from './ColumnFilter';

import StatusCustomCard from './StatusCustomCard';
import CarteAjoutPv from './CarteAjoutPv';
import CheckBox from './CheckBox';

const ReinscriptionTable = ({ status }) => {
    const pickURL = (status) => {
        if (status.toLowerCase() === 'inscrit') return 'http://localhost:9000/api/Doctorants/tableauReinscription'
        if (status.toLowerCase() === 'differe') return 'http://localhost:9000/api/Doctorants/tableauReinscriptionDiffere'
        return ''
    }

    const REINSCRIPTION_TABLE_GET_DATA_URL = pickURL(status);

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get(REINSCRIPTION_TABLE_GET_DATA_URL)
            .then((res) => {
                setTableData(res.data);
            })
            .catch(err => console.log(err))
    }, [REINSCRIPTION_TABLE_GET_DATA_URL])

    const data = useMemo(() => tableData, [tableData]);

    //* usePopUp is a custom hook made to handle the popUp events
    const columns = useMemo(() => [
        {
            Header: 'Nom et prénom',
            accessor: 'nomComplet',
            placeHolderFilter: 'Nom/prenom',
            width: 175,
            className: "bg-[#F9F9F9] text-left pl-5",
            Cell: ({ value }) => <span className='text-xs'>{value}</span>,
        },
        {
            Header: 'Date 1ére inscription',
            accessor: 'premiereInscription',
            placeHolderFilter: 'Date 1ère insc',
            width: 100,
            className: "text-center",
            Cell: ({ value }) => {
                if (!value) return '';
                let strDate = value.slice(0, 10);
                const [year, month, day] = strDate.split('-')
                return `${day}/${month}/${year}`;
            }
        },
        {
            Header: 'Directeur',
            accessor: 'directeurPrincipal',
            placeHolderFilter: 'Directeur',
            width: 150,
            className: "text-center",
            Cell: ({ value }) => <span className='text-xs '>{value}</span>,
        },
        {
            Header: 'Code PV',
            accessor: 'pv',
            placeHolderFilter: 'Code PV',
            width: 100,
            className: "text-center",
            Cell: ({ value }) => <a className='text-xs text-[#03C988]' href={value?.url} >{value?.code}</a>,
        },
        {
            Header: 'Status',
            placeHolderFilter: 'status',
            Filter: '',
            width: 100,
            className: "text-center",
            Cell: () => <StatusCustomCard value={status} />
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

    const [ajoutPvTrigger, openAjoutPv, closeAjoutPv] = usePopUp();

    const handleClickEvent = () => {
        if (selectedFlatRows.length <= 0) return alert('Veuillez sélectionner au moins un doctorant');
        openAjoutPv();
    }

    const handleSubmitEvent = (values) => {
        const INSCRIPTION_POST_URL = 'http://localhost:9000/api/Doctorants/reinscription'
        const selectedDoctorants = selectedFlatRows.map((row) => row.original._id);
        const submitData = { doctorants: selectedDoctorants, pv: values };
        axios.post(INSCRIPTION_POST_URL, submitData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        console.log(selectedDoctorants);
        closeAjoutPv();
    }
    return (
        <>
            {headerGroups.map((headerGroup) => (
                <div className='flex w-3/4 gap-1 mb-3' {...headerGroup.getHeaderGroupProps()}>
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
                <button className='bg-[#03C988] w-44 text-white rounded-xl mr-3 px-3 py-1 font-semibold hover:bg-white border-2 border-[#03C988] hover:text-[#03C988]' type='button' onClick={handleClickEvent}>reinscrire</button>
            </div>
            <PopUp trigger={ajoutPvTrigger} handleCloseEvent={closeAjoutPv}><CarteAjoutPv operation='réinscription' customSubmitRequest={handleSubmitEvent} /></PopUp>
        </>
    );
}
export default ReinscriptionTable;