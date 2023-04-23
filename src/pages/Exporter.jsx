import React from 'react'
import NavBar from '../components/NavBar'
import ExporterTable from '../components/ExporterTable'

const Exporter = () => {
    return (
        <>
            <NavBar />
            <div className='flex flex-col items-center justify-center'>
                <h1 className='my-5 text-base text-[#13005A]'>Exporter</h1>
                <ExporterTable />
            </div>
        </>
    )
}

export default Exporter