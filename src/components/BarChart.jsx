import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = ({ chartData, chartOptions, title }) => {
    return (
        <div className='relative w-[440px] p-3 bg-white rounded-xl'>
            <h1 className='mb-5 text-xl font-semibold text-center'>{title}</h1>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
}

export default BarChart;