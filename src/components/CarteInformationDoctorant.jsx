import React from 'react'
import crois from '../assets/images/crois.svg'
const CarteInformationDoctorant = (props) => {
    return (
        <div className=' bg-white w-11/12 h-fit pr-10 pl-20 pb-14 pt-8 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <div className='flex justify-between'>
                <h2 className=" text-xl font-semibold text-[#03C988] mb-4">Informations personnelles</h2>
                <img id='close-button' src={crois} alt='crois' className='ml-auto cursor-pointer w-7' />
            </div>
            <div className='grid w-full grid-cols-3 gap-5 ml-5'>
                <span className="text-[#00337C]">Nom :<span className='ml-1 font-semibold text-black'>Benmachiche</span></span>
                <span className="text-[#00337C]">Prenom :<span className='ml-1 font-semibold text-black'>Khaled</span></span>
                <span className="text-[#00337C]">Date de naissance :<span className='ml-1 font-semibold text-black'>01/04/2003</span></span>
                <span className="text-[#00337C]">Sexe :<span className='ml-1 font-semibold text-black'>Homme</span></span>
                <span className="text-[#00337C]">N° de telephone :<span className='ml-1 font-semibold text-black'>0554495499</span></span>
                <span className="text-[#00337C]">Email :<span className='ml-1 font-semibold text-black'>benmachiche60@gmail.com</span></span>
            </div>
            <h2 className="text-xl font-semibold text-[#03C988] mb-4 mt-5 gap-5">Cursus universitaire</h2>
            <div className='grid grid-cols-3 grid-rows-3 ml-5 gap-x-5'>
                <span className="text-[#00337C] col-span-3">Type du doctorant :<span className='ml-1 font-semibold text-black'>SIQ</span></span>
                <span className="text-[#00337C] col-start-2 col-span-2">Nom d'Etablissement d'origine :<span className='ml-1 font-semibold text-black'>ESI</span></span>
                <span className="text-[#00337C]">Type du diplome :<span className='ml-1 font-semibold text-black'>Master</span></span>
            </div>
            <h2 className="text-xl font-semibold text-[#03C988] mb-4 mt-5">Information de these</h2>
            <div className='grid w-full grid-cols-3 gap-5 mb-4 ml-5'>
                <span className="text-[#00337C]">Date de la Première Inscription :<span className='ml-1 font-semibold text-black'>01/01/2023</span></span>
                <span className="text-[#00337C]">Intitulé de these :<span className='ml-1 font-semibold text-black'>geopolytique</span></span>
                <span className="text-[#00337C]">Laboratoire :<span className='ml-1 font-semibold text-black'>LCSI</span></span>
                <span className="text-[#00337C]">Date enregistrement FC :<span className='ml-1 font-semibold text-black'>01/01/2023</span></span>
                <span className="text-[#00337C]">Code du Procès Verbal :<span className='ml-1 font-semibold text-black'>PV_2023</span></span>
                <span className="text-[#00337C]">Directeur :<span className='ml-1 font-semibold text-black'>Si Teyab Fatima</span></span>
            </div>
            <span className='text-[#03C988] font-semibold text-xl'>Status:    <span className='ml-1 text-base font-semibold text-black'>Abondon</span></span>
        </div>
    )
}
export default CarteInformationDoctorant;
