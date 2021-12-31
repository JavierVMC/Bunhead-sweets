import Product from '../../../../components/product/Product';
import { RegularList } from '../../../../components/regular_list/RegularList';

const ShoppingList = ({ userslist }) => {
  return userslist ? (
    <>
      <ul>
        <RegularList
          items={userslist[0].cart}
          resourceName="product"
          itemComponent={Product}
        ></RegularList>
      </ul>
    </>
  ) : (
    <p>Cargando...</p>
  );
};

export default ShoppingList;
