import React from 'react'
import NavBar from '../components/NavBar'
import ExporterTable from '../components/ExporterTable'
import SousPagesController from '../components/SousPagesController'

const Exporter = () => {
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
            <div className='flex flex-col items-center justify-center'>
                <SousPagesController sousPages={sousPages} initialPage={2} />
                <ExporterTable />
            </div>
        </>
    )
}

export default Exporter