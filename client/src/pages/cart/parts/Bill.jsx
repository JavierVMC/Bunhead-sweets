import { RegularList } from "../../../components/RegularList";
import { BillItem } from "../../../components/BillItem";
import Button from "@restart/ui/esm/Button";
export const Bill = ({ userslist }) => {
  let total = 0;

  if (userslist) {
    userslist[0].cart.map((product) => (total += product.price));
  }
  return userslist ? (
    <div className="outer-container" id="bill">
      <div className="bill-container">
        <span className="bill-items">Productos</span>
        <ul>
          <RegularList
            items={userslist[0].cart}
            resourceName="billItemInfo"
            itemComponent={BillItem}
          ></RegularList>
        </ul>
        <span className="subtotal-container">Subtotal: ${total}</span>
      </div>
      <div className="btn-buy">
        <Button id="buy">Comprar</Button>
      </div>
    </div>
  ) : (
    <p>Cargando...</p>
  );
};
