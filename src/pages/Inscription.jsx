import React from 'react'
import FormulaireInscription from '../components/FormulaireInscription'
import SousPagesController from '../components/SousPagesController'
import NavBar from '../components/NavBar'

const Inscription = () => {
    const sousPages = [
        {
            id: 1,
            title: 'Inscription',
            path: '/inscription',
        },
        {
            id: 2,
            title: 'Réinscription',
            path: '/reinscription',
        },
        {
            id: 3,
            title: 'Réinscription Differé',
            path: '/reinscriptionDiffere',
        }
    ]
    return (
        <>
            <div className='flex flex-col items-center justify-between w-screen h-screen pb-8'>
                <NavBar />
                <SousPagesController sousPages={sousPages} initialPage={1} />
                <FormulaireInscription />
            </div>
        </>
    )
}

export default Inscription;
