import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useTable, useFilters, usePagination, useRowSelect } from 'react-table'
import { usePopUp } from '../hooks/usePopUp'
import Pagination from './Pagination'
import PopUp from './PopUp'
import CarteInformationDoctorant from './CarteInformationDoctorant'
import CartesInformationsDirecteur from './CarteInformationDirecteur'
import ColumnFilter from './ColumnFilter'
import ColumSelectFilter from './ColumnSelectFilter'
import StatusCustomCard from './StatusCustomCard'
import ExporterCheckBoxes from './ExporterCheckBoxes';
import CheckBox from './CheckBox';
import fileDownload from 'js-file-download';
import more_info_icon from '../assets/images/more_info_icon.svg'

const ExporterTable = () => {
    //* fetch data from API
    const DOCTORANT_TABLE_GET_DATA_URL = 'http://localhost:9000/api/Doctorants/tableauExporter';
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get(DOCTORANT_TABLE_GET_DATA_URL)
            .then((res) => {
                setTableData(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const [clickedDotorantData, setClickedDoctorantData] = useState({});
    const [clickedDirecteurData, setClickedDirecteurData] = useState({});
    console.log(tableData)
    const data = useMemo(() => tableData, [tableData]);

    const columns = useMemo(() => [
        {
            Header: 'Nom et prénom',
            accessor: 'nomComplet',
            placeHolderFilter: 'Nom/prenom',
            width: 200,
            className: "bg-[#F9F9F9] text-left pl-5",
            Cell: (cell) =>
                <span className='flex justify-between items-center w-[175px] p-0' >
                    <span className='text-sm '>{cell.value}</span>
                    <img src={more_info_icon} alt='edit' className='w-4 h-4 cursor-pointer' onClick={() => {
                        setClickedDoctorantData(cell.data[cell.row.id]);
                        openDoctorantPopUp();
                    }} />
                </span >
        },
        {
            Header: 'Date 1ére inscription',
            accessor: 'premiereInscription',
            placeHolderFilter: 'Date 1ère insc',
            width: 100,
            className: "",
            Cell: ({ value }) => {
                if (!value) return '';
                let strDate = value.slice(0, 10);
                const [year, month, day] = strDate.split('-')
                return `${day}/${month}/${year}`;
            }
        },
        {
            Header: 'Lien PV',
            accessor: 'pv',
            placeHolderFilter: 'Lien PV',
            width: 75,
            className: "text-center",
            Cell: ({ value }) => <a className='text-xs text-[#03C988]' href={value?.url} >{value?.code}</a>,
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
            accessor: 'directeurPrincipal.nomComplet',
            placeHolderFilter: 'Directeur',
            width: 175,
            className: "text-left pl-5",
            Cell: (cell) =>
                <span className='flex items-center justify-between'>
                    <span className='text-sm'>{cell.value}</span>
                    <img src={more_info_icon} alt='edit' className='w-4 h-4 cursor-pointer' onClick={() => {
                        setClickedDirecteurData(cell.data[cell.row.id].directeurPrincipal);
                        openDirecteurPopUp();
                    }} />
                </span>,
        },
        {
            Header: 'Date FCT',
            accessor: 'FCT',
            placeHolderFilter: 'Date FCT',
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
            Header: 'Status',
            accessor: 'status',
            placeHolderFilter: 'status',
            width: 150,
            className: "text-center",
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
        selectedFlatRows,
    } = useTable({ columns, data, initialState: { pageSize: 7 }, defaultColumn: { Filter: ColumnFilter } }, useFilters, usePagination, useRowSelect, (hooks) => {
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

    //* usePopUp is a custom hook made to handle the popUp events
    const [doctorantPopUpTrigger, openDoctorantPopUp, closeDoctorantPopUp] = usePopUp();
    const [directeurPopUpTrigger, openDirecteurPopUp, closeDirecteurPopUp] = usePopUp();
    //*submit-Logique
    const [checkboxStates, setCheckboxState] = useState([]);
    const retrieveCheckBoxesValue = (currentState) => {
        setCheckboxState(currentState);
    }
    const makeGetRequest = (data) => {
        const EXPORTER_XLS_URL = 'http://localhost:9000/api/Doctorants/exporter'
        axios.post(EXPORTER_XLS_URL, data, { responseType: 'blob' })
            .then(res => {
                fileDownload(res.data, 'doctorant.xlsx')
            })
            .catch(err => console.log(err))
    }
    const handleSubmitEvent = () => {
        const selectedDoctorants = selectedFlatRows.map(row => row.original._id);
        const submitCheckBoxes = {}
        checkboxStates.forEach(item => {
            submitCheckBoxes[item.name] = item.isChecked;
        })
        if (selectedDoctorants.length === 0 || Object.keys(submitCheckBoxes).length === 0) return alert('Veuillez selectionner les champs a exporter');
        const submitData = {
            doctorantsids: selectedDoctorants,
            ...submitCheckBoxes,
        }
        makeGetRequest(submitData);
    }
    return (
        <>
            <h2 className='pb-2'>Veuillez selectionner les champs a exporter </h2>
            <ExporterCheckBoxes handleChangeEvent={retrieveCheckBoxesValue} />
            {headerGroups.map((headerGroup) => (
                <div className='flex w-11/12 gap-1 mb-3' {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => column.canFilter ? <React.Fragment key={column.id}>{column.render("Filter")}</React.Fragment> : null)}
                </div >
            ))}

            <table className="w-11/12 table-fixed" {...getTableProps()}>
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
            <div className='bg-[#F9F9F9] border border-[#D9D9D9] w-11/12 h-12 pl-24 rounded-b-xl flex justify-center items-center'>
                <Pagination
                    pageNumber={pageCount}
                    currentPageIndex={pageIndex + 1}
                    nextPage={nextPage}
                    previousPage={previousPage}
                    canNextPage={canNextPage}
                    canPreviousPage={canPreviousPage}
                    gotoPage={gotoPage}
                />
                <button className='bg-[#03C988] w-44 text-white rounded-xl mr-3 px-3 py-1 font-semibold hover:bg-white border-2 border-[#03C988] hover:text-[#03C988]' type='button' onClick={handleSubmitEvent}>Exporter</button>
            </div>
            <PopUp trigger={doctorantPopUpTrigger} handleCloseEvent={closeDoctorantPopUp}><CarteInformationDoctorant handleCloseEvent={closeDoctorantPopUp} data={clickedDotorantData} /></PopUp>
            <PopUp trigger={directeurPopUpTrigger} handleCloseEvent={closeDirecteurPopUp}><CartesInformationsDirecteur handleCloseEvent={closeDirecteurPopUp} data={clickedDirecteurData} /></PopUp>
        </>
    );
}

export default ExporterTable