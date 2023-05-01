import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import logo from '../assets/images/logo.svg';
import profilePic from '../assets/images/profilePic.svg';
import Arrow from './Arrow';

const NavBar = () => {
    const navigate = useNavigate();

    const [dropDownIsOpen, setDropDownIsOpenState] = useState(false);
    const handleClickEvent = () => {
        setDropDownIsOpenState(!dropDownIsOpen);
    }
    return (
        <>
            <div className='sticky top-0 z-20 w-full'>
                <nav className=" bg-[#13005A] h-16 w-full shadow relative">
                    <div className="flex items-center justify-around py-4">
                        <img src={logo} alt='logo' className='w-24 cursor-pointer' onClick={() => navigate('/')} />
                        <ul className="hidden gap-12 sm:flex sm:items-center ml-28">
                            <li className={styles.animation} ><Link to="/">Acceuil</Link></li>
                            <li className={styles.animation}><Link to="/doctorant">Doctorant</Link></li>
                            <li className={styles.animation}><Link to="/statistique">Statistique</Link></li>
                            <li className={styles.animation}><Link to="/pv">PV</Link></li>
                            <li className={styles.animation}><Link to="/aide">Aide</Link></li>
                        </ul>
                        <button
                            className="flex items-center justify-between text-sm font-normal text-white w-44"
                            type="button"
                            onClick={handleClickEvent}
                        >
                            <div className='flex items-center justify-center gap-1'>
                                <img src={profilePic} alt='profile-pic' className='w-10' />
                                Admin
                                <Arrow state={dropDownIsOpen} fill="#03C988" className="h-2" />
                            </div>
                        </button>
                    </div>
                </nav >
                {
                    dropDownIsOpen && <div
                        className="text-sm text-gray-700 w-44 bg-white rounded-b-md absolute top-16 right-20 border-x border-b border-[#1C82AD]"
                    >
                        <ul>
                            <Link to="/profile">
                                <li className='className="block px-4 py-2 text-[#4E4E4E] hover:bg-[#ADD8E6] border-b border-[#1C82AD]'>
                                    Consulter profile
                                </li >
                            </Link>
                            <Link to="/welcomepage" >
                                <li className='className="block px-4 py-2 text-[#4E4E4E] hover:bg-[#ADD8E6]'>Se déconecter</li>
                            </Link>
                        </ul >
                    </div >
                }
            </div>
        </>
    );
}

export default NavBar;