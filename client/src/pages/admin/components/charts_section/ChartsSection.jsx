import './chartsSection.css';

import { BarChart } from '../../../../components/bar_chart/BarChart';
import { PieChart } from '../../../../components/pie_chart/PieChart';
import { LineChart } from '../../../../components/line_chart/LineChart';

const usData = [
  {
    year: 2010,
    value: 300
  },
  {
    year: 2011,
    value: 150
  },
  {
    year: 2012,
    value: 140
  },
  {
    year: 2013,
    value: 250
  },
  {
    year: 2014,
    value: 320
  },
  {
    year: 2015,
    value: 100
  },
  {
    year: 2016,
    value: 40
  },
  {
    year: 2017,
    value: 150
  },
  {
    year: 2018,
    value: 300
  },
  {
    year: 2019,
    value: 500
  }
];

const data = [
  { label: 'Tortas', value: 30 },
  { label: 'Cupcakes', value: 25 },
  { label: 'Brownies', value: 10 },
  { label: 'Panes', value: 15 },
  { label: 'Galletas', value: 20 }
];

const dataLineChart = [
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
  return (
    <div id="charts-section-admin">
      <h1>Graficos</h1>
      <BarChart
        width={800}
        height={450}
        data={usData}
        yAxisTitle={`Ordenes anuales`}
      />
      <PieChart data={data} innerRadius={0} outerRadius={200}></PieChart>
      <LineChart data={dataLineChart}></LineChart>
    </div>
  );
};
