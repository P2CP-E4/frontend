import React from 'react'

export const CarteAcceuil = ({ title, description }) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full bg-slate-500 rounded-xl'  >
            <span className=''>{title}</span>
            <span className=''>{description}</span>
        </div>
    )
}
