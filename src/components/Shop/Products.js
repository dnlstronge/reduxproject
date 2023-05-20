import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 14.50,
    title: "First Book",
    description: "A man goes for a walk and gets lost",
  },
  {
    id: "p2",
    price: 13.50,
    title: "A Novel Approach",
    description: "A man goes for a swim and finds a dog"
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_PRODUCTS.map((item) => {
        return (
          <ProductItem
          title={item.title}
          price={item.price}
          description={item.description}
        />
        )
      })}
        
      </ul>
    </section>
  );
};

export default Products;
