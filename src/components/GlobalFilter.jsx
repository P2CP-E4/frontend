import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {

    const [value, setValue] = useState(globalFilter);

    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <div>
            <input
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder="Enter a search term"
                className="outline-none border-2 border-[#1C82AD] rounded-full w-60 h-10 appearance-none px-4 py-2.5 text-xs text-[#545454]"
            />
        </div>
    );
}


export default GlobalFilter;