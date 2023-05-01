import React, { useState } from 'react';
import { motion } from 'framer-motion';
import question_mark from '../assets/images/question_mark.svg'
import green_arrow from '../assets/images/green_arrow.svg'
const QuestionBox = ({ question }) => {
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
            <div className='flex items-center text-start w-[300px] h-[35px] bg-white  shadow-lg'
                style={{
                    borderRadius: isOpen ? '0.5rem 0.5rem  0rem 0rem' : '0.5rem',
                }}>
                <span className='ml-5 text-sm'>{question}</span>
                <img src={question_mark} alt="question" className="ml-[5px] w-3 h-3" />
                <button onClick={toggleDrawer} className="w-5 h-5 ml-auto mr-3 focus:outline-none">
                    <motion.img
                        src={green_arrow}
                        alt=""
                        className={`transform ${isOpen ? 'rotate-90' : ''}`}
                        initial={false}
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    />
                </button>
            </div>
            <motion.div
                className="bg-white w-[300px] rounded-b-[13px] shadow-lg overflow-hidden"
                variants={variants}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className={` w-[300px]`}

                    variants={boxVariants}
                    onMouseEnter={handleBoxEnter}
                    onMouseLeave={handleBoxLeave}
                >
                    <div className="p-2">
                        <p>Drawer content goes here...
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default QuestionBox;