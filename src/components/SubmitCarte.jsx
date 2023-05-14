import React from 'react'
import success_icon from '../assets/images/success_icon.svg'
import error_icon from '../assets/images/error_icon.svg'
import warning_icon from '../assets/images/warning_icon.svg'
import crois from '../assets/images/crois.svg'

const SubmitCarte = ({ state, clear, titre, message }) => {
    let icon = null;
    let color = ''
    if (state === 'success') {
        icon = success_icon;
        color = 'text-[#03C988]'
    } else if (state === 'error') {
        icon = error_icon;
        color = 'text-[#EF4444]'
    } else {
        icon = warning_icon;
        color = 'text-[#FCF6D2]'
    }
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-transparent gap-y-2">
            <img
                src={crois}
                alt='exit'
                className='absolute w-6 cursor-pointer top-4 right-8'
                onClick={() => {
                    clear()
                    window.location.reload();
                }}
            />
            <img src={icon} alt='icon' className="w-20 mx-auto mb-2" />
            <h1 className={`font-bold text-3xl text-center mb-4 ${color}`}>{titre}</h1>
            <p className='text-center w-96 '>{message}</p>
        </div>
    )
}

export default SubmitCarte