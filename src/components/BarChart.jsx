import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = ({ chartData, chartOptions, title }) => {
    return (
        <div className='relative w-[390px] h-fit px-3 py-3 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <h1 className='px-10 mt-2 mb-8 text-xl font-semibold text-center'>{title}</h1>
            <div className='w-[350px]'>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </div>
    );
}

export default BarChart;