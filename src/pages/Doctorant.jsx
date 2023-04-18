import React from 'react'
import DoctorantTable from '../components/DoctorantsTable';
import NavBar from '../components/NavBar';
function Doctorant() {
    return (
        <>
            <NavBar />
            <div className='flex flex-col items-center justify-center'>
                <h1 className='my-5 text-base text-[#13005A]'>Tableau des Doctorants</h1>
                <DoctorantTable />
            </div>
        </>
    )
}

export default Doctorant;