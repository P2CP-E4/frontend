import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const DoughnutChart = ({ chartData, chartOptions, subTitle, title }) => {
    return (
        <div className='relative flex justify-center items-end bg-white rounded-xl w-[400px] h-[247px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <h1 className="absolute text-base font-black text-center top-2">{title}</h1>
            <h2 className='absolute font-bold top-1/2 right-28'>{subTitle}</h2>
            <Doughnut className='-mb-4' data={chartData} options={chartOptions} />
        </div >
    );
};

export default DoughnutChart;