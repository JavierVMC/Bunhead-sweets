import { User } from '../User';
import { RegularList } from '../../../regular_list/RegularList';

export const UserList = ({ usersList }) => {
  return usersList ? (
    <>
      <RegularList
        items={usersList}
        resourceName="user"
        itemComponent={User}
      ></RegularList>
    </>
  ) : (
    <tr>
      <td>Cargando...</td>
    </tr>
  );
};
