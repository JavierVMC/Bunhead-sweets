import { ResourceLoader } from '../../components/resource_loader/ResourceLoader';
import { UserList } from './components/user_list/UserList';

export const TableUsers = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Correo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Telefono</th>
          <th scope="col">Pais</th>
          <th scope="col">Ciudad</th>
          <th scope="col">Direccion</th>
          <th scope="col">Rol</th>
        </tr>
      </thead>
      <tbody id="table-users">
        <ResourceLoader
          resourceUrl="http://localhost:3001/api/user"
          resourceName="usersList"
        >
          <UserList></UserList>
        </ResourceLoader>
      </tbody>
    </table>
  );
};
