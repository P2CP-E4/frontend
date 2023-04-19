import React from 'react'
import NavBar from '../components/NavBar'
import { motion } from 'framer-motion'
function Aide() {
    return (
        <>
            <NavBar />
            <div className='flex items-center justify-center w-screen h-screen text-base font-normal text-white bg-orange-600'>
                <div className='flex flex-col'>
                    <span>Aide</span>
                    <motion.span
                        className='w-10 h-10 '
                        whileHover={{
                            scale: 1.2

                        }}
                    >-------</motion.span>
                </div>
            </div >
        </>
    )
}

export default Aide