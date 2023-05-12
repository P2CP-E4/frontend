import React from 'react';
import { usePopUp } from '../hooks/usePopUp';
import Login from '../components/Login';
import PopUp from '../components/PopUp';
import ESI from '../assets/images/ESI.svg'
const WelcomePage = () => {
    const [loginClicked, openLoginPopUp, closeLoginPopUp] = usePopUp();
    return (
        <div className="flex flex-col justify-between w-screen h-screen py-6 pl-16 bg-[url('/src/assets/images/welcomePage.jpg')] bg-cover">
            <nav className="flex ml-10">
                <ul className="flex gap-10">
                    <li className=" text-[#13005A] font-semibold hover:text-[#03C988]">Accueil</li>
                    <li className="text-[#13005A] font-semibold hover:text-[#03C988] cursor-pointer" onClick={openLoginPopUp}>Se Connecter</li>
                </ul>
            </nav>
            <div className='ml-10'>
                <h1 className='text-[#13005A] text-3xl mb-2 font-bold'>Le DPGR</h1>
                <p className='text-[#13005A] mb-3 text-lg'>La direction de la post-graduation et la recherche<br /> (DPGR) est la structure de l’école chargée  d’assurer le<br /> bon déroulement des formations doctorales et veuille à <br />l'application de la réglementation en vigueur en la matière.<br /> Par ailleurs, elle suit les activités de recherche des laboratoires<br /> de recherche et valorise les aboutis et les résultats de recherche. </p>
                <button
                    type='button'
                    onClick={openLoginPopUp}
                    className=' px-24 py-1.5 border-2 border-[#03C988] bg-[#03C988] text-white rounded-2xl hover:bg-[#DCE7F1] hover:text-[#03C988]'
                >Se connecter
                </button>
            </div>
            <div className='flex items-end justify-self-end'>
                <img src={ESI} alt="esi" className='h-10' />
                <p className='text-xs text-[#13005A]'>Ecole nationale Supérieure d’Informatique ESI</p>
            </div>
            <PopUp trigger={loginClicked}><Login handleCloseEvent={closeLoginPopUp} /></PopUp>
        </div >

    );
}

export default WelcomePage;
