import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import DoughnutChart from '../components/DoughnutChart';
import GaugeChart from '../components/GaugeChart';
import DirecteursStatsTable from '../components/DirecteursStatsTable';
import Carousel from '../components/CarouselStats';
import DoctorantTable from '../components/DoctorantsTable'
import StatsGenerator from '../components/StatsGenerator';
import MultiBarChart from '../components/MultiBarChart';

const Statistique = () => {
    const [statsData, setstatsDataData] = useState([]);
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
            .then(res => setstatsDataData(res.data))
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
        labels: [`LMCS  ${(statsData.totalLMCS * 100) / statsData.totalDoctorants}%`, `LCSI  ${(statsData.totalLCSI * 100) / statsData.totalAutre}%`, `AUTRES  ${(statsData.totalLCSI * 100) / statsData.totalDoctorants}%`],
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
        labels: [`Inscrits ${(statsData.inscrit * 100) / statsData.totalDoctorants} % `, `Abondons  ${(statsData.radie * 100) / statsData.totalDoctorants}%`, `Différeé  ${(statsData.differe * 100) / statsData.totalDoctorants} % `, `Soutenu ${(statsData.soutenu * 100) / statsData.totalDoctorants}%`],
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
                data: [statsData.LMDtotal * 100 / statsData.totalDoctorants, statsData.totalClassique * 100 / statsData.totalDoctorants],
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
                data: [statsData.totalM * 100 / statsData.totalDoctorants, statsData.totalF * 100 / statsData.totalDoctorants],
                backgroundColor: ['#6044B6', '#03C988'],
                borderColor: ['#6044B6', '#03C988'],
                label: '%',
            },
        ],
    };

    //Asma
    const Labltab = [
        'femme', 'homme'
    ];

    const Datatab = [
        [6, 9], [10, 15], [2, 5]
    ];

    const num = 3;
    const titres = ['LMCS', 'LCSI', 'autre'];

    return (
        <div className='w-screen h-fit pb-10 bg-[#F5F5F5] flex flex-col items-center' >
            <NavBar />
            <h1 className='my-6 text-2xl text-[#13005A] text-center'>Statistique</h1>
            <Carousel />
            <div className='mt-10 mb-10 md:flex md:gap-10'>
                <DoughnutChart chartData={laboData} chartOptions={laboOptionsDoughnutChart} title='Pourcentage des doctorants par laboratoire' subTitle='Labo' />
                <DoughnutChart chartData={statusData} chartOptions={statusOptionsDoughnutChart} title='Pourcentage des doctorants selon leur Status' subTitle='Status' />
                <GaugeChart chartData={sexeData} chartOptions={sexeOptions} title='Pourcentage des doctorants par sexe' />
            </div>
            <div className='md:flex gap-4 px-3 mb-16 ml-8'>
                <GaugeChart chartData={typeDoctoratData} chartOptions={typeDoctoratOptions} title='Type du diplome des doctorants' subTitle='Diplome' />
                <BarChart chartData={barData} chartOptions={optionsBarChart} title='Nombre de Doctorants par nombre d’inscriptions' />
                <LineChart chartData={lineData} chartOptions={OptionsLineChart} title='Nombre d’inscrits par années' />
            </div>
            <div className='md:flex justify-around w-full h-fit'>
                <div className='flex flex-col items-center mb-20'>
                    <StatsGenerator />
                    <MultiBarChart LabelArray={Labltab} DataArray={Datatab} NumCritere1={num} titles={titres} />
                </div>
                <DirecteursStatsTable />
            </div>
            <DoctorantTable />
        </div >
    )
}

export default Statistique;