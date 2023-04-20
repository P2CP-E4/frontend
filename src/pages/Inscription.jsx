import React from 'react'
import FormulaireInscription from '../components/FormulaireInscription'
import NavBar from '../components/NavBar'
const Inscription = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-between w-screen h-screen pb-8'>
                <NavBar />
                <FormulaireInscription />
            </div>
        </>
    )
}

export default Inscription;
