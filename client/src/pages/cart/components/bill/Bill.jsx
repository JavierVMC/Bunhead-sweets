import { RegularList } from '../../../../components/regular_list/RegularList';
import { BillItem } from '../../../../components/bill_item/BillItem';
import Button from '@restart/ui/esm/Button';
import './bill.css';

export const Bill = ({ cartItems }) => {
  let total = 0;
  
  if (cartItems) {
    cartItems.map((product) => (total += product.price));
  }
  
  return cartItems ? (
    <div className="outer-container" id="bill">
      <div className="bill-container">
        <span className="bill-items">Productos</span>
        <br></br>
        <ul>
        <RegularList
            items={cartItems}
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
