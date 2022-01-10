import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { TableUsers } from '../../components/table_users/TableUsers';
import { SplitScreen } from '../../components/split_screen/SplitScreen';
import { BarChart } from '../../components/bar_chart/BarChart';
import { PieChart } from '../../components/pie_chart/PieChart';
import { LineChart } from '../../components/line_chart/LineChart';

import './adminPanel.css';

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

export const AdminPanel = () => {
  return (
    <div className="adminPanel">
      <div className="container-fluid">
        <div className="section-title">
          <h1>Panel de control</h1>
        </div>
        <SplitScreen leftWeight={1} rightWeight={6}>
          <div className="sidebar-container">
            <Sidebar></Sidebar>
          </div>
          <div className="content-admin">
            <h1>Usuarios</h1>
            <TableUsers></TableUsers>
            <BarChart
              width={800}
              height={450}
              data={usData}
              yAxisTitle={`Ordenes anuales`}
            />
            <PieChart data={data} innerRadius={0} outerRadius={200}></PieChart>
            <LineChart data={dataLineChart}></LineChart>
          </div>
        </SplitScreen>
        <Suspense>
          <Switch>
            <Route
              exact
              path="/panel-de-control/tabla-usuarios"
              component={TableUsers}
            ></Route>
            <Route
              exact
              path="/panel-de-control/tabla-productos"
              component={TableUsers}
            ></Route>
            <Route
              exact
              path="/panel-de-control/tabla-categorias"
              component={TableUsers}
            ></Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};
