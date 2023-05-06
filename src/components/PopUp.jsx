import React from 'react'

const PopUp = ({ trigger, handleCloseEvent, children }) => {
    return (
        trigger && (
            <div
                onClick={(e) => {
                    e.stopPropagation()
                    if (handleCloseEvent) handleCloseEvent()
                }}
                className='absolute w-full h-full inset-0  z-30 flex items-center justify-center bg-gray-700 bg-opacity-50 backdrop-blur-sm'>
                {children}
            </div>
        )
    )
}

export default PopUp