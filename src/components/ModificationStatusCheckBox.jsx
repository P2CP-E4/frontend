import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
const ModificationStatusCheckBox = ({ visibility, defaultValue, className, onClick, ...rest }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    useEffect(() => {
        setSelectedOption(defaultValue);
    }, [defaultValue]);

    const handleChangeEvent = (e) => {
        setSelectedOption(e.target.value);
    }

    const checkboxes = [{
        label: 'Inscrit',
        value: 'Inscrit',
        textColor: '#2BB573',
        backgroundColor: '#79E4B180'
    },
    {
        label: 'Différé',
        value: 'Differe',
        textColor: '#C1A614',
        backgroundColor: '#F3DF7580'
    },
    {
        label: 'Radié',
        value: 'Radie',
        textColor: '#A62929',
        backgroundColor: '#FF6B6B80'
    },
    {
        label: 'Soutenu',
        value: 'Soutenu',
        textColor: '#1858A1',
        backgroundColor: '#6FB1FC80',
    }]
    return (
        <AnimatePresence>
            {
                visibility && <motion.div
                    className={className}
                    initial={{ opacity: 0, x: -100, }}
                    animate={{ opacity: 1, x: 0, }}
                    exit={{ opacity: 0, x: -100, }}
                    transition={{ duration: 0.3 }}
                    {...rest}
                >
                    <div className='flex flex-col gap-6 px-4 py-4 bg-[#F9F9F9] w-44 h-fit rounded-tr-2xl'>
                        {
                            checkboxes.map((checkbox, index) => {
                                return (
                                    <label className="cursor-pointer" key={index}>
                                        <input type="radio" name={checkbox.label} value={checkbox.value} className="sr-only" checked={selectedOption === checkbox.value} onChange={handleChangeEvent} />
                                        <div
                                            style={{
                                                color: checkbox.textColor,
                                                backgroundColor: checkbox.backgroundColor,
                                                borderColor: (checkbox.value === selectedOption) ? checkbox.textColor : 'transparent',
                                            }}
                                            className={`border-2 text-center px-9 py-0.5 rounded-lg transition-all`}
                                        >
                                            {checkbox.label}
                                        </div>
                                    </label>
                                )
                            })
                        }
                    </div>
                    <button
                        className='w-44 h-10 rounded-br-2xl flex items-center justify-center text-xl text-white bg-[#03C988]'
                        type='button'
                        onClick={onClick}
                    >
                        Confirmer
                    </button>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default ModificationStatusCheckBox;