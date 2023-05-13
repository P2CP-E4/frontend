import React, { useEffect, useState } from 'react'
import CarteAcceuilGrid from '../components/CarteAcceuilGrid'
import CarouselBoxStats from '../components/CarouselBoxStats'
import NavBar from '../components/NavBar'
import axios from 'axios'
function Acceuil() {
    const STATS_DATA_URL = 'http://localhost:9000/api/Statistiques/StatNumerique';
    const [statsData, setStatsData] = useState([]);
    useEffect(() => {
        axios.get(STATS_DATA_URL)
            .then(res => setStatsData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className='flex flex-col items-center w-screen h-screen  bg-[#F5F5F5]'>
                <NavBar />
                <h1 className=' mb-[15px] text-[28px] font-bold text-[#03C988] mt-[23px]'> Bienvenue!</h1>
                <div className='flex gap-[70px] mb-[40px]'>
                    <CarouselBoxStats title="Total" number={statsData.totalDoctorants} pourcentage={null} />
                    <CarouselBoxStats title="Nouveaux inscrits" number={statsData.nouveauInscrit} pourcentage={null} />
                    <CarouselBoxStats title="Femmes" number={statsData.totalF} pourcentage={statsData.Fadvancement} />
                    <CarouselBoxStats title="Hommes" number={statsData.totalM} pourcentage={statsData.Madvancement} />
                </div>
                <span className='mr-[720px] mb-[20px] font-semibold'> Veuillez choisir l’action que vous voulez faire :</span>
                <CarteAcceuilGrid />
            </div>
        </>
    )
}


export default Acceuil;