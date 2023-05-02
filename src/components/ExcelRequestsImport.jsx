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

                for (let i = 0; i < newRows.length; i++) {
                    for (let j = 0; j < newRows[i].length; j++) {
                        // if (typeof newRows[i][j==='number'])
                        if (newRows[i][j] && typeof newRows[i][j] === 'number' && newRows[i][j].toString().length >= 4) {
                            newRows[i][j] = ExcelDateToJSDate(newRows[i][j]).toISOString().slice(0, 10)
                            console.log(newRows[i][j])
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
        <div className={styles.excel_import_container} >
            <div className="flex gap-[30px] ml-[250px]"> <div className={styles.file_upload}>
                <label className=" pl-[15px] text-[#13005A]">Importer un fichier</label>
                <input type="file" onChange={uploadFile} accept=".xlsx" className=" appearance-none outline-none text-[#838383] " />
                <button className=" mb-[1px]">+</button>
            </div>
                <button className=" flex justify-center items-center w-[120px] h-[40px] bg-[#03C988] rounded-[20px] text-center mt-[16px] mr-[50px]"> <span className="text-white text-[18px]"> Confirmer</span>
                </button>
            </div>
            <div className={styles.excel_table_wrapper}>
                <span className="ml-6 font-semibold text-[#13005A]"> Voici le fichier a importer:</span>
                <OutTable data={rows} columns={cols} tableClassName={styles.excel_table} />
            </div>
        </div >
    );
};

export default ExcelRequestsImport;