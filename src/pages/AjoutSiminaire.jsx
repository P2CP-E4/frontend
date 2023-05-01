import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import CarteAjoutSiminaire from '../components/CarteAjoutSiminaire'
const AjoutSiminaire = () => {
    return (
        <div className='flex flex-col items-center justify-between w-screen h-screen pb-8'>
            <NavBar />
            <CarteAjoutSiminaire />
        </div>
    )
}

export default AjoutSiminaire