import React, { useState } from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
import { usePopUp } from '../hooks/usePopUp'
import PopUp from '../components/PopUp'
import styles from "../styles/Importer.module.css"
import arrow from '../assets/images/success_icon.svg'
import axios from "axios";

const ExcelRequestsImport = ({ uploadHandler }) => {
    const [file, setFile] = useState(false);
    const [triggerPopUp, openPopUp, closePopUp] = usePopUp();
    const handleSubmit = (event) => {
        openPopUp();
        if (file) {
            const formData = new FormData();
            formData.append("excelFile", file);

            axios.post("http://localhost:9000/api/Importer", formData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    };



    function ExcelDateToJSDate(date) {
        return new Date(Math.round((date - 25569) * 86400 * 1000));
    }

    const [cols, setCols] = useState([]);
    const [rows, setRows] = useState([]);

    const handleFileChange = (e) => {
        let fileObj = e.target.files[0];
        setFile(fileObj);
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                const { cols, rows } = resp;
                let newRows = rows.filter(row => row.length);

                for (const element of newRows) {
                    for (let j = 0; j < element.length; j++) {
                        if (element[j] && typeof element[j] === 'number' && element[j].toString().length >= 4) {
                            element[j] = ExcelDateToJSDate(element[j]).toISOString().slice(0, 10)
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
                <input type="file" onChange={handleFileChange} accept=".xlsx" className=" appearance-none outline-none text-[#838383] " />
                <button className=" mb-[1px]">+</button>
            </div>
                <button
                    type="button"
                    className=" flex justify-center items-center w-[120px] h-[40px] bg-[#03C988] rounded-[20px] text-center mt-[16px] mr-[50px] text-white text-[18px]"
                    onClick={handleSubmit}
                > Confirmer
                </button>
            </div>
            <div className={styles.excel_table_wrapper}>
                <span className="ml-6 font-semibold text-[#13005A]"> Voici le fichier a importer:</span>
                <OutTable data={rows} columns={cols} tableClassName={styles.excel_table} />
            </div>
            <ImportPopUp trigger={triggerPopUp} handleCloseEvent={closePopUp} />
        </div >
    );
};

export default ExcelRequestsImport;

const ImportPopUp = ({ trigger, handleCloseEvent }) => {
    return (
        <PopUp trigger={trigger} handleCloseEvent={handleCloseEvent} >
            <div className=' bg-[rgb(227,247,241)] w-[500px] h-72 flex items-center flex-col justify-between px-10 pb-14 pt-8 pb_10 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                <div className="pb-4 text-center font-bold text-[23px] ">Inscription des doctorants avec success</div>
                <img src={arrow} alt="arrow" className="w-28 " />
            </div>
        </PopUp>
    );
}