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
          id={cartItem.id}
          key={cartItem.id} // issue doing this
          item={{ title: cartItem.name, quantity: cartItem.quantity, total: cartItem.totalPrice, price: cartItem.price }}
        />
      )} )}
        
      </ul>
    </Card>
  );
};

export default Cart;
