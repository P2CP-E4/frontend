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
    const dropDownContainerVariants = {
        expanded: {
            height: "200px",

        },
        collapsed: {
            height: "0px",
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
        <div
            className=' border border-[#1C82AD] w-[600px] shadow-xl'
            style={{ borderRadius: isExpanded ? '0.5rem 0.5rem  0rem 0rem' : '0.5rem', }}
            ref={parentRef}
        >
            <div className='sticky top-0'
                style={{ borderRadius: isExpanded ? '0rem 0rem' : '0.5rem', }}
            >
                <input
                    type='text'
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={handleFilter}
                    onFocus={expandContainer}
                    style={{ borderRadius: isExpanded ? '0.5rem 0.5rem  0rem 0rem' : '0.5rem', }}
                    className='outline-none block w-full appearance-none border-transparent border py-2 px-10   '
                />
                <AnimatePresence>
                    {isExpanded && <div
                        className='absolute top-3.5 right-3 cursor-pointer'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={clearInput}
                    ><img src={crois} alt='crois' className='w-3' /></div>}
                </AnimatePresence>
            </div >
            {
                <motion.div
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={dropDownContainerVariants}
                    transition={animationTransition}
                    className={'flex flex-col items-center overflow-hidden overflow-y-auto divide-y divide-[#1C82AD] scrollbar-none w-[600px] absolute m-0 min-w-max bg-white rounded-b-lg bg-transparent z-20'}
                    style={{
                        border: isExpanded ? '1px solid #1C82AD' : '0rem'
                    }}
                >
                    {
                        filteredData.slice(0, 15).map((item, index) => (
                            <button type='button' value={item.nomPrenom} onClick={handleSelect} className='self-start bg-white block w-full px-5 py-2 text-left hover:bg-slate-200' key={index}>{item.nomPrenom}</button>
                        ))
                    }
                    < MoonLoader loading={filteredData.length === 0 && isExpanded} size={30} color='#1C82AD' className='m-auto' />
                </motion.div >
            }
        </div >
    )
}

export default SearchBar