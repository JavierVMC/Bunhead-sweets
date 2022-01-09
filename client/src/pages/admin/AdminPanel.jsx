import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { TableUsers } from '../../components/table_users/TableUsers';
import { SplitScreen } from '../../components/split_screen/SplitScreen';

import './adminPanel.css';

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
