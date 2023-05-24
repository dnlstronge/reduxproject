import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {

  const showCart = useSelector((state) => state.ui.cartIsVisible)
  useSelector((state) => state.cart)

  return (
    <Layout>
    {showCart && 
      <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
