import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';


const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const newTotalQuantity = cart.totalQuantity +1
    const updatedItems = cart.items.slice() // create copy via slice to avoid mutation
    const existingItem = updatedItems.find((item) => item.id === id)

    if(existingItem) {
      const updatedItem = {...existingItem} // new object plus copy existing properties
    }
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
