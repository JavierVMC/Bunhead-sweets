import './chartsSection.css';

import { BarChart } from '../../../../components/bar_chart/BarChart';
import { PieChart } from '../../../../components/pie_chart/PieChart';
import { LineChart } from '../../../../components/line_chart/LineChart';

import { getData } from '../../../../utils/rest_api';
import { useState } from 'react';
import { useEffect } from 'react';

export const ChartsSection = () => {
  const [barChart, setBarChart] = useState(undefined);
  const [pieChart, setPieChart] = useState(undefined);
  const [lineChart, setLineChart] = useState(undefined);

  useEffect(() => {
    async function fetchDataBarChart() {
      // You can await here
      const response = await getData(
        'http://localhost:3001/api/bar_chart/BarChart%20de%20prueba'
      );
      setBarChart(response);
    }
    async function fetchDataPieChart() {
      // You can await here
      const response = await getData(
        'http://localhost:3001/api/pie_chart/PieChart%20de%20prueba'
      );
      setPieChart(response);
    }
    async function fetchDataLineChart() {
      // You can await here
      const response = await getData(
        'http://localhost:3001/api/line_chart/LineChart%20de%20prueba'
      );
      setLineChart(response);
    }
    fetchDataBarChart();
    fetchDataPieChart();
    fetchDataLineChart();
  }, []);

  return (
    <div id="charts-section-admin">
      <h1>Graficos</h1>
      {barChart ? (
        <>
          <h2>{barChart.name}</h2>
          <BarChart
            width={800}
            height={450}
            data={barChart.data}
            yAxisTitle={`Ordenes anuales`}
          />
        </>
      ) : (
        <div>
          <p>Cargando...</p>
        </div>
      )}
      {pieChart ? (
        <>
          <h2>{pieChart.name}</h2>
          <PieChart
            data={pieChart.data}
            innerRadius={0}
            outerRadius={200}
          ></PieChart>
        </>
      ) : (
        <div>
          <p>Cargando...</p>
        </div>
      )}
      {lineChart ? (
        <>
          <h2>{lineChart.name}</h2>
          <LineChart data={lineChart.data}></LineChart>
        </>
      ) : (
        <div>
          <p>Cargando...</p>
        </div>
      )}
    </div>
  );
};
