import React, { useState } from 'react'
import StatusCustomCard from './StatusCustomCard'
const ChangementStatusCheckBox = props => {
    const [status, setStatus] = useState('Inscrit');
    return (
        <div className='w-fit h-fit'>
            <div className='flex flex-col gap-4 px-4 py-6 bg-white w-44 h-fit rounded-tr-2xl'>
                <span id='' className='bg-[#79E4B180] text-[#2BB573] text-center px-9 py-0.5 rounded-lg'>Inscrit</span>
                <span id='' className='bg-[#F3DF7580] text-[#C1A614] text-center px-8 py-0.5 rounded-lg'>Différé</span>
                <span id='' className='bg-[#FF6B6B80] text-[#A62929] text-center px-9 py-0.5 rounded-lg'>Radié</span>
            </div>
            <button className='w-44 h-10 rounded-br-2xl flex items-center justify-center text-xl text-white bg-[#03C988]'>
                Confirmer
            </button>
        </div>
    )
}

export default ChangementStatusCheckBox