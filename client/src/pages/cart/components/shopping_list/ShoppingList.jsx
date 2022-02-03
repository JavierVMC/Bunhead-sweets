import { CartItem } from '../../../../components/cart_item/CartItem';
import { RegularList } from '../../../../components/regular_list/RegularList';

const ShoppingList = ({ cartItems }) => {
  return cartItems ? (
    <>
      <ul>
        <RegularList
          items={cartItems}
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
