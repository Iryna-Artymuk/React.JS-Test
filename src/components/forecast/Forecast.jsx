import React, { useEffect, useState } from 'react';
import { StyledForecastWrapper } from './StyledForecast';
import 'chart.js/auto';
import { Chart as ChartJS, Filler } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';
import { convertUnixToDate } from '../../helpers/convertUnixToDate';

ChartJS.register(Filler, ChartDataLabels);

export const options = {
  responsive: true,
  tension: 0.5,
  plugins: {
    datalabels: {
      display: true,
      color: '#C5C5C5',
      fontSize: 6,
      formatter: Math.round,
      anchor: 'end',
      offset: 0,
      align: 'start',
    },
    legend: {
      display: false, // This hides all text in the legend and also the labels.
    },
  },

  scales: {
    y: {
      border: {
        display: false,
      },
      grid: {
        color: 'transparent',
      },
      ticks: {
        display: false,
      },
    },
    x: {
      border: {
        display: false,
      },
      grid: {
        color: 'transparent',
      },
      ticks: {
        fontSize: 8,
        color: '#C5C5C5',
      },
    },
  },
};

const Forecast = ({ temp, forecast, name }) => {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [date, setDate] = useState([]);
  const [forecastTemp, setForecastTemp] = useState([]);
  const [daysForecast, setDaysForecast] = useState([]);

  const getColor = temp => {
    console.log('temp : ', temp);
    if (temp < 0) {
      return '#5b8cff74 ';
    }
    if (temp > 0) {
      return '#ffa25ba6';
    }
  };

  useEffect(() => {
    const groupByDay = data => {
      const groupData = {};
      forecast?.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        if (!groupData[date]) {
          groupData[date] = item;
        }
      });
      return Object.values(groupData);
    };
    setDaysForecast(groupByDay());
  }, [forecast?.list]);

  //get chart date
  useEffect(() => {
    daysForecast.forEach(day => {
      setDate(prev => [...prev, convertUnixToDate(day.dt)]);
      setForecastTemp(prev => [...prev, Math.floor(day.main.temp)]);
    });
  }, [daysForecast]);
  useEffect(() => {
    const cahrt = () => {
      setChartData({
        labels: date,
        datasets: [
          {
            data: forecastTemp,
            //fill: true,
            borderWidth: 1,
            pointRadius: 1,
            borderColor: getColor(temp),
            backgroundColor: getColor(temp),
          },
        ],
      });
    };
    cahrt();
  }, [temp, date, forecastTemp]);
  return (
    <StyledForecastWrapper temp={temp}>
      <Line options={options} data={chartData} />
    </StyledForecastWrapper>
  );
};

export default Forecast;
