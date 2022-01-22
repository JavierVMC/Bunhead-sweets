import { TableUsers } from '../../../../components/table_users/TableUsers';
import './usersSection.css';

export const UsersSection = () => {
  return (
    <div id="users-section-admin">
      <h1>Usuarios</h1>
      <TableUsers></TableUsers>
    </div>
  );
};
