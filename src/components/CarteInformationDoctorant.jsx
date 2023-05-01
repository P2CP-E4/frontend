import React, { useState } from 'react';
import crois from '../assets/images/crois.svg'
import more_info_icon from '../assets/images/more_info_icon.svg';
import { motion } from 'framer-motion';
import Arrow from './Arrow';
import { usePopUp } from '../hooks/usePopUp';
import PopUp from './PopUp';
import CarteInformationSiminaire from './CarteInfomationSiminaire';
const CarteInformationDoctorant = ({ handleCloseEvent }) => {
    const [isListSiminaireOpen, setIsListSiminaireOpen] = useState(false);

    const handleClickArrowEvent = () => {
        setIsListSiminaireOpen(!isListSiminaireOpen);
    }

    const variants = {
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 },
    };

    const [carteSiminaireTrigger, openCarteSiminaire, closeCarteSiminaire] = usePopUp()
    return (
        <>
            <div
                className=' bg-white w-11/12 h-fit pr-10 pl-20 pb-0 pt-4 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
                onClick={e => e.stopPropagation()}
            >
                <div className='flex justify-between'>
                    <h2 className=" text-xl font-semibold text-[#03C988] mb-4">Informations personnelles</h2>
                    <img src={crois} alt='crois' onClick={handleCloseEvent} className='ml-auto cursor-pointer w-7' />
                </div>
                <div className='grid w-full grid-cols-3 gap-5 ml-5'>
                    <span className="text-[#00337C]">Nom :<span className='ml-1 font-semibold text-black'>Benmachiche</span></span>
                    <span className="text-[#00337C]">Prenom :<span className='ml-1 font-semibold text-black'>Khaled</span></span>
                    <span className="text-[#00337C]">Date de naissance :<span className='ml-1 font-semibold text-black'>01/04/2003</span></span>
                    <span className="text-[#00337C]">Sexe :<span className='ml-1 font-semibold text-black'>Homme</span></span>
                    <span className="text-[#00337C]">N° de telephone :<span className='ml-1 font-semibold text-black'>0554495499</span></span>
                    <span className="text-[#00337C]">Email :<span className='ml-1 font-semibold text-black'>benmachiche60@gmail.com</span></span>
                </div>
                <h2 className="text-xl font-semibold text-[#03C988] mb-4 mt-5 gap-5">Cursus universitaire</h2>
                <div className='grid grid-cols-2 gap-5 mb-4 ml-5'>
                    <span className="text-[#00337C] ">Type du doctorant :<span className='ml-1 font-semibold text-black'>SIQ</span></span>
                    <span className="text-[#00337C] ">Nom d'Etablissement d'origine :<span className='ml-1 font-semibold text-black'>ESI</span></span>
                    <span className="text-[#00337C]">Type du diplome :<span className='ml-1 font-semibold text-black'>Master</span></span>
                    <span className="text-[#00337C]">Option :<span className='ml-1 font-semibold text-black'>Master</span></span>
                </div>
                <h2 className="text-xl font-semibold text-[#03C988] mb-4 mt-5">Information de these</h2>
                <div className='grid w-full grid-cols-3 gap-5 mb-4 ml-5'>
                    <span className="text-[#00337C]">Date de la Première Inscription :<span className='ml-1 font-semibold text-black'>01/01/2023</span></span>
                    <span className="text-[#00337C]">Intitulé de these :<span className='ml-1 font-semibold text-black'>geopolytique</span></span>
                    <span className="text-[#00337C]">Laboratoire :<span className='ml-1 font-semibold text-black'>LCSI</span></span>
                    <span className="text-[#00337C]">Date enregistrement FC :<span className='ml-1 font-semibold text-black'>01/01/2023</span></span>
                    <span className="text-[#00337C]">Code du Procès Verbal :<span className='ml-1 font-semibold text-black'>PV_2023</span></span>
                    <span className="text-[#00337C]">Directeur :<span className='ml-1 font-semibold text-black'>Si Teyab Fatima</span></span>
                </div>
                <h2 className="text-xl font-semibold text-[#03C988] mb-4 mt-5">Status : <span className='ml-1 text-[18px] font-semibold text-black'>Abondon</span></h2>
                <div className='grid w-full grid-cols-2 gap-5 mb-4 ml-5'>
                    <span className="text-[#00337C]">Observation :<span className='ml-1 font-semibold text-black'>Lorem Lorem</span></span>
                    <div >
                        <span>   <div className='flex justify-start'>
                            <h2 className="text-[#00337C]">Listes des siminaires</h2>
                            <button onClick={handleClickArrowEvent} className='justify-start w-5 h-5 mt-1 ml-2 '>
                                <Arrow state={isListSiminaireOpen} fill='#000000' />
                            </button> </div></span>
                        <motion.div
                            className=" overflow-hidden"
                            variants={variants}
                            initial="closed"
                            animate={isListSiminaireOpen ? 'open' : 'closed'}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='w-[187px] overflow-auto h-20 scrollbar-thin'>
                                <ul className=' font-semibold pl-4 w-24'>
                                    <li className='flex justify-between items-center'>Item 1<img src={more_info_icon} alt='edit' className='w-3 h-3  cursor-pointer ' onClick={openCarteSiminaire} /></li>
                                    <li className='flex justify-between items-center'>Item 2<img src={more_info_icon} alt='edit' className='w-3 h-3 cursor-pointer ' onClick={openCarteSiminaire} /></li>
                                    <li className='flex justify-between items-center'>Item 3<img src={more_info_icon} alt='edit' className='w-3 h-3  cursor-pointer ' onClick={openCarteSiminaire} /></li>
                                    <li className='flex justify-between items-center'>Item 4<img src={more_info_icon} alt='edit' className='w-3 h-3  cursor-pointer ' onClick={openCarteSiminaire} /></li>
                                    <li className='flex justify-between items-center'>Item 5<img src={more_info_icon} alt='edit' className='w-3 h-3  cursor-pointer ' onClick={openCarteSiminaire} /></li>
                                    <li className='flex justify-between items-center'>Item 6<img src={more_info_icon} alt='edit' className='w-3 h-3  cursor-pointer ' onClick={openCarteSiminaire} /></li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div >
            <PopUp trigger={carteSiminaireTrigger} handleCloseEvent={closeCarteSiminaire}><CarteInformationSiminaire handleCloseEvent={closeCarteSiminaire} /></PopUp>
        </>
    )
}
export default CarteInformationDoctorant;