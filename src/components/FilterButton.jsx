import React from 'react';
import filter from '../assets/images/filter.svg';
const FilterButton = ({ handleClickEvent }) => {
    return (
        <>
            <button className="flex items-center justify-between px-6 text-white bg-[#03C988] w-40 h-10 rounded-full" type="button" onClick={handleClickEvent}>
                Filtrer
                <img src={filter} alt='filter' />
            </button>
        </>
    );
}

export default FilterButton;