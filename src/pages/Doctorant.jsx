import React from 'react'
import DoctorantTable from '../components/DoctorantsTable';
import NavBar from '../components/NavBar';
import SousPagesController from '../components/SousPagesController';
function Doctorant() {
    const sousPages = [
        {
            id: 1,
            title: 'Statistique prédefinie',
            path: '/statistiquePredefinie'
        },
        {
            id: 2,
            title: 'Statistique personnalisée',
            path: '/statistiquePersonnalisee'
        },
        {
            id: 3,
            title: 'Tableau des doctorants',
            path: '/doctorant'
        },
        {
            id: 4,
            title: 'Tableau des PVs',
            path: '/pv'
        },
    ]

    return (
        <>
            <NavBar />
            <div className='flex flex-col items-center justify-center'>
                <SousPagesController sousPages={sousPages} initialPage={3} />
                <DoctorantTable />
            </div>
        </>
    )
}

export default Doctorant;