import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { UsersSection } from './components/users_section/usersSection';
import { ProductsSection } from './components/products_section/ProductsSection';
import { CategoriesSection } from './components/categories_section/CategoriesSection';
import { ReportsSection } from './components/reports_section/ReportsSection';
import { SplitScreen } from '../../components/split_screen/SplitScreen';
import { BrowserRouter as Router } from 'react-router-dom';
import './adminPanel.css';
import { ChartsSection } from './components/charts_section/ChartsSection';

export const AdminPanel = () => {
  return (
    <div className="adminPanel">
      <div id="cabecera-controlPanel">
        <h1>Panel de control</h1>
      </div>
      <div>
        <Router>
          <SplitScreen leftWeight={1} rightWeight={7}>
            <div className="sidebar-container">
              <Sidebar></Sidebar>
            </div>
            <Suspense>
              <Switch>
                <Route
                  exact
                  path="/panel-de-control/tabla-usuarios"
                  component={UsersSection}
                ></Route>
                <Route
                  exact
                  path="/panel-de-control/tabla-productos"
                  component={ProductsSection}
                ></Route>
                <Route
                  exact
                  path="/panel-de-control/tabla-categorias"
                  component={CategoriesSection}
                ></Route>
                <Route
                  exact
                  path="/panel-de-control/graficos"
                  component={ChartsSection}
                ></Route>
                <Route
                  exact
                  path="/panel-de-control/reportes"
                  component={ReportsSection}
                ></Route>
              </Switch>
            </Suspense>
          </SplitScreen>
        </Router>
      </div>
    </div>
  );
};
