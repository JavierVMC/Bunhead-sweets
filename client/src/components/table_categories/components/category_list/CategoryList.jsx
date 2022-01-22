import { Category } from '../Category';
import { RegularList } from '../../../regular_list/RegularList';

export const CategoryList = ({ categoriesList }) => {
  return categoriesList ? (
    <>
      <RegularList
        items={categoriesList}
        resourceName="category"
        itemComponent={Category}
      ></RegularList>
    </>
  ) : (
    <tr>
      <td>Cargando...</td>
    </tr>
  );
};
