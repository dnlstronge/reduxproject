import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';



const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {cartItems.map((cartItem) => {return (
        <CartItem
          item={{ title: cartItem.name, quantity: cartItem.quantity, total: cartItem.totalPrice, price: 6 }}
        />
      )} )}
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
