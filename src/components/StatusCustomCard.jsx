import React from 'react'

const StatusCustomCard = ({ value }) => {
    switch (value) {
        case 'inscrit':
            return <span className='bg-[#79E4B180] text-[#2BB573] text-center px-9 py-0.5 rounded-lg'>{value}</span>
        case 'differe':
            return <span className='bg-[#F3DF7580] text-[#C1A614] text-center px-8 py-0.5 rounded-lg'>{value}</span>
        case 'radie':
            return <span className='bg-[#FF6B6B80] text-[#A62929] text-center px-9 py-0.5 rounded-lg'>{value}</span>
        case 'soutenu':
            return <span className='bg-[#6FB1FC80] text-[#1858A1] text-center px-7 py-0.5 rounded-lg'>{value}</span>
        default:
            return null;
    }
}
export default StatusCustomCard;