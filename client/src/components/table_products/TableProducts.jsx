import { ResourceLoader } from '../../components/resource_loader/ResourceLoader';
import { ProductList } from './components/product_list/ProductList';

export const TableProducts = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Categoria</th>
          <th scope="col">Descripción</th>
          <th scope="col">Precio</th>
          <th scope="col">Disponible</th>
        </tr>
      </thead>
      <tbody id="table-products">
        <ResourceLoader
          resourceUrl="http://localhost:3001/api/product"
          resourceName="productsList"
        >
          <ProductList></ProductList>
        </ResourceLoader>
      </tbody>
    </table>
  );
};
