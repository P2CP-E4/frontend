import React from 'react'
import CarteAcceuilGrid from '../components/CarteAcceuilGrid'
import CarouselBoxStats from '../components/CarouselBoxStats'
import NavBar from '../components/NavBar'
function Acceuil() {
    return (
        <>
            <div className='flex flex-col items-center w-screen h-screen  bg-[#F5F5F5]'>
                <NavBar />
                <h1 className=' mb-[15px] text-[28px] font-bold text-[#03C988] mt-[23px]'> Bienvenue!</h1>
                <div className='flex gap-[70px] mb-[40px]'>
                    <CarouselBoxStats title="Total" number={95} pourcentage={10} />
                    <CarouselBoxStats title="Nouveaux inscrits" number={7} pourcentage={-2} />
                    <CarouselBoxStats title="Femmes" number={50} pourcentage={8} />
                    <CarouselBoxStats title="Hommes" number={45} pourcentage={-8} />
                </div>
                <span className='mr-[720px] mb-[20px] font-semibold'> Veuillez choisir l’action que vous voulez faire :</span>
                <CarteAcceuilGrid />
            </div>
        </>
    )
}


export default Acceuil;