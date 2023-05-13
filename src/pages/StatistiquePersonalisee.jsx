import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import StatsGenerator from '../components/StatsGenerator';
import MultiBarChart from '../components/MultiBarChart';
import GenererStatsNumerique from '../components/GenererStatsNumerique';
import SousPagesController from '../components/SousPagesController';
import axios from 'axios';

const StatistiquePersonnalisee = () => {

    const sousPages = [
        {
            id: 1,
            title: 'Statistique prédefinie',
            path: '/statistiquePredefinie'
        },
        {
            id: 2,
            title: 'Statistique personnalisée',
            path: '/statistiquePersonnalisee'
        },
        {
            id: 3,
            title: 'Tableau des doctorants',
            path: '/tableauDoctorants'
        },
        {
            id: 4,
            title: 'Tableau des PVs',
            path: '/pv'
        },
    ]

    const labels = {
        sexe: ['Homme', 'Femme'],
        laboratoire: ['LMCS', 'LCSI'],
        typeDiplome: ["Master", "Magister", "Ingeniorat",],
        typeDoctorat: ['LMD', 'Classique'],
        status: ['inscrit', 'radie', 'soutenu', 'differe'],
        option: ['SIQ', 'SI']
    }

    const [critere1Labels, setCriter1Lables] = useState([]);
    const [critere2Labels, setCriter2Lables] = useState([]);
    const [data, setData] = useState([]);

    const generateGraphData = (selectedOption1, selectedOption2, selectedYear1, selectedYear2) => {
        console.log(selectedOption1, selectedOption2, selectedYear1, selectedYear2);
        const params = {
            critere1: selectedOption1,
            critere2: selectedOption2,
            date1: selectedYear1,
            date2: selectedYear2
        }
        setCriter1Lables(labels[selectedOption1])
        setCriter2Lables(labels[selectedOption2])
        axios.get('http://localhost:9000/api/Statistiques/statistiquesMulticriteres', { params })
            .then(res => {
                setData(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))

    }


    return (
        <div className='w-screen h-fit pb-10 bg-[#F5F5F5] flex flex-col items-center' >
            <NavBar />
            <div className='self-start ml-24'>
                <SousPagesController sousPages={sousPages} initialPage={2} />
            </div>
            <GenererStatsNumerique />
            <div className='flex flex-col items-center self-start p-5 mb-20 ml-24 bg-white rounded-md shadow-lg'>
                <StatsGenerator onSubmit={generateGraphData} />
                <MultiBarChart LabelArray={critere2Labels} DataArray={data} NumCritere1={critere1Labels.length} titles={critere1Labels} />
            </div>
        </div >
    )
}

export default StatistiquePersonnalisee;