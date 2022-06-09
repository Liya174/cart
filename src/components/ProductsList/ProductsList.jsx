import Product from "./Product/Product";
import s from "./ProductsList.module.css";

function ProductsList({ products, setCount }) {  
  return (
    <div className={s.list}>
      {products.map((product, index) => (
          <Product 
              key={index} 
              product={product}
              setCount={setCount}
          />
      ))}
    </div>
  );
}

export default ProductsList;