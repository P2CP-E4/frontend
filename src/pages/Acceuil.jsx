import React from 'react'
import CarteAcceuilGrid from '../components/CarteAcceuilGrid'
import NavBar from '../components/NavBar'
function Acceuil() {
    return (
        <>
            <div className='flex flex-col items-center w-screen h-screen text-center'>
                <NavBar />
                <h1 className=' mb-[15px] text-[28px] text-[#13005A] mt-[23px]'> Bienvenue!</h1>
                <CarteAcceuilGrid />
            </div>
        </>
    )
}


export default Acceuil;