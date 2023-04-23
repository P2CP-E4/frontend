import React from 'react'

const PopUp = ({ trigger, handleCloseEvent, children }) => {
    return (
        trigger && (
            <div
                onClick={handleCloseEvent}
                className='absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-gray-700 bg-opacity-50 backdrop-blur-sm'>¨
                {children}
            </div>
        )
    )
}

export default PopUp