import { RegularList } from '../../../../components/regular_list/RegularList';
import { BillItem } from '../../../../components/bill_item/BillItem';
import Button from '@restart/ui/esm/Button';
import './bill.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Bill = ({ cartItems, currentUser }) => {
  let total = 0;

  if (cartItems) {
    cartItems.map((product) => (total += product.price * product.quantity));
  }

  const [buying, setBuying] = useState(false);

  useEffect(() => {
    if (buying) {
      async function buy() {
        const response = await fetch(
          `http://localhost:3001/api/user_payment/${currentUser.user_email}`
        );
        const user_payment = await response.json();

        const response5 = await fetch(
          `http://localhost:3001/api/payment_detail/${user_payment.card_number}`
        );
        const existe = await response5.json();
        console.log(existe);
        if (!existe.length > 0) {
          const response1 = await fetch(
            'http://localhost:3001/api/payment_detail',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                card_number: user_payment.card_number,
                name: user_payment.name,
                expiry: user_payment.expiry,
                network: user_payment.network
              })
            }
          );
          await response1.json();
        }

        const response2 = await fetch('http://localhost:3001/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_email: currentUser.user_email,
            country: currentUser.country,
            city: currentUser.city,
            street: currentUser.street,
            date: new Date(),
            total: total,
            card_number: user_payment.card_number
          })
        });
        await response2.json();

        const response3 = await fetch(
          `http://localhost:3001/api/order/user/${currentUser.user_email}`
        );
        const thisOrder = await response3.json();

        cartItems.forEach(async (item) => {
          const response = await fetch(
            'http://localhost:3001/api/order_items',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                product_id: item.product_id,
                order_id: thisOrder.id,
                quantity: item.quantity
              })
            }
          );
          await response.json();
        });
      }
      buy();
    }
  }, [buying]);

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
        <Button
          id="buy"
          className={buying ? 'disable' : ''}
          disabled={buying}
          onClick={() => {
            setBuying(true);
          }}
        >
          Comprar
        </Button>
      </div>
    </div>
  ) : (
    <p>Cargando...</p>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.userR.currentUser
});

export default connect(mapStateToProps)(Bill);
