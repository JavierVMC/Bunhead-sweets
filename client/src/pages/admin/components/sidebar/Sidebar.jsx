import { Link } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = () => {
  return (
    <nav id="sidebar">
      <ul className="nav navbar-nav navbar-left">
        <li>
          <Link to="/panel-de-control/tabla-usuarios">Usuarios</Link>
        </li>
        <li>
          <Link to="/panel-de-control/tabla-productos">Productos</Link>
        </li>
        <li>
          <Link to="/panel-de-control/tabla-categorias">Categorias</Link>
        </li>
      </ul>
    </nav>
  );
};
