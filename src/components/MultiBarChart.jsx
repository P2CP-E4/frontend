import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const MultiBarChart = ({ LabelArray, DataArray, NumCritere1, titles }) => {

    const backgroundColors = ['#FF008A', '#1C82AD', '#6044B6', '#03C988', '#F6DC4E'];
    const dataSetArray = [];

    for (let i = 0; i < NumCritere1; i++) {
        const dataSet = {
            label: titles[i],
            data: DataArray[i],
            backgroundColor: backgroundColors[i],
            borderWidth: 1
        };
        dataSetArray.push(dataSet);
    }

    const canvasRef = useRef(null);

    useEffect(() => {
        // setup
        const data = {
            labels: LabelArray,
            datasets: dataSetArray,

        };

        // config 
        const config = {
            type: 'bar',
            data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'black',
                            font: {
                                weight: 'bold'
                            }
                        }
                    },
                    x: {
                        ticks: {
                            color: 'black',
                            font: {
                                weight: 'bold' // Set the font weight of x-axis labels to bold
                            }
                        }
                    }

                },
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,

                            color: 'black',
                            font: {
                                weight: 'bold' // Set the font weight of x-axis labels to bold
                            }
                        }

                    }
                }
            }
        };

        // render init block
        const myChart = new Chart(
            canvasRef.current,
            config
        );

        // Instantly assign Chart.js version
        const chartVersion = document.getElementById('chartVersion');
        chartVersion.innerText = Chart.version;

        return () => {
            // cleanup to prevent memory leaks
            myChart.destroy();
        };
    }, [LabelArray, dataSetArray]);



    return (
        <div className='w-[500px] h-[280px]'>
            <div className="chartMenu">
                <p>  <span id="chartVersion" className='text-white'></span></p>
            </div>
            <div className="chartCard  ">
                <div className="chartBox">
                    <canvas ref={canvasRef} id="myChart"></canvas>
                </div>
            </div>
        </div>


    );
};

export default MultiBarChart;