import React, { useState } from 'react';
import { motion } from 'framer-motion';

import green_arrow from '../assets/images/green_arrow.svg'
const QuestionBox = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBox, setHasBox] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    }

    const variants = {
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 },
    };

    const boxVariants = {
        open: { borderRadius: '13px 13px 0 0' },
        closed: { borderRadius: '13px' },
    };

    const handleBoxEnter = () => {
        setHasBox(true);
    };

    const handleBoxLeave = () => {
        setHasBox(false);
    };

    return (
        <div className='relative'>
            <div className=' pr-9 flex items-center text-start w-[400px] h-[50px] bg-white shadow-xl  cursor-pointer'
                onClick={toggleDrawer}
                style={{
                    borderRadius: isOpen ? '0.5rem 0.5rem  0rem 0rem' : '0.5rem',
                }}>
                <span className='ml-5 text-[15px] font-semibold'>{question}</span>

                <button onClick={toggleDrawer} className="w-5 h-5 absolute right-[2px] mr-3 focus:outline-none">
                    <motion.img
                        src={green_arrow}
                        alt="arrow"
                        initial={false}
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    />
                </button>
            </div>
            <motion.div
                className="bg-white w-[400px] rounded-b-[13px] shadow-lg -mt-2 overflow-hidden"
                variants={variants}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className={` w-[400px]`}

                    variants={boxVariants}
                    onMouseEnter={handleBoxEnter}
                    onMouseLeave={handleBoxLeave}
                >
                    <div className="p-5 ">
                        <p className='text-[15px] '  >{answer}
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default QuestionBox;