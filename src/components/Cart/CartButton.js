import classes from './CartButton.module.css';
import { uiSliceActions } from '../../Store/UI-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)
  const handleToggleCart = () => {
    console.log("toggle fired")
    dispatch(uiSliceActions.toggle())
  }
  return (
    <button onClick={handleToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
