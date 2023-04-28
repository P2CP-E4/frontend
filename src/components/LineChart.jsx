import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = ({ chartData, chartOptions, title }) => {
    return (
        <div className='flex flex-col items-center justify-center w-[390px] pb-5 pt-3  bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <h1 className='mt-5 mb-5 text-xl font-semibold text-center'>{title}</h1>
            <div className='w-[350px]'>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
}

export default LineChart;