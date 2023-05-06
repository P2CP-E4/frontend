import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePopUp } from '../hooks/usePopUp';
import Arrow from './Arrow';

import CartesInformationsDirecteur from './CarteInformationDirecteur';
import CarteInfomationSiminaire from './CarteInfomationSiminaire';

import crois from '../assets/images/crois.svg'
import more_info_icon from '../assets/images/more_info_icon.svg';
import PopUp from './PopUp';

const CarteInformationDoctorant = ({ data, handleCloseEvent }) => {

    const [carteSiminaireTrigger, openCarteSiminaire, closeCarteSiminaire] = usePopUp();
    const [carteDirecteurTrigger, openCarteDirecteur, closeCarteDirecteur] = usePopUp();

    const [carteCoDirecteurTrigger, openCarteCoDirecteur, closeCarteCoDirecteur] = usePopUp();
    const [isListSiminaireOpen, setIsListSiminaireOpen] = useState(false);

    const handleClickArrowEvent = () => {
        setIsListSiminaireOpen(!isListSiminaireOpen);
    }

    const [clickedSiminareData, setClickedSiminareData] = useState({});
    const variants = {
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 },
    };

    return (
        <>
            <div
                className='grid grid-cols-3 relative ml-5 bg-white w-11/12 h-[550px] pr-10 pl-20 pt-8 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
                onClick={e => e.stopPropagation()}
            >
                <div className='absolute top-6 right-6'> <img src={crois} alt='crois' onClick={handleCloseEvent} className='ml-auto cursor-pointer w-4' /></div>
                <div className='flex flex-col'>
                    <span className=" text-2xl font-semibold text-[#03C988] pr-0">Informations personnelles</span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1 pr-0 pt-2">Nom Complet :</span>
                    <span className='font-semibold text-black text-lg py-1 ml-2 pr-0'>{data.nomComplet || '///'}</span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1 pr-0">Date de naissance :</span>
                    <span className=' font-semibold text-black text-lg py-1 ml-2'>{data.dateNaissance.slice(0, 10).replaceAll('-', '/') || '///'}</span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1">Sexe : <span className='font-semibold text-black text-lg py-1 ml-2'>{data.sexe === 'M' ? 'Homme' : 'Femme'}</span></span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1">N° de telephone :</span>
                    <span className=' font-semibold text-black text-lg py-1 ml-2'>{data.telephone || '///'}</span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1">Email :</span>
                    <span className=' font-semibold text-black text-lg py-1 ml-2'>{data.email || '///'}</span>
                    <span className="font-semibold text-[#03C988] pt-5 text-lg py-1 pr-0">Status :</span>
                    <span className='ml-1 font-semibold text-black text-lg py-1'>{data.status || '///'}</span>
                </div>

                <div className='flex flex-col'>
                    <span className="text-2xl font-semibold text-[#03C988] pr-0">Cursus universitaire</span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1 pt-2">Type du doctorant :</span>
                    <span className='font-semibold text-black text-lg py-1 ml-2'>{data.typeDoctorat || '///'}</span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1">Type du diplome :</span>
                    <span className='font-semibold text-black text-lg py-1 ml-2'>{data.typeDiplome || '///'}</span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1">Option :</span>
                    <span className='font-semibold text-black text-lg py-1 ml-2'>{data.option || '///'}</span>
                    <div>
                        <div className="text-[#00337C] font-thin text-lg py-1 ml-1">Nom d'Etablissement d'origine :</div>
                        <div className='font-semibold text-black text-lg py-1 ml-2'>{data.etablissementOrigine || '///'}</div>
                        <div className="text-[#00337C] font-thin text-lg py-1 ml-1 pt-">Observation :</div>
                        <div className='font-semibold text-black text-lg py-1  ml-2'>{data.observation || '///'}</div>
                        <div className='flex justify-start'>
                            <h2 className="text-[#00337C] font-thin text-lg py-1 ml-1">Listes des séminaires</h2>
                            <button onClick={handleClickArrowEvent} className='justify-start w-5 h-5 mt-1 ml-2 '>
                                <Arrow state={isListSiminaireOpen} fill='#000000' />
                            </button>
                        </div>
                        <motion.div
                            variants={variants}
                            initial="closed"
                            animate={isListSiminaireOpen ? 'open' : 'closed'}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className=' font-semibold list-disc pl-5 overflow-auto h-20 w-[218px] scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400'>
                                {
                                    data?.Siminaire?.map((siminaire, index) => (
                                        <li key={index} className='flex justify-start text-black text-lg py-1'>
                                            {siminaire.titre}
                                            <img src={more_info_icon} alt='edit' className='w-3 h-3  mt-[7.5px] ml-2 cursor-pointer ' onClick={() => {
                                                setClickedSiminareData(siminaire);
                                                openCarteSiminaire();
                                            }}
                                            />
                                        </li>
                                    ))
                                }
                            </ul >
                        </motion.div >
                    </div >
                </div >
                <div className='flex flex-col'>
                    <span className="text-2xl font-semibold text-[#03C988] pr-0">Information de these</span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1 pt-2">Date de la Première Inscription :</span>
                    <span className='ml-2 font-semibold text-black py-1'>{data.premiereInscription.slice(0, 10).replaceAll('-', '/') || '///'}</span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1">Date enregistrement FCT:<span className='ml-2 font-semibold text-black py-1'>{data.FCT || '///'}</span></span>
                    <span className="text-[#00337C] font-thin text-lg py-1 pb-2 ml-1">Durrée doctoral :<span className='ml-2 font-semibold text-black py-1'>{data.totalinscription || '///'}ans</span></span>
                    <span className="text-[#00337C] font-thin text-lg py-1 pb-2 ml-1">Laboratoire :<span className='ml-2 font-semibold text-black py-1'>{data.laboratoire || '///'}</span></span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1 pb-2">Url du Procès Verbal : <a className='font-semibold text-black underline underline-offset-4  text-lg py-1 ml-2' href={data?.pv?.url}>{data?.pv?.code || '///'}</a></span>
                    <span className="text-[#00337C] font-thin text-lg py-1 ml-1">Intitulé de these :<span className='ml-2 font-semibold text-black py-1'>{data.intituleeThese || '///'}</span></span>
                    <span className="text-[#00337C] flex justify-start font-thin  ml-1 text-lg py-1">Directeur principal:</span>
                    <span className='font-semibold text-black flex justify-start  ml-2 text-lg py-1'>{data?.directeurPrincipal?.nomComplet || '///'}
                        <img
                            src={more_info_icon}
                            alt='edit'
                            onClick={openCarteDirecteur}
                            className='w-3 h-3  mt-[7.5px] ml-2 cursor-pointer '
                        />
                    </span>

                    {
                        data?.coDirecteur && (
                            <>
                                <span className="text-[#00337C] flex justify-start font-thin   ml-1 text-lg py-1">Co-Directeur :</span>
                                <span className='font-semibold text-black flex justify-start  ml-2 text-lg py-1'>{data?.coDirecteur?.nomComplet || '///'}
                                    <img
                                        src={more_info_icon}
                                        alt='edit'
                                        onClick={openCarteCoDirecteur}
                                        className='w-3 h-3 mt-[7.5px] ml-2 cursor-pointer' />
                                </span>
                            </>
                        )
                    }
                </div>
            </div >
            <PopUp trigger={carteDirecteurTrigger} handleCloseEvent={closeCarteDirecteur}><CartesInformationsDirecteur data={data.directeurPrincipal} handleCloseEvent={closeCarteDirecteur} /></PopUp>
            <PopUp trigger={carteCoDirecteurTrigger} handleCloseEvent={closeCarteCoDirecteur}><CartesInformationsDirecteur data={data.coDirecteur} handleCloseEvent={closeCarteCoDirecteur} /></PopUp>
            <PopUp trigger={carteSiminaireTrigger} handleCloseEvent={closeCarteSiminaire}><CarteInfomationSiminaire data={clickedSiminareData} handleCloseEvent={closeCarteSiminaire} /></PopUp>
        </>
    )
}
export default CarteInformationDoctorant;