import React from 'react'
import NavBar from '../components/NavBar';
import ModificationStatusTable from '../components/ModificationStatusTable';
const ModificationStatus = () => {
    return (
        <>
            <NavBar />
            <h1 className='text-xl text-center  mb-7 mt-7 text-[#13005A]'>Modifier le status des Doctorants  :</h1>
            <div className='flex flex-col items-center w-screen'>
                <ModificationStatusTable />
            </div>
        </>
    )
}

export default ModificationStatus;