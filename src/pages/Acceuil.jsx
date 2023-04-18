import React from 'react'
import CarteAcceuilGrid from '../components/CarteAcceuilGrid'
import NavBar from '../components/NavBar'
function Acceuil() {
    return (
        <>
            <div className='flex flex-col items-center w-screen h-screen text-center'>
                <NavBar />
                <h1 className=' mb-8 text-4xl text-[#13005A] mt-8'> Bienvenue!</h1>
                <CarteAcceuilGrid />
            </div>
        </>
    )
}


export default Acceuil;