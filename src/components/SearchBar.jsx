import React, { useEffect, useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickOutside } from 'react-click-outside-hook';


import crois from '../assets/images/crois.svg'
import { MoonLoader } from 'react-spinners';

const SearchBar = ({ placeholder, data, handleaSubmit }) => {
    //container logic
    const [isExpanded, setIsExpanded] = useState(false);
    console.log(isExpanded)
    const [parentRef, isClickedOutside] = useClickOutside();
    const expandContainer = () => {
        setFilteredData(data)
        setIsExpanded(true)
    }
    const collapseContainer = () => {
        setFilteredData([])
        setIsExpanded(false)
    }
    //filtering
    //----------------------------------------------------
    const [filteredData, setFilteredData] = useState([]);
    const inputRef = useRef();
    const [searchQuery, setSearchQuery] = useState('');
    const handleFilter = (event) => {
        event.preventDefault();
        const searchWord = event.target.value;
        setSearchQuery(searchWord);
        if (inputRef.current)
            inputRef.current.value = searchWord;
        const newFilter = data.filter(value => {
            return value.nomPrenom.toLowerCase().includes(searchWord.toLowerCase())
        })
        if (searchWord === "") {
            setFilteredData(data);
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setSearchQuery('')
        collapseContainer();
    }
    //---------------------------------------------------
    //animations
    const containerVariants = {
        expanded: {
            height: "15em",

        },
        collapsed: {
            height: "43.5px",
        }
    }

    const animationTransition = {
        type: "spring",
        damping: 22,
        stiffness: 150,
    }

    //collapssing on click outside logic
    useEffect(() => {
        if (isClickedOutside) {
            collapseContainer();
        }
    }, [isClickedOutside])

    const handleSelect = (e) => {
        handleaSubmit(e);
        collapseContainer();
        setSearchQuery(e.target.value)
    }
    return (
        <motion.div
            className=' border border-[#1C82AD] rounded-lg w-1/2 shadow-xl'
            ref={parentRef}
            animate={isExpanded ? "expanded" : "collapsed"}
            transition={animationTransition}
            variants={containerVariants}
        >
            <div className='sticky top-0'>
                <input
                    type='text'
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={handleFilter}
                    onFocus={expandContainer}
                    className={'outline-none block w-full appearance-none border-transparent rounded-lg border py-2 px-10' + (isExpanded ? 'rounded-b-none' : 'rounded-lg')}
                />
                <AnimatePresence>
                    {isExpanded && <div
                        className='absolute top-3.5 right-3 cursor-pointer'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={clearInput}
                        transition={{ duration: 0.4 }}
                    ><img src={crois} alt='crois' className='w-3' /></div>}
                </AnimatePresence>
            </div >
            {
                <div className='flex flex-col items-center overflow-hidden overflow-y-auto scrollbar-none h-4/5' >
                    {
                        filteredData.slice(0, 15).map((item, index) => (
                            <button type='button' value={item.nomPrenom} onClick={handleSelect} className='self-start w-full px-5 py-2 text-left hover:bg-slate-200' key={index}>{item.nomPrenom}</button>
                        ))
                    }
                    < MoonLoader loading={filteredData.length === 0 && isExpanded} size={30} color='#1C82AD' className='m-auto' />
                </div >
            }
        </motion.div >
    )
}

export default SearchBar