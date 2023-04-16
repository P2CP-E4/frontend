import React from 'react';
const TablePagination = ({ content, style, handleClickEvent, disable }) => {
    return (
        <button
            type='button'
            className='w-10 h-10 flex justify-center items-center bg-[#070606] rounded-2xl text-white mx-1'
            style={style}
            onClick={handleClickEvent}
            disabled={disable}
        >
            {content}
        </button >
    );
}

export default TablePagination;