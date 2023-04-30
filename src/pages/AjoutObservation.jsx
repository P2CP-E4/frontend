import React from 'react'
import NavBar from '../components/NavBar'
import CarteAjoutObservation from '../components/CarteAjoutObservation'
const AjoutObservation = () => {
    return (
        <div className='flex flex-col items-center justify-between w-screen h-screen pb-8'>
            <NavBar />
            <CarteAjoutObservation />
        </div>
    )
}

export default AjoutObservation