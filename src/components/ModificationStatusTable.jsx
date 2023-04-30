import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useFilters, usePagination, useRowSelect } from 'react-table';
import Pagination from './Pagination';
import ColumnFilter from './ColumnFilter';
import ColumSelectFilter from './ColumnSelectFilter';
import StatusCustomCard from './StatusCustomCard';
import ModificationStatusCheckBox from './ModificationStatusCheckBox';
import CheckBox from './CheckBox';
import CarteWarning from './CarteWarning';
import doctorant_data from '../data/doctorant_data.json';
import { usePopUp } from '../hooks/usePopUp';
import PopUp from './PopUp';
const ModificationStatusTable = () => {
    //TODO: fetch data from API

    const [showModificationStatusCheckBox, setShowModificationStatusCheckBox] = useState(false);

    const handleClickCheckBoxEvent = (e) => {
        if (!showModificationStatusCheckBox) {
            setShowModificationStatusCheckBox(!showModificationStatusCheckBox);
        }
    }

    const data = useMemo(() => doctorant_data, []);
    const columns = useMemo(() => [
        {
            Header: 'Nom et prénom',
            accessor: 'nomPrenom',
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
            accessor: 'code_pv',
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

    const [showWarning, openWaning, closeWarning] = usePopUp()

    const handleClickSubmitButtonEvent = (e) => {
        if (!selectedStatus) return openWaning();
        if (selectedFlatRows.length === 0) return openWaning();
        if (selectedStatus.toLowerCase() === 'radie' && e.target.value.toLowerCase() === 'inscrit') return openWaning();
        console.log(JSON.stringify(selectedFlatRows.map((row) => row.original), null, 2));
    }
    return (
        <>
            {headerGroups.map((headerGroup) => (
                <div className='flex justify-between w-2/3 gap-2 mb-3' {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => column.canFilter ? <React.Fragment key={column.id}>{column.render("Filter")}</React.Fragment> : null)}
                </div >
            ))}
            <div className='relative w-2/3 h-fit'>
                <table className="table-fixed" {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr className='bg-[#F9F9F9] border-[#D9D9D9] border h-10 rounded-t-xl text-black text-xs font-normal' {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    < th className='text-left pl-4 border'{...column.getHeaderProps({ width: column.width, })} >
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
                                        <td className='px-5 py-3 whitespace-nowrap text-left' {...cell.getCellProps({ width: cell.column.width, })}>{cell.render('Cell')}</td>
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
        </>
    );
}
export default ModificationStatusTable