import React from 'react';
import search from '../assets/images/search.svg';

const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (
        <div className='relative w-fit'>
            <input
                type='text'
                placeholder={column.placeHolderFilter}
                value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value || undefined)}
                className='outline-none border border-[#1C82AD] rounded-full w-32 h-9 appearance-none px-2.5 py-2.5 mx-2 text-xs text-[#545454]'
            />
            <img src={search} alt='search' className='absolute w-4 h-4 top-3 right-4' />
        </div >
    );
}

export default ColumnFilter;