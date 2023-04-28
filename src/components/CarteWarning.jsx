import React from 'react'
import crois from '../assets/images/crois.svg'
import warnningIcon from '../assets/images/warning_icon.svg'

const CarteWarning = ({ handleCloseEvent }) => {
    return (
        <div className=' bg-[#FCF6D2] w-[500px] h-72 pr-10 pl-10 pb-14 pt-8 pb_10 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <div >
                <img id='close-button' src={crois} alt='crois' className='w-4 mb-10 ml-auto -mt-3 -mr-5 cursor-pointer' onClick={handleCloseEvent} />
            </div>
            <div >
                <img src={warnningIcon} alt="warnning" className='mb-3 -mt-10 pt-0 mx-auto h-[60px] ' />
            </div>
            <div className=''>
                <div className="pb-4 text-center font-bold text-[23px] ">Attention!</div>
                <div className="text-center ">Etes vous sur d’effectuer le changement suivant:</div>
            </div>
        </div>
    );
}
export default CarteWarning;