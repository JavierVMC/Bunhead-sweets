import Product from '../../../../components/product/Product';
import { RegularList } from '../../../../components/regular_list/RegularList';

const ProductList = ({ productsList }) => {
  return productsList ? (
    <>
      <h1 className="text-left">Nuestros productos</h1>
      <ul>
        <RegularList
          items={productsList}
          resourceName="product"
          itemComponent={Product}
        ></RegularList>
      </ul>
    </>
  ) : (
    <p>Cargando...</p>
  );
};

export default ProductList;
