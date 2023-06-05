import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import ImportExport from '../assets/images/ImportExport.svg';
import StatIcon from '../assets/images/StatIcon.svg';
import ModifIcon from '../assets/images/ModifIcon.svg';
import AjoutIcon from '../assets/images/AjoutIcon.svg';
import InscrIcon from '../assets/images/InscrIcon.svg';

const CarteAcceuil = ({ title, description, path, assetNumber }) => {
    const navigate = useNavigate();
    const handleClickEvent = () => {
        navigate(path);
    }
    let selectedAsset;
    switch (assetNumber) {
        case 1:
            selectedAsset = InscrIcon;
            break;
        case 2:
            selectedAsset = ModifIcon;
            break;
        case 3:
            selectedAsset = AjoutIcon;
            break;
        case 4:
            selectedAsset = StatIcon;
            break;
        case 5:
            selectedAsset = ImportExport;
            break;
        default:
            selectedAsset = InscrIcon;
            break;
    }

    return (
        <motion.div
            className='flex items-start justify-start w-[195px] h-[218px] px-[3px] py-[3px] rounded-[13px] bg-gradient-to-r from-[#03C988] to-[#9747FF] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
            onClick={handleClickEvent}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
            <div className='flex flex-col relative items-start text-start justify-start w-full h-full bg-[#F3F9FF] rounded-[10px] px-2 pt-4 pb-5  hover:bg-white'>
                <span className='text-[16px] font-semibold ml-[10px]'>{title}</span>
                <span className='text-[12.7px] ml-[10px] mt-[15px]'>{description}</span>
                <img src={selectedAsset} alt="icon" className="absolute w-11 h-11 mt-[140px] ml-[120px]" />
            </div>
        </motion.div>
    );
}

export default CarteAcceuil;