import React, { useMemo } from "react";
import selectArrow from '../assets/images/select_arrow.svg';
const ColumSelectFilter = ({ column }) => {
    const { filterValue, setFilter, preFilteredRows, id } = column
    // Use preFilteredRows to calculate the options
    const options = useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    return (
        <div className="relative w-full">
            <select
                value={filterValue}
                onChange={(e) => { setFilter(e.target.value || undefined); }}
                className="outline-none border border-[#1C82AD] rounded-full w-full h-9 appearance-none px-2.5 py-2.5 text-xs text-[#545454]"
            >
                <option value=''>{column.placeHolderFilter}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <img src={selectArrow} alt="search" className="absolute top-4 right-3" />
        </div>
    );
}

export default ColumSelectFilter;