import React, { useState, useEffect, useMemo } from "react";
import { useTable, usePagination, useFilters } from "react-table";
import { usePopUp } from "../hooks/usePopUp";
import Pagination from "./Pagination";
import PopUp from "./PopUp";
import CarteInformationDoctorant from "./CarteInformationDoctorant";
import CartesInformationsDirecteur from "./CarteInformationDirecteur";
import ColumnFilter from "./ColumnFilter";
import ColumSelectFilter from "./ColumnSelectFilter";
import StatusCustomCard from "./StatusCustomCard";
import more_info_icon from "../assets/images/more_info_icon.svg";
import axios from "axios";

const DoctorantTable = () => {
  const DOCTORANT_TABLE_GET_DATA_URL =
    "http://localhost:9000/api/Doctorants/tableDoctorants";

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(DOCTORANT_TABLE_GET_DATA_URL)
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const data = useMemo(() => tableData, [tableData]);

  //* usePopUp is a custom hook made to handle the popUp events
  const [doctorantPopUpTrigger, openDoctorantPopUp, closeDoctorantPopUp] =
    usePopUp();
  const [directeurPopUpTrigger, openDirecteurPopUp, closeDirecteurPopUp] =
    usePopUp();

  const [clickedDotorantData, setClickedDoctorantData] = useState({});
  const [clickedDirecteurData, setClickedDirecteurData] = useState({});

  const columns = useMemo(
    () => [
      {
        Header: "Nom et prénom",
        accessor: "nomComplet",
        placeHolderFilter: "Nom/prenom",
        width: 200,
        className: "bg-[#F9F9F9] text-left pl-5",
        Cell: (cell) => (
          <span className="flex justify-between items-center w-[175px] p-0">
            <span className="text-sm ">{cell.value}</span>
            <img
              src={more_info_icon}
              alt="edit"
              className="w-4 h-4 cursor-pointer"
              onClick={() => {
                setClickedDoctorantData(cell.data[cell.row.id]);
                openDoctorantPopUp();
              }}
            />
          </span>
        ),
      },
      {
        Header: "Date 1ére inscription",
        accessor: "premiereInscription",
        placeHolderFilter: "Date 1ère insc",
        width: 100,
        className: "",
        Cell: ({ value }) => {
          if (!value) return "";
          let strDate = value.slice(0, 10);
          const [year, month, day] = strDate.split("-");
          return `${year}`;
        },
      },
      {
        Header: "Lien PV",
        accessor: "pv",
        placeHolderFilter: "Lien PV",
        width: 75,
        className: "text-center",
        Cell: ({ value }) => (
          <a className="text-xs text-[#03C988]" href={value.url}>
            {"PV" || value.code}
          </a>
        ),
      },
      {
        Header: "Intitulé thése",
        accessor: "intituleeThese",
        placeHolderFilter: "Intitué thése",
        width: 220,
        Cell: ({ value }) => <span className="text-xs ">{value}</span>,
        className: "text-left pl-5",
      },
      {
        Header: "Laboratoire",
        accessor: "laboratoire",
        placeHolderFilter: "Laboratoire",
        width: 80,
        className: "text-center",
        Filter: ColumSelectFilter,
      },
      {
        Header: "Directeur",
        accessor: "directeurPrincipal.nomComplet",
        placeHolderFilter: "Directeur",
        width: 175,
        className: "text-left pl-5",
        Cell: (cell) => (
          <span className="flex items-center justify-between text-center">
            <span className="text-sm">{cell.value}</span>
            {cell.value ? (
              <img
                src={more_info_icon}
                alt="edit"
                className="w-4 h-4 cursor-pointer"
                onClick={() => {
                  setClickedDirecteurData(
                    cell.data[cell.row.id]?.directeurPrincipal
                  );
                  openDirecteurPopUp();
                }}
              />
            ) : (
              "/////"
            )}
          </span>
        ),
      },
      {
        Header: "Date FCT",
        accessor: "FCT",
        placeHolderFilter: "Date FCT",
        width: 100,
        className: "text-center",
        Cell: ({ value }) => {
          if (!value) return "";
          let strDate = value.slice(0, 10);
          const [year, month, day] = strDate.split("-");
          return `${day}/${month}/${year}`;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        placeHolderFilter: "status",
        width: 150,
        className: "text-center",
        Filter: ColumSelectFilter,
        Cell: ({ value }) => <StatusCustomCard value={value} />,
      },
    ],
    []
  );

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
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 7 },
      defaultColumn: { Filter: ColumnFilter },
    },
    useFilters,
    usePagination
  );

  const { pageIndex } = state;
  return (
    <>
      {headerGroups.map((headerGroup) => (
        <div
          className="flex w-11/12 gap-1 mb-3"
          {...headerGroup.getHeaderGroupProps()}
        >
          {headerGroup.headers.map((column) =>
            column.canFilter ? (
              <React.Fragment key={column.id}>
                {column.render("Filter")}
              </React.Fragment>
            ) : null
          )}
        </div>
      ))}
      <table
        className="w-11/12 overflow-x-auto table-fixed"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="bg-[#F9F9F9] border-[#D9D9D9] border h-10 text-black text-xs font-normal"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className={`border ${column.className}`}
                  {...column.getHeaderProps({ width: column.width })}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          className="text-sm font-light text-gray-600 bg-white"
          {...getTableBodyProps()}
        >
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                className="border-b border-gray-200 hover:bg-gray-100"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <td
                    className={`px-5 py-3 whitespace-nowrap ${cell.column.className}`}
                    {...cell.getCellProps({ width: cell.column.width })}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="bg-[#F9F9F9] border border-[#D9D9D9] w-11/12 h-12 rounded-b-xl flex justify-center items-center">
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
      <PopUp
        trigger={doctorantPopUpTrigger}
        handleCloseEvent={closeDoctorantPopUp}
      >
        <CarteInformationDoctorant
          data={clickedDotorantData}
          handleCloseEvent={closeDoctorantPopUp}
        />
      </PopUp>
      <PopUp
        trigger={directeurPopUpTrigger}
        handleCloseEvent={closeDirecteurPopUp}
      >
        <CartesInformationsDirecteur
          data={clickedDirecteurData}
          handleCloseEvent={closeDirecteurPopUp}
        />
      </PopUp>
    </>
  );
};
export default DoctorantTable;
