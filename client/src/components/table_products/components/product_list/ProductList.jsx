import { Product } from '../Product';
import { RegularList } from '../../../regular_list/RegularList';

export const ProductList = ({ productsList }) => {
  return productsList ? (
    <>
      <RegularList
        items={productsList}
        resourceName="product"
        itemComponent={Product}
      ></RegularList>
    </>
  ) : (
    <tr>
      <td>Cargando...</td>
    </tr>
  );
};
