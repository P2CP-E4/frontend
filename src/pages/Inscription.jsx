import React from 'react'
import FormulaireInscription from '../components/FormulaireInscription'
import NavBar from '../components/NavBar'
const Inscription = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-between w-screen h-screen pb-8'>
                <NavBar />
                {/* <h1 className='mt-2 mb-1 text-3xl text-[#13005A] font-medium'>Inscription du doctorant</h1> */}
                <FormulaireInscription />
            </div>
        </>
    )
}

export default Inscription;
