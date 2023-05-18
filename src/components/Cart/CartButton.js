import classes from './CartButton.module.css';
import { uiSliceActions } from '../../Store/UI-slice';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()

  const handleToggleCart = () => {
    console.log("toggle fired")
    dispatch(uiSliceActions.toggle())
  }
  return (
    <button onClick={handleToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
