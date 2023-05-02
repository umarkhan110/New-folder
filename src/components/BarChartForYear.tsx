import React from "react";
// import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);
const BarChartYear = (props:any) => {
    // console.log(props)
    // const citrus = props.props.slice(430, 550);
  const colors = props.props.map(abc => abc.value > 50 ? '#F28E2C' : '#4E79A7');
  const data = {
    labels: props.props.map((ab)=> ab.label),
    datasets: [
      {
        label: "Number of Citation",
        data: props.props.map((abc)=> abc.value),
        backgroundColor: colors,
        hoverBackgroundColor: "orange",
      },
    ],
  };
  
  const options = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
      
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: true,
        },
        
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default BarChartYear;
