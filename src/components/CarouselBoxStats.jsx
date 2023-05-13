import React from 'react';

const CarouselBoxStats = ({ title, number, pourcentage }) => {
    let color = '';
    let strPourcentage = pourcentage?.toString();
    if (pourcentage > 0) {
        color = "#03C988";
        strPourcentage = "+" + pourcentage;
    } else if (pourcentage < 0) {
        color = "#FF0000";
    } else if (pourcentage === 0) {
        color = "#F6DC4E";
    }
    return (
        <div className='flex flex-col items-start justify-start  w-[155px] h-[95px] bg-white rounded-[15px] pl-[15px] pt-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <span className=' text-[#A2A2A2] text-[13px]'> {title} </span>
            <div className='flex flex-row items-center justify-center text-center'>
                <span className='text-black  text-[45px] font-semibold'>{number}</span>
                {
                    pourcentage !== null && pourcentage !== undefined && <span
                        className='text-[8.5px] border-[1px] px-[3px] rounded-[5px] mt-[15px] ml-[18px]'
                        style={{
                            borderColor: color,
                            color: color
                        }}
                    >{strPourcentage}%</span>
                }
            </div>
        </div>
    )
}

export default CarouselBoxStats;