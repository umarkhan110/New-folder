import React from "react";
// import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);
const BarChartTT = (props) => {
    // console.log(Object.values(props.props[1].value))
    // console.log(Object.keys(props.props[1].value))
    // console.log(props.props)
    // const citrus = props.props.slice(430, 550);
  const colors = props.props.slice(100, 140).map(abc => abc.value > 5 ? '#F28E2C' : '#4E79A7');
  const data = {
    labels: props.props.slice(100, 140).map((ab)=> ab.label),
    datasets: [
      {
        label: "Tickets",
        data: props.props.slice(100, 140).map((abc)=> abc.value),
        backgroundColor: colors,
        hoverBackgroundColor: "orange",
      },
      {
        label: "Tickets Less than 5",
        backgroundColor: '#4E79A7',
      },
    ],
  };
  
  const options = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: true,
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

export default BarChartTT;
