import React from 'react'
import crois from '../assets/images/crois.svg'

const CartesInformationsDirecteur = ({ handleCloseEvent }) => {
    return (
        <div className=' bg-white w-7/12 h-fit pr-0 pl-10 pb-14 pt-8 pb_10 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <div className='flex justify-between'>
                <h2 className=" text-xl font-semibold text-[#03C988] mb-8">Informations personnelles du Directeur</h2>
                <img id='close-button' src={crois} alt='crois' className='w-5 ml-auto mr-6 mb-10 cursor-pointer' onClick={handleCloseEvent} />
            </div>
            <div className='grid w-full grid-cols-2 gap-10 ml-10'>
                <span className="text-[#00337C] font-medium ">Nom :<span className='ml-1 font-semibold text-black'>Benmachiche</span></span>
                <span className="text-[#00337C] font-medium -ml-10">Prenom :<span className='ml-1 font-semibold text-black'>Khaled</span></span>
                <span className="text-[#00337C] font-medium ">N° de telephone :<span className='ml-1 font-semibold text-black'>0554495499</span></span>
                <span className="text-[#00337C] font-medium -ml-10">L’email : <span className='ml-1 font-semibold text-black'>benmachiche60@gmail.com</span></span>
                <span className="text-[#00337C] font-medium ">Le Grade : <span className='ml-1 font-semibold text-black'>Directeur</span></span>
                <span className="text-[#00337C] font-medium -ml-10">L'établissement : <span className='ml-1 font-semibold text-black'>ESi</span></span>
            </div>
        </div>
    );
}
export default CartesInformationsDirecteur;