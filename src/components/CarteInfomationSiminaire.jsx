import React from 'react'
import crois from '../assets/images/crois.svg'
const CarteInformationSiminaire = ({ data, handleCloseEvent }) => {
    return (
        <div
            className=' bg-white w-3/5 h-fit pr-10 pl-20 pb-14 pt-8 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
            onClick={e => e.stopPropagation()}
        >
            <div className='flex justify-between items-center'>
                <h2 className=" text-xl font-semibold text-[#03C988] mb-4">Informations du siminaire “{data.titre}“</h2>
                <img src={crois} alt='crois' onClick={handleCloseEvent} className='cursor-pointer w-6' />
            </div>
            <div className='flex gap-5 justify-between'>
                <span className="text-[#00337C] ">Titre :<span className='ml-1 font-semibold text-black'>{data.titre}</span></span>
                <span className="text-[#00337C] mr-12">Animateur :<span className='ml-1 font-semibold text-black'>{data.animateur}</span></span>
            </div>
            <span className="text-[#00337C]">Résumé :<p className='ml-1 font-semibold text-black'>{data.resume}</p></span>
        </div>
    )
}
export default CarteInformationSiminaire;