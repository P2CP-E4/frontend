import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const CarteAcceuil = ({ title, description, path }) => {
    const navigate = useNavigate();
    const handleClickEvent = () => {
        navigate(path);
    }

    return (
        <motion.div
            className=' flex items-center justify-center w-full h-full px-1 py-1 rounded-[30px] bg-gradient-to-r from-[#03C988] to-[#9747FF] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
            onClick={handleClickEvent}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}

        >
            <div className='flex flex-col  items-center justify-center w-full h-full bg-[#F3F9FF] rounded-[26px] px-2 pt-4 pb-5 text-center  hover:bg-white'>
                <span className=' text-2xl font-semibold mb-3.5'>{title}</span>
                <span className='text-sm font-light '>{description}</span>
            </div>
        </motion.div>

    )
}


export default CarteAcceuil;