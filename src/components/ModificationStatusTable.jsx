import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useFilters, usePagination, useRowSelect } from 'react-table';
import axios from 'axios';
import Pagination from './Pagination';
import ColumnFilter from './ColumnFilter';
import ColumSelectFilter from './ColumnSelectFilter';
import StatusCustomCard from './StatusCustomCard';
import ModificationStatusCheckBox from './ModificationStatusCheckBox';
import CheckBox from './CheckBox';
import CarteWarning from './CarteWarning';
import CarteSuccess from './CarteSuccess'
import { usePopUp } from '../hooks/usePopUp';
import PopUp from './PopUp';
const ModificationStatusTable = () => {
    //* fetch data from API

    const MAJ_TABLE_GET_DATA_URL = 'http://localhost:8080/api/Doctorants/tableauModifStatus';
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get(MAJ_TABLE_GET_DATA_URL)
            .then((res) => {
                setTableData(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const data = useMemo(() => tableData, [tableData]);

    const [showModificationStatusCheckBox, setShowModificationStatusCheckBox] = useState(false);
    const handleClickCheckBoxEvent = (e) => {
        if (!showModificationStatusCheckBox) {
            setShowModificationStatusCheckBox(!showModificationStatusCheckBox);
        }
    }
    const columns = useMemo(() => [
        {
            Header: 'Nom et prénom',
            accessor: 'nomComplet',
            placeHolderFilter: 'Nom/prenom',
            width: 210,
            Filter: ColumnFilter,
        },
        {
            Header: 'Date 1ére inscription',
            accessor: 'premiereInscription',
            placeHolderFilter: 'Date 1ère insc',
            width: 180,
            Filter: ColumnFilter,
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
            width: 185,
            Filter: ColumnFilter,
        },
        {
            Header: 'Lien PV',
            accessor: 'LienPV',
            width: 80,
            placeHolderFilter: 'Code PV',
        },
        {
            Header: 'Status',
            accessor: 'status',
            placeHolderFilter: 'status',
            Filter: ColumSelectFilter,
            width: 160,
            Cell: ({ value }) => <StatusCustomCard value={value} />
        }
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
            ...columns,
            {
                id: 'selection',
                width: 40,
                Cell: ({ row }) => <CheckBox onClick={handleClickCheckBoxEvent} {...row.getToggleRowSelectedProps()} />,
            },
        ])
    });
    const [selectedStatus, setSelectedStatus] = useState('');
    const { setFilter } = headerGroups[0].headers[4];

    useEffect(() => {
        if (showModificationStatusCheckBox && selectedFlatRows.length === 0) {
            setShowModificationStatusCheckBox(prevState => !prevState);
            setFilter([]);
            setSelectedStatus('')
        } else if (selectedFlatRows.length === 1) {
            setSelectedStatus(selectedFlatRows[0]?.original.status);
        }
    }, [selectedFlatRows]);


    useEffect(() => {
        if (selectedFlatRows.length !== 0 && selectedStatus !== '') {
            setFilter(selectedStatus);
        }
    }, [selectedStatus]);

    const { pageIndex } = state;

    const [showWarning, openWaning, closeWarning] = usePopUp();
    const [showSuccess, openSuccess, closeSuccess] = usePopUp();
    const submissionState = (changedStatus) => {
        // return false warning , returns true Okay
        if (selectedStatus.toLowerCase() === 'inscrit') return true;
        if (selectedStatus.toLowerCase() === 'differe' && changedStatus.toLowerCase() === 'radie') return true;
        return false;
    }

    const handleClickSubmitButtonEvent = (e) => {
        if (!selectedStatus) return openWaning();
        if (selectedFlatRows.length === 0) return openWaning();
        console.log(submissionState(e.target.value))
        if (!submissionState(e.target.value)) return openWaning();
        openSuccess();
        console.log(JSON.stringify(selectedFlatRows.map((row) => row.original), null, 2));
    }
    return (
        <>
            {headerGroups.map((headerGroup) => (
                <div className='flex justify-between w-2/3 gap-2 mb-3' {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => column.canFilter ? <React.Fragment key={column.id}>{column.render("Filter")}</React.Fragment> : null)}
                </div >
            ))}
            <div className='relative w-2/3 h-0 bg-black'>
                <table className="table-fixed" {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-10 rounded-t-xl text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    < th className='pl-4 text-left border'{...column.getHeaderProps({ width: column.width, })} >
                                        {column.render("Header")}
                                    </th>
                                )
                                )}
                            </tr >
                        ))}
                    </thead >
                    <tbody className='text-sm font-light text-gray-600 bg-white' {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr className='border-b border-gray-200 hover:bg-gray-100' {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td className='px-5 py-3 text-left whitespace-nowrap' {...cell.getCellProps({ width: cell.column.width, })}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table >
                <div className='bg-[#F9F9F9] border border-[#D9D9D9] h-12 rounded-b-xl flex justify-between items-center mb-12'>
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
                <ModificationStatusCheckBox visibility={showModificationStatusCheckBox} onClick={handleClickSubmitButtonEvent} defaultValue={selectedStatus} className='absolute top-10 -right-44' />
            </div >
            <PopUp trigger={showWarning} handleCloseEvent={closeWarning}><CarteWarning onClick={closeWarning} /></PopUp>
            <PopUp trigger={showSuccess} handleCloseEvent={closeSuccess}><CarteSuccess onClick={closeSuccess} /></PopUp>
        </>
    );
}
export default ModificationStatusTable