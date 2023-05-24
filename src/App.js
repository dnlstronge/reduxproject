import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products'
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { uiSliceActions } from './Store/UI-slice';


function App() {
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)


  // re-executes whenenever cart changes.

  useEffect(() => {
    
    const sendCartData = async() => {
      dispatch(uiSliceActions.showNotification({
        status: "PENDING",
        title: "Sending...",
        message: "Sending cart data"
      }))
     const response = await fetch("https://connectdb-1efa3-default-rtdb.europe-west1.firebasedatabase.app/cart.json", {
        method: "PUT", 
        body: JSON.stringify(cart)  })
        if(!response.ok) {
         throw new Error("Error: sending cart data failed")
        }
       dispatch(uiSliceActions.showNotification({
        status: "success",
        title: "success!",
        message: "Send cart data successful"
       }))
    }

    sendCartData().catch((error) => {
      dispatch(uiSliceActions.showNotification({
        status: "error",
        title: "error!",
        message: "Error: sending cart data failed"
      }))
    })
 
  }, [cart, dispatch])

  return (
    <Layout>
    {showCart && 
      <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
