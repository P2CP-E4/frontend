import React from 'react'
import NavBar from '../components/NavBar'
import CarteAjoutFCT from '../components/CarteAjoutFCT'
const AjoutFCT = () => {
    return (
        <>

            <div className='flex flex-col items-center justify-between w-screen h-screen pb-8'>
                <NavBar />
                <CarteAjoutFCT />
            </div>
        </>
    )
}

export default AjoutFCT