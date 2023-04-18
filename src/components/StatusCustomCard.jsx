import React from 'react'

const StatusCustomCard = ({ value }) => {
    switch (value) {
        case 'Inscrit':
            return <span className='bg-[#79E4B180] text-[#2BB573] px-9 py-0.5 rounded-lg'>{value}</span>
        case 'Abandon':
            return <span className='bg-[#FF6B6B80] text-[#A62929] px-6 py-0.5 rounded-lg'>{value}</span>
        case 'En attente':
            return <span className='bg-[#F3DF7580] text-[#C1A614] px-5 py-0.5 rounded-lg'>{value}</span>
        case 'Différé':
            return <span className='bg-[#6FB1FC80] text-[#1858A1] px-8 py-0.5 rounded-lg'>{value}</span>
        case 'Radié':
            return <span className='bg-[#FFA07A80] text-[#AA4117] px-9 py-0.5 rounded-lg'>{value}</span>

        default:
            return null;
    }
}
export default StatusCustomCard;