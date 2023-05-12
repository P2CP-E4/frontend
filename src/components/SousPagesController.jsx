import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SousPagesController = ({ sousPages, initialPage }) => {
    const navigate = useNavigate();

    const [activeButton, setActiveButton] = useState(initialPage);
    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
        navigate(sousPages[buttonId - 1].path)
    };

    return (
        <div className="relative mx-auto mb-5 w-fit">
            <div className="flex justify-center gap-5 pt-5">
                {sousPages.map((sousPage, index) => (
                    <button
                        className={`${activeButton === sousPage.id ? "bg-[#03C988] text-white" : "bg-white text-[#03C988] border-[#03C988] border hover:bg-[#03C988] hover:text-white"} font-medium py-2 px-2 rounded-t-xl  w-64 text-sm grow`}
                        onClick={() => handleClick(sousPage.id)}
                        key={sousPage.id}
                    >
                        {sousPage.title}
                    </button>
                ))}
            </div>

            <div className="absolute bottom-1 left-0 right-0 h-1 bg-[#03C988] rounded-full transform translate-y-1 -mx-6"></div>
        </div>
    );
}

export default SousPagesController;
