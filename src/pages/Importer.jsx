import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ExcelRequestsImport from "../components/ExcelRequestsImport";
const Importer = () => {
    const [data, setData] = useState([]);

    const createRequests = () => {
        console.log(data);
    };

    return (
        <>
            <NavBar />
            <ExcelRequestsImport uploadHandler={setData} />
        </>
    )
}
export default Importer