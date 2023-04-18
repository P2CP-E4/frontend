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
            <nav className=" bg-[#13005A] h-16 w-screen shadow relative">
                <div className="px-4 mx-auto">
                    <div className="flex items-center justify-around py-4">
                        <img src={logo} alt='logo' className='w-24' />
                        <ul className="hidden gap-12 sm:flex sm:items-center ml-28">
                            <li className="text-base font-normal text-white"><Link to="/">Acceuil</Link></li>
                            <li className="text-base font-normal text-white"><Link to="/doctorant">Doctorant</Link></li>
                            <li className="text-base font-normal text-white"><Link to="/statistique">Statistique</Link></li>
                            <li className="text-base font-normal text-white"><Link to="/pv">PV</Link></li>
                            <li className="text-base font-normal text-white underline"><Link to="/aide">Aide</Link></li>
                        </ul>
                        <button
                            className="flex items-center justify-between text-sm font-normal text-white w-44"
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
                        <Link to="/welcomepage" >
                            <li className='className="block px-4 py-2 text-[#4E4E4E] hover:bg-[#ADD8E6]'>Se déconecter</li>
                        </Link>
                    </ul >
                </div >

            }
        </>
    );
}

export default NavBar;