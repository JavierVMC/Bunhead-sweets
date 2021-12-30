import Product from "../../../components/Product";
import { RegularList } from "../../../components/RegularList";

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
