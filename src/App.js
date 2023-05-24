import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {

  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  

  // re-executes whenenever cart changes.

  useEffect(() => {
    const sendCartData = async() => {
     const response = await fetch("https://connectdb-1efa3-default-rtdb.europe-west1.firebasedatabase.app/cart.json", {
        method: "PUT", 
        body: JSON.stringify(cart)  })
    }
   
  }, [cart])

  return (
    <Layout>
    {showCart && 
      <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
