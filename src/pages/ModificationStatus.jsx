import React from 'react'
import NavBar from '../components/NavBar';
import ModificationStatusTable from '../components/ModificationStatusTable';
import SousPagesController from '../components/SousPagesController';
const ModificationStatus = () => {
    const sousPages = [
        {
            id: 1,
            title: 'Modification du Status',
            path: '/modificationStatus'
        },
        {
            id: 2,
            title: 'Changement du titre de these',
            path: '/changementThese'
        },
        {
            id: 3,
            title: 'Modification des informations personnelles des doctorants',
            path: '/modificationPersonnelInformations'
        },
    ]
    return (
        <>
            <NavBar />
            <SousPagesController sousPages={sousPages} initialPage={1} />
            <div className='flex flex-col items-center w-screen'>
                <ModificationStatusTable />
            </div>
        </>
    )
}

export default ModificationStatus;