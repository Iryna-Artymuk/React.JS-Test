import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import { Chart as ChartJS, Filler } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';

import { convertUnixToDate } from '../../helpers/convertUnixToDate';
import { getGraphColor } from '../../helpers/getGraphColor';
import { getForecastWeather } from '../../api';

import { StyledForecastWrapper } from './StyledForecast';

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

const Forecast = ({ temp, data }) => {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [date, setDate] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [forecastTemp, setForecastTemp] = useState([]);
  const [daysForecast, setDaysForecast] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const responce = await getForecastWeather(
          data.coordinates?.lat,
          data.coordinates?.lng
        );

        setForecast(responce);
      } catch (Error) {
        // setError(Error);
        console.log(Error.message);
      } finally {
      }
    };
    getWeather();
  }, [data?.lat, data?.lon]);
  useEffect(() => {
    const groupByDay = data => {
      const groupData = {};
      forecast?.list?.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        if (!groupData[date]) {
          groupData[date] = item;
        }
      });
      return Object.values(groupData);
    };
    const group = groupByDay();

    setDaysForecast(group);
  }, [forecast?.list]);

  //get chart date
  useEffect(() => {
    'hello';
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
            borderColor: getGraphColor(temp),
            backgroundColor: getGraphColor(temp),
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
