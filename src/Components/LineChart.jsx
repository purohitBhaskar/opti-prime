import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart  } from 'chart.js/auto';


const data = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12.24,12.26,12.28,12.30,12.32,12.34],
      fill: false,
      backgroundColor: 'rgb(37, 99, 235)',
      borderColor: 'rgba(37, 99, 235, 0.2)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [0.95, 0.97, 0.99, 1.01, 1.00, 0.98],
    //   fill: false,
    //   backgroundColor: 'rgb(29, 78, 216)',
    //   borderColor: 'rgba(29, 78, 216, 0.2)',
    // },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Genset Parameters View</h1>
      <div className='links'>
        <a className='btn' href='#'>1 Day</a>
        <a className='btn' href='#'>1 Week</a>
        <a className='btn' href='#'>1 Month</a>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
