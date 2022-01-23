import './chartsSection.css';

import { BarChart } from '../../../../components/bar_chart/BarChart';
import { PieChart } from '../../../../components/pie_chart/PieChart';
import { LineChart } from '../../../../components/line_chart/LineChart';

import { getData } from '../../../../utils/rest_api';
import { useState } from 'react';
import { useEffect } from 'react';

const pieChartData = [
  { label: 'Tortas', value: 30 },
  { label: 'Cupcakes', value: 25 },
  { label: 'Brownies', value: 10 },
  { label: 'Panes', value: 15 },
  { label: 'Galletas', value: 20 }
];

const lineChartData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 10 },
  { name: 'Mar', value: 50 },
  { name: 'Apr', value: 20 },
  { name: 'May', value: 80 },
  { name: 'Jun', value: 30 },
  { name: 'July', value: 0 },
  { name: 'Aug', value: 20 },
  { name: 'Sep', value: 100 },
  { name: 'Oct', value: 55 },
  { name: 'Nov', value: 60 },
  { name: 'Dec', value: 80 }
];

export const ChartsSection = () => {
  const [barChart, setBarChart] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getData(
        'http://localhost:3001/api/bar_chart/BarChart%20de%20prueba'
      );
      setBarChart(response);
    }
    fetchData();
  }, []);

  return (
    <div id="charts-section-admin">
      <h1>Graficos</h1>
      {barChart ? (
        <BarChart
          width={800}
          height={450}
          data={barChart.data}
          yAxisTitle={`Ordenes anuales`}
        />
      ) : (
        <div>
          <p>Cargando...</p>
        </div>
      )}
      <PieChart
        data={pieChartData}
        innerRadius={0}
        outerRadius={200}
      ></PieChart>
      <LineChart data={lineChartData}></LineChart>
    </div>
  );
};
