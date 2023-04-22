import React from 'react'

const FormsErrorMessage = ({ children }) => {
    return (
        <div className='ml-1 text-xs text-red-500 '>
            {children}
        </div>
    )
}

export default FormsErrorMessage