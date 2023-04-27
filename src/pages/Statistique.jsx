import React from 'react'
import NavBar from '../components/NavBar'
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import DoughnutChart from '../components/DoughnutChart';
import GaugeChart from '../components/GaugeChart';
import line_chart_data from '../data/line_chart_data.json';
import DirecteursStatsTable from '../components/DirecteursStatsTable';
import Carousel from '../components/CarouselStats';
import DoctorantTable from '../components/DoctorantsTable'

const Statistique = () => {
    const barData = {
        labels: line_chart_data.map(data => data.year),
        datasets: [{
            label: "nombre d'inscrit",
            data: line_chart_data.map(data => data.inscrit),
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
        scales: {

        }

    };
    const lineData = {
        labels: line_chart_data.map(data => data.year),
        datasets: [{
            label: "nombre d'inscrit",
            data: line_chart_data.map(data => data.inscrit),
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
        labels: ['LMCS  12%', 'LCSI  27%', 'AUTRES  61%'],
        datasets: [{
            data: [12, 27, 61],
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
        labels: ['Inscrits  12%', 'Abondons  27%', 'Différeé  61%'],
        datasets: [{
            data: [12, 27, 61],
            backgroundColor: ['#03C988', '#FF008A', '#F6DC4E'],
            borderColor: ['#03C988', '#FF008A', '#F6DC4E'],
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
        labels: ['Lmd              ', 'Doctorat'],
        datasets: [
            {
                data: [61, 39],
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
        labels: ['Homme              ', 'Femme'],
        datasets: [
            {
                data: [61, 39],
                backgroundColor: ['#6044B6', '#03C988'],
                borderColor: ['#6044B6', '#03C988'],
                label: '%',
            },
        ],
    };
    return (
        <div className='w-fit h-fit pb-10 bg-[#F5F5F5] flex flex-col items-center'>
            <NavBar />
            <h1 className='my-6 text-2xl text-[#13005A] text-center'>Statistique</h1>
            <Carousel />
            <div className='mt-10 mb-10 md:flex md:gap-10'>
                <DoughnutChart chartData={laboData} chartOptions={laboOptionsDoughnutChart} title='Pourcentage des doctorants par laboratoire' subTitle='Labo' />
                <DoughnutChart chartData={statusData} chartOptions={statusOptionsDoughnutChart} title='Pourcentage des doctorants selon leur Status' subTitle='Status' />
                <GaugeChart chartData={sexeData} chartOptions={sexeOptions} title='Pourcentage des doctorants par sexe' />
            </div>
            <div className='flex gap-4 px-3 mb-16'>
                <div className='flex flex-col gap-5'>
                    <GaugeChart chartData={typeDoctoratData} chartOptions={typeDoctoratOptions} title='Type du diplome des doctorants' subTitle='Diplome' />
                    <div className='bg-yellow-500 h-60 w-80'>Stat Multi</div>
                    <div className='bg-pink-500 h-80 w-80'>Stat Multi</div>
                </div>
                <div className='flex flex-col items-center justify-between '>
                    <BarChart chartData={barData} chartOptions={optionsBarChart} title='Nombre de Doctorants par nombre d’inscriptions' />
                    <div className='bg-red-500 h-96 w-96'>Stat Multi</div>
                </div>
                <div className='flex flex-col gap-8'>
                    <LineChart chartData={lineData} chartOptions={OptionsLineChart} title='Nombre d’inscrits par années' />
                    <DirecteursStatsTable />
                </div>
            </div>
            <DoctorantTable />
        </div >
    )
}

export default Statistique;