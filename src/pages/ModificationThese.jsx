import React from 'react'
import NavBar from '../components/NavBar'
import ModificationTheseTable from '../components/ModificationTheseTable'

const ModificationThese = () => {
    return (
        <>
            <NavBar />
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <h1 className='text-[#13005A] text-xl my-8'>Changement de these d'un Doctorants</h1>
                <ModificationTheseTable />
            </div>
        </>
    )
}

export default ModificationThese