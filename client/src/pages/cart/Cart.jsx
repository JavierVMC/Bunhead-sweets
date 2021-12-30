import ShoppingList from "./parts/ShoppingList";
import { SplitScreen } from "../../components/SplitScreen";
import { Bill } from "./parts/Bill";
import { ResourceLoader } from "../../components/ResourceLoader";

const Cart = () => {
  return (
    <div id="cart">
      <div className="container">
        <div className="cart-splitscreen">
          <SplitScreen leftWeight={4} rightWeight={0.5}>
            <ResourceLoader resourceUrl="/users.json" resourceName="userslist">
              <h1>Tu carrito de compra</h1>
              <ShoppingList></ShoppingList>
            </ResourceLoader>
            <ResourceLoader resourceUrl="/users.json" resourceName="userslist">
              <Bill id="bill"></Bill>
            </ResourceLoader>
          </SplitScreen>
        </div>
      </div>
    </div>
  );
};

export default Cart;
