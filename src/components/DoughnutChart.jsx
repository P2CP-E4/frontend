import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const DoughnutChart = ({ chartData, chartOptions, subTitle, title }) => {
    return (
        <div className='relative flex flex-col items-center bg-white rounded-xl' style={{ width: '400px', height: '247px' }}>
            <h1 className="my-5 mb-10 text-lg font-bold text-center">{title}</h1>
            <h2 className='absolute font-bold top-1/2 right-28'>{subTitle}</h2>
            <Doughnut className='-my-20' data={chartData} options={chartOptions} />
        </div >
    );
};

export default DoughnutChart;