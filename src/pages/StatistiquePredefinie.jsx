import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import DoughnutChart from '../components/DoughnutChart';
import GaugeChart from '../components/GaugeChart';
import Carousel from '../components/CarouselStats';
import SousPagesController from '../components/SousPagesController';
import DoctorantTable from '../components/DoctorantsTable';
import DirecteursStatsTable from '../components/DirecteursStatsTable';
const StatistiquePredefinie = () => {
    const [statsData, setStatsData] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);
    const [barChartData, setBarChartData] = useState([]);
    const STATS_DATA_URL = 'http://localhost:9000/api/Statistiques/StatNumerique';
    const LINE_DATA_URL = 'http://localhost:9000/api/Statistiques/inscritParY';
    const BAR_DATA_URL = 'http://localhost:9000/api/Statistiques/totalInscriParDoc';
    useEffect(() => {
        axios.get(LINE_DATA_URL)
            .then(res => setLineChartData(res.data))
            .catch(err => console.log(err))
        axios.get(BAR_DATA_URL)
            .then(res => setBarChartData(res.data))
            .catch(err => console.log(err))
        axios.get(STATS_DATA_URL)
            .then(res => setStatsData(res.data))
            .catch(err => console.log(err))
    }, [])

    const barData = {
        labels: barChartData.map(data => data._id),
        datasets: [{
            label: "nombre d'inscrit",
            data: barChartData.map(data => data.count),
            backgroundColor: '#1C82AD',
            borderColor: '#8744E1',
            pointBorderColor: 'transparent',
            tension: 0.1,
        }]
    };
    const optionsBarChart = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    const lineData = {
        labels: Object.keys(lineChartData),
        datasets: [{
            label: "nombre d'inscrit",
            data: Object.values(lineChartData),
            backgroundColor: 'transparent',
            borderColor: '#8744E1',
            pointBorderColor: 'transparent',
            tension: 0.1,
        }]
    };
    const OptionsLineChart = {
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
        },
    };
    const statusOptionsDoughnutChart = {
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    usePointStyle: true,
                    color: '#000000',
                    font: {
                        weight: 'bolder',
                    },
                },
            },
        },
        cutout: '75%',
    }
    const laboData = {
        labels: [`LMCS  ${Math.round((statsData.totalLMCS * 100) / statsData.totalDoctorants)}%`, `LCSI  ${Math.round((statsData.totalLCSI * 100) / statsData.totalDoctorants)}%`, `AUTRES  ${Math.round((statsData.totalAutre * 100) / statsData.totalDoctorants)}%`],
        datasets: [{
            data: [statsData.totalLMCS, statsData.totalLCSI, statsData.totalAutre],
            backgroundColor: ['#FF008A', '#1C82AD', '#F6DC4E'],
            borderColor: ['#FF008A', '#1C82AD', '#F6DC4E'],
            label: '%',
        }]
    };
    const laboOptionsDoughnutChart = {
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    usePointStyle: true,
                    color: '#000000',
                    font: {
                        weight: 'bolder',
                    },
                },
            },
        },
        cutout: '75%',
    }
    const statusData = {
        labels: [`Inscrits ${Math.round((statsData.inscrit * 100) / statsData.totalDoctorants)} % `, `Radiée  ${Math.round((statsData.radie * 100) / statsData.totalDoctorants)}%`, `Différeé  ${Math.round((statsData.differe * 100) / statsData.totalDoctorants)} % `, `Soutenu ${Math.round((statsData.soutenu * 100) / statsData.totalDoctorants)}%`],
        datasets: [{
            data: [statsData.inscrit, statsData.radie, statsData.differe, statsData.soutenu],
            backgroundColor: ['#03C988', '#FF008A', '#F6DC4E', '#1C82AD'],
            borderColor: ['#03C988', '#FF008A', '#F6DC4E', '#1C82AD'],
            label: '%',
        }]
    };
    const typeDoctoratOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    font: {
                        weight: 'bold',
                        size: 10,
                    },
                    color: 'black',
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        rotation: -90,
        circumference: 180,
        cutout: '75%',
        maintainAspectRatio: true,
        responsive: true,
    }
    const typeDoctoratData = {
        labels: ['Lmd', 'Doctorat'],
        datasets: [
            {
                data: [Math.round(statsData.LMDtotal * 100 / statsData.totalDoctorants), Math.round(statsData.totalClassique * 100 / statsData.totalDoctorants)],
                backgroundColor: ['#F6DC4E', '#6044B6'],
                borderColor: ['#F6DC4E', '#6044B6'],
                label: '%',
            },
        ],
    };
    const sexeOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 10,
                    font: {
                        weight: 'bold',
                        size: 10,
                    },
                    color: 'black',
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        rotation: -90,
        circumference: 180,
        cutout: '75%',
        maintainAspectRatio: true,
        responsive: true,
    }
    const sexeData = {
        labels: ['Homme', 'Femme'],
        datasets: [
            {
                data: [Math.round(statsData.totalM * 100 / statsData.totalDoctorants), Math.round(statsData.totalF * 100 / statsData.totalDoctorants)],
                backgroundColor: ['#6044B6', '#03C988'],
                borderColor: ['#6044B6', '#03C988'],
                label: '%',
            },
        ],
    };

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
            path: '/doctorant'
        },
        {
            id: 4,
            title: 'Tableau des PVs',
            path: '/pv'
        },
    ]

    return (
        <div className='w-screen h-fit bg-[#F5F5F5] flex flex-col items-center  pb-10' >
            <NavBar />
            <div className='self-start mb-10 ml-24'>
                <SousPagesController sousPages={sousPages} initialPage={1} />
            </div>
            <Carousel data={statsData} />
            <div className='flex gap-16 mt-10'>
                <div>
                    <div className='mt-10 mb-10 md:flex md:gap-10'>
                        <DoughnutChart chartData={laboData} chartOptions={laboOptionsDoughnutChart} title='Pourcentage des doctorants par laboratoire' subTitle='Labo' />
                        <DoughnutChart chartData={statusData} chartOptions={statusOptionsDoughnutChart} title='Pourcentage des doctorants selon leur Status' subTitle='Status' />
                    </div>
                    <div className='gap-10 mb-10 md:flex'>
                        <GaugeChart chartData={sexeData} chartOptions={sexeOptions} title='Pourcentage des doctorants par sexe' />
                        <GaugeChart chartData={typeDoctoratData} chartOptions={typeDoctoratOptions} title='Type du diplome des doctorants' subTitle='Diplome' />
                    </div>
                </div>
                <div className='mt-8 -ml-10'><DirecteursStatsTable /></div>
            </div>
            <div className='justify-center gap-10 mt-10 md:flex'>
                <BarChart chartData={barData} chartOptions={optionsBarChart} title='Nombre de Doctorants par nombre d’inscriptions' />
                <LineChart chartData={lineData} chartOptions={OptionsLineChart} title='Nombre d’inscrits par années' />
            </div>
        </div >

    )
}

export default StatistiquePredefinie;