import React from 'react';
const PaginationButton = ({ content, style, handleClickEvent, disable }) => {
    return (
        <button
            type='button'
            className='flex items-center justify-center w-9 h-9 mx-1 text-black bg-[#F9F9F9] hover:bg-[#D9D9D9] rounded-2xl'
            style={style}
            onClick={handleClickEvent}
            disabled={disable}
        >
            {content}
        </button >
    );
}

export default PaginationButton;