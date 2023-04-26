import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';
import GaugeChart from '../components/GaugeChart';
import line_chart_data from '../data/line_chart_data.json';
import DirecteursStatsTable from '../components/DirecteursStatsTable';
import Carousel from '../components/CarouselStats';
const Statistique = () => {


    const [doctorantData, setDoctorantData] = useState({
        labels: line_chart_data.map(data => data.year),
        datasets: [{
            label: "nombre d'inscrit",
            data: line_chart_data.map(data => data.inscrit),
            backgroundColor: 'transparent',
            borderColor: '#8744E1',
            pointBorderColor: 'transparent',
            tension: 0.1,
        }]
    });

    const doctorantOptionsLineChart = {
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
    const [laboData, setlaboData] = useState({
        labels: ['LMCS  12%', 'LCSI  27%', 'AUTRES  61%'],
        datasets: [{
            data: [12, 27, 61],
            backgroundColor: ['#FF008A', '#1C82AD', '#F6DC4E'],
            borderColor: ['#FF008A', '#1C82AD', '#F6DC4E'],
            label: '%',
        }]
    });

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
    const [statusData, setStatusData] = useState({
        labels: ['Inscrits  12%', 'Abondons  27%', 'Différeé  61%'],
        datasets: [{
            data: [12, 27, 61],
            backgroundColor: ['#03C988', '#FF008A', '#F6DC4E'],
            borderColor: ['#03C988', '#FF008A', '#F6DC4E'],
            label: '%',
        }]
    });
    const typeDoctoratOptions = {
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
    const [typeDoctoratData, setTypeDoctoratData] = useState({
        labels: ['Lmd              ', 'Doctorat'],
        datasets: [
            {
                data: [61, 39],
                backgroundColor: ['#F6DC4E', '#6044B6'],
                borderColor: ['#F6DC4E', '#6044B6'],
                label: '%',
            },
        ],
    });
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
    const [sexeData, setSexeData] = useState({
        labels: ['Homme              ', 'Femme'],
        datasets: [
            {
                data: [61, 39],
                backgroundColor: ['#6044B6', '#03C988'],
                borderColor: ['#6044B6', '#03C988'],
                label: '%',
            },
        ],
    });
    return (
        <div className='w-full h-[400vh] bg-[#F5F5F5]'>
            <NavBar />
            <h1 className='my-6 text-2xl text-[#13005A] text-center'>Statistique</h1>
            <Carousel />
            <div className=' mx-2 md:flex md:justify-around mt-10 mb-10'>
                <DoughnutChart chartData={laboData} chartOptions={laboOptionsDoughnutChart} title='Pourcentage des doctorants par laboratoire' subTitle='Lab' />
                <DoughnutChart chartData={statusData} chartOptions={statusOptionsDoughnutChart} title='Pourcentage des doctorants selon leur Statu' subTitle='Statu' />
                <GaugeChart chartData={sexeData} chartOptions={sexeOptions} title='Pourcentage des doctorants par sexe' />
            </div>
            <div className='mx-2 md:grid grid-rows-4 grid-cols-3 mt-10 mb-10'>
                <GaugeChart chartData={typeDoctoratData} chartOptions={typeDoctoratOptions} title='Type du diplome des doctorants' subTitle='Diplome' />
                <LineChart chartData={doctorantData} chartOptions={doctorantOptionsLineChart} title='Nombre d’inscrits par années' className=' row-span-2' />
                <LineChart chartData={doctorantData} chartOptions={doctorantOptionsLineChart} title='Nombre d’inscrits par années' className='row-span-2' />
                <div className='w-full h-full bg-yellow-500 row-span-2'>Stat Multi</div>
                <div className='w-full h-full bg-pink-500 row-span-2'>Stat Multi</div>
                <DirecteursStatsTable />
                <div className='w-full h-full bg-red-500'>Stat Multi</div>

            </div>
        </div >
    )
}

export default Statistique;