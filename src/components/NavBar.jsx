import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import logo from '../assets/images/logo.svg';
import profilePic from '../assets/images/profilePic.svg';
import Arrow from './Arrow';
import { googleLogout } from '@react-oauth/google';
const NavBar = () => {
    const navigate = useNavigate();
    const [dropDownIsOpen, setDropDownIsOpenState] = useState(false);

    const handleClickEvent = () => {
        setDropDownIsOpenState(!dropDownIsOpen);
    }
    const logOut = () => {
        googleLogout();
        localStorage.setItem('profile', null);
        navigate('/');
    };

    const profileData = JSON.parse(localStorage.getItem('profile'));
    return (
        <>
            <nav className=" bg-[#13005A] sticky top-0 z-20 h-16 w-screen shadow">
                <div className="flex items-center justify-around py-4">
                    <img src={logo} alt='logo' className='w-24 cursor-pointer' onClick={() => navigate('/acceuil')} />
                    <ul className="hidden gap-12 sm:flex sm:items-center ml-28">
                        <li className={styles.animation} ><Link to="/acceuil">Accueil</Link></li>
                        <li className={styles.animation}><Link to="/doctorant">Doctorant</Link></li>
                        <li className={styles.animation}><Link to="/statistiquePredefinie">Statistique</Link></li>
                        <li className={styles.animation}><Link to="/pv">PV</Link></li>
                        <li className={styles.animation}><Link to="/aide">Aide</Link></li>
                    </ul>
                    <button
                        className="flex items-center justify-between text-sm font-normal text-white w-44"
                        type="button"
                        onClick={handleClickEvent}
                    >
                        <div className='flex items-center justify-center gap-1'>
                            <img src={profileData?.picture || profilePic} alt='pdp' className='rounded-full w-9' />
                            {profileData?.given_name || 'Admin'}
                            <Arrow state={dropDownIsOpen} fill="#03C988" className="h-2" />
                        </div>
                    </button>
                </div>
                {dropDownIsOpen && <div className="text-sm text-gray-700 z-50 w-80 bg-white rounded-md absolute top-[70px] right-[30px] border border-[#1C82AD] shadow-xl">
                    <ul>
                        <li className='flex justify-around items-center px-4 py-3 text-[#4E4E4E] border-b border-[#1C82AD]'>
                            <img src={profileData?.picture || profilePic} alt='pdp' className='rounded-full w-14 h-14' />
                            <div className='block'>
                                <p className='text-base font-semibold text-left text-black '>{profileData?.given_name || 'DPGR'}</p>
                                <p className='text-sm text-left'>{profileData?.email || 'loremIpsum@esi.dz'}</p>
                            </div>
                        </li >
                        <li
                            className='px-4 py-2 text-[#4E4E4E] hover:bg-[#ADD8E6] cursor-pointer'
                            onClick={logOut}
                        >Se déconecter</li>
                    </ul >
                </div >}
            </nav >
        </>
    );
}

export default NavBar;