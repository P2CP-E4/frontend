import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { motion } from "framer-motion"
import logo from '../assets/images/logo.svg';
import profilePic from '../assets/images/profilePic.svg';
import Arrow from './Arrow';

const NavBar = () => {
    const [arrowState, setArrowState] = useState(false);
    const handleClickEvent = () => {
        setArrowState(!arrowState);
    }

    return (
        <>
            <nav className=" bg-[#13005A] container h-16  shadow">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-around py-4">
                        <img src={logo} alt='logo' className='w-24' />
                        <ul className="hidden sm:flex sm:items-center gap-12 ml-28">
                            <li className="text-white text-base font-normal"><Link to="/">Acceuil</Link></li>
                            <li className="text-white text-base font-normal"><Link to="/doctorant">Doctorant</Link></li>
                            <li className="text-white text-base font-normal"><Link to="/statistique">Statistique</Link></li>
                            <li className="text-white text-base font-normal"><Link to="/pv">PV</Link></li>
                            <li className="text-white text-base font-normal underline"><Link to="/aide">Aide</Link></li>
                        </ul>
                        <div className='flex items-center cursor-pointer gap-2' onClick={handleClickEvent} >
                            <img src={profilePic} alt='profile-pic' className='w-8' />
                            <p className='text-white text-'>Lorem Ipsum</p>
                            <Arrow state={arrowState} fill={'#03C183'} className="w-2.5" />
                        </div>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default NavBar;