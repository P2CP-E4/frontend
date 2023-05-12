import React from 'react'
import NavBar from '../components/NavBar'
import ReinscriptionTable from '../components/ReinscriptionTable'
import SousPagesController from '../components/SousPagesController'
const ReinscriptionDiffere = () => {
    const sousPages = [
        {
            id: 1,
            title: 'Inscription',
            path: '/inscription'
        },
        {
            id: 2,
            title: 'Réinscription',
            path: '/reinscription'
        },
        {
            id: 3,
            title: 'Réinscription Differé',
            path: '/reinscriptionDiffere'
        }
    ]
    return (
        <main className='h-screen '>
            <NavBar />
            <SousPagesController sousPages={sousPages} initialPage={3} />
            <div className='flex flex-col items-center w-screen'>
                <ReinscriptionTable status='differe' />
            </div>
        </main>
    )
}

export default ReinscriptionDiffere