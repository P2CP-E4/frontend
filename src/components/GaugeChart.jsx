import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const GaugeChart = ({ chartData, chartOptions, title, subTitle }) => {
    const [Lmd, Doctorat] = chartData?.datasets[0].data
    return (
        <div className='bg-white w-[350px] h-[247px] rounded-2xl relative flex flex-col justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <h1 className="absolute px-10 text-base font-black text-left top-5 left-1">{title}</h1>
            {subTitle && <h2 className='absolute text-lg font-bold top-1/2 '>{subTitle}</h2>}
            <h1 className='absolute text-[#878787] top-44 right-20 font-[550] text-lg'> {Doctorat}% </h1>
            <h1 className='absolute top-44 text-[#878787] left-20 font-[550] text-lg'> {Lmd}% </h1>
            <div className='absolute bottom-4 h-3/4'>
                <Doughnut
                    data={chartData}
                    options={chartOptions}
                />
            </div>
        </div>
    );
};

export default GaugeChart;