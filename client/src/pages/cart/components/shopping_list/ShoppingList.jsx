import { CartItem } from '../../../../components/cart_item/CartItem';
import { RegularList } from '../../../../components/regular_list/RegularList';

const ShoppingList = ({ userslist }) => {
  return userslist ? (
    <>
      <ul>
        <RegularList
          items={userslist[0].cart}
          resourceName="item"
          itemComponent={CartItem}
        ></RegularList>
      </ul>
    </>
  ) : (
    <p>Cargando...</p>
  );
};

export default ShoppingList;
