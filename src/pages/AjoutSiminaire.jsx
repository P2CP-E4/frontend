import React from 'react'
import NavBar from '../components/NavBar'
import CarteAjoutSiminaire from '../components/CarteAjoutSiminaire'
import SousPagesController from '../components/SousPagesController'

const AjoutSiminaire = () => {
    const sousPages = [
        {
            id: 1,
            title: "Ajout d'un Séminaire",
            path: '/ajoutSeminaire',
        },
        {
            id: 2,
            title: "Ajout d'une Observation",
            path: '/ajoutObservation',
        },
        {
            id: 3,
            title: "Ajout de FCT",
            path: '/ajoutFCT',
        }
    ]
    return (
        <div className='flex flex-col items-center justify-between w-screen h-screen pb-8'>
            <NavBar />
            <SousPagesController sousPages={sousPages} initialPage={1} />
            <CarteAjoutSiminaire />
        </div>
    )
}

export default AjoutSiminaire