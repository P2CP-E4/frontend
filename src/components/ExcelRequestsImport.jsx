import React, { useState } from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
import styles from "../styles/Importer.module.css"

const ExcelRequestsImport = ({ uploadHandler }) => {

    function ExcelDateToJSDate(date) {
        return new Date(Math.round((date - 25569) * 86400 * 1000));
    }

    const [cols, setCols] = useState([]);
    const [rows, setRows] = useState([]);

    const uploadFile = (event) => {
        let fileObj = event.target.files[0];
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                const { cols, rows } = resp;
                let newRows = rows.filter(row => row.length);

                for (const row of newRows) {
                    for (let j = 0; j < row.length; j++) {
                        if (row[j] && typeof row[j] === 'number' && row[j].toString().length >= 4) {
                            row[j] = ExcelDateToJSDate(row[j]).toISOString().slice(0, 10)
                            console.log(row[j])
                        }
                    }
                }
                setCols(cols);
                setRows(newRows.slice(1));
                uploadHandler(rows.slice(1));
            }
        });
    };

    return (
        <div className={styles.excel_import_container}>
            <div className={styles.file_upload}>
                <label>Upload File</label>
                <input type="file" onChange={uploadFile} accept=".xlsx" />
                <button>+</button>
            </div>
            <div className={styles.excel_table_wrapper}>
                <OutTable data={rows} columns={cols} tableClassName={styles.excel_table} />
            </div>
        </div >
    );
};

export default ExcelRequestsImport;
