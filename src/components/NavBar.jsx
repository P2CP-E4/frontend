import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import profilePic from '../assets/images/profilePic.svg';
import Arrow from './Arrow';

const NavBar = () => {
    const [dropDownIsOpen, setDropDownIsOpenState] = useState(false);
    const handleClickEvent = () => {
        setDropDownIsOpenState(!dropDownIsOpen);
    }

    return (
        <>
            <nav className=" bg-[#13005A] h-16 shadow relative">
                <div className="mx-auto px-4">
                    <div className="flex items-center justify-around py-4">
                        <img src={logo} alt='logo' className='w-24' />
                        <ul className="hidden sm:flex sm:items-center gap-12 ml-28">
                            <li className="text-white text-base font-normal"><Link to="/">Acceuil</Link></li>
                            <li className="text-white text-base font-normal"><Link to="/doctorant">Doctorant</Link></li>
                            <li className="text-white text-base font-normal"><Link to="/statistique">Statistique</Link></li>
                            <li className="text-white text-base font-normal"><Link to="/pv">PV</Link></li>
                            <li className="text-white text-base font-normal underline"><Link to="/aide">Aide</Link></li>
                        </ul>
                        <button
                            className=" text-white flex justify-between  items-center text-sm font-normal w-44"
                            type="button"
                            onClick={handleClickEvent}
                        >
                            <img src={profilePic} alt='profile-pic' className='w-10' />
                            Lorem Ipsum
                            <Arrow state={dropDownIsOpen} fill="#03C988" className="h-2" />
                        </button>
                    </div>
                </div>
            </nav >
            {dropDownIsOpen &&
                <div className="text-sm text-gray-700 w-44 bg-white rounded-b-md absolute top-16 right-20 border-x border-b border-[#1C82AD]">
                    <ul>
                        <li className='className="block px-4 py-2 text-[#4E4E4E] hover:bg-[#ADD8E6] border-b border-[#1C82AD]'><Link to="/" >Consulter profile</Link></li >
                        <li className='className="block px-4 py-2 text-[#4E4E4E] hover:bg-[#ADD8E6]'><Link to="/" >Se déconecter</Link></li>
                    </ul >
                </div >
            }
        </>
    );
}

export default NavBar;