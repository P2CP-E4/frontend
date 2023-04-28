import React from 'react'
import crois from '../assets/images/crois.svg'
import successIcon from '../assets/images/success_icon.svg'

const CarteSuccess = ({ handleCloseEvent }) => {
    return (
        <div className=' bg-[#E3F7F1] w-[500px] h-72 px-10 pb-14 pt-8 pb_10 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <img id='close-button' src={crois} alt='crois' className='w-4 mb-10 ml-auto -mt-3 -mr-5 cursor-pointer' onClick={handleCloseEvent} />
            <img src={successIcon} alt="success" className='mb-3 -mt-10 pt-0 mx-auto h-[60px] ' />
            <div className="pb-4 text-center font-bold text-[23px] ">Inscription réussie </div>
            <div className="text-center ">L'inscription du doctorant a été effectuée avec succès. les informations ont été enregistrées.</div>
        </div>
    );
}
export default CarteSuccess;