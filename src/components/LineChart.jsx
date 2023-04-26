import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = ({ chartData, chartOptions, title }) => {
    return (
        <div className='relative w-1/2 p-10 bg-white rounded-xl'>
            <h1 className='text-xl font-semibold text-center mb-5 '>{title}</h1>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
}

export default LineChart;