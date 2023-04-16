import React from 'react'
import DoctorantTable from '../components/DoctorantsTable'
function Doctorant() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className=' text-base my-5'>Tableau des Doctorants</h1>
            <DoctorantTable />
        </div>
    )
}

export default Doctorant;