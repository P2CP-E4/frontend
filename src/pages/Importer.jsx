import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ExcelRequestsImport from "../components/ExcelRequestsImport";
import SousPagesController from '../components/SousPagesController';
const Importer = () => {
    const [data, setData] = useState([]);
    const sousPages = [
        {
            id: 1,
            title: 'Importer',
            path: '/importer'
        },
        {
            id: 2,
            title: 'Exporter',
            path: '/exporter'
        },
    ]
    return (
        <>
            <NavBar />
            <SousPagesController sousPages={sousPages} initialPage={1} />
            <ExcelRequestsImport uploadHandler={setData} />
        </>
    )
}
export default Importer