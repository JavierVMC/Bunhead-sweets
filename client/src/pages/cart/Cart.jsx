import ShoppingList from './components/shopping_list/ShoppingList';
import { SplitScreen } from '../../components/split_screen/SplitScreen';
import { Bill } from './components/bill/Bill';
import { ResourceLoader } from '../../components/resource_loader/ResourceLoader';
import { connect } from 'react-redux';
import './cart.css';

const Cart = ({currentUser}) => {
  return (
    <div id="cart">
      <div className="container">
        <div className="cart-splitscreen">
          <SplitScreen leftWeight={4} rightWeight={0.5}>
            <ResourceLoader resourceUrl={`http://localhost:3001/api/cart/usercart/${currentUser.user_email}`} resourceName="cartItems">
              <h1>Tu carrito de compra</h1>
              <br></br>
              <ShoppingList></ShoppingList>
            </ResourceLoader>
            <ResourceLoader resourceUrl={`http://localhost:3001/api/cart/usercart/${currentUser.user_email}`} resourceName="cartItems">
              <Bill id="bill"></Bill>
            </ResourceLoader>
          </SplitScreen>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.userR.currentUser
});


export default connect(mapStateToProps)(Cart);
