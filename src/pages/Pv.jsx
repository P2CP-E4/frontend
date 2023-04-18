import React from 'react'
import NavBar from '../components/NavBar'
import PvTable from '../components/PvTable'
function Pv() {
    return (
        <>
            <NavBar />
            <div className='flex flex-col items-center justify-center'>
                <h1 className='my-5 text-base text-[#13005A]'>Tableau des Procès Verbal</h1>
                <PvTable />
            </div>
        </>
    )
}

export default Pv