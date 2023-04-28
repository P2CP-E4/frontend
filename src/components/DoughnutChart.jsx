import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const DoughnutChart = ({ chartData, chartOptions, subTitle, title }) => {
    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseLine = 'middle'
            ctx.fillStyle = 'black';
            ctx.fillText(subTitle, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)

        }
    }
    return (
        <div className='relative flex justify-center items-end bg-white rounded-xl w-[400px] h-[247px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <h1 className="absolute text-base font-black text-center top-2">{title}</h1>
            {/* <h2 className='absolute font-bold top-1/2 right-28'>{subTitle}</h2> */}
            <Doughnut
                className='-mb-4'
                data={chartData}
                options={chartOptions}
                plugins={[textCenter]}
            />
        </div >
    );
};

export default DoughnutChart;