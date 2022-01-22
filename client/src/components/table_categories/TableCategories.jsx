import { ResourceLoader } from '../../components/resource_loader/ResourceLoader';
import { CategoryList } from './components/category_list/CategoryList';

export const TableCategories = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
        </tr>
      </thead>
      <tbody id="table-categories">
        <ResourceLoader
          resourceUrl="http://localhost:3001/api/product_category"
          resourceName="categoriesList"
        >
          <CategoryList></CategoryList>
        </ResourceLoader>
      </tbody>
    </table>
  );
};
