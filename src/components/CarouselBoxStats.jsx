import React from 'react';

const CarouselBoxStats = ({ title, number }) => {
    return (
        <div className='flex flex-col  w-[155px] h-[95px] bg-white rounded-[15px] pt-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <span className='ml-3 text-[#03C988] text-[13px]'> {title} </span>
            <span className='text-black text-center text-[45px] font-semibold'>{number}</span>
        </div>
    )
}

export default CarouselBoxStats;