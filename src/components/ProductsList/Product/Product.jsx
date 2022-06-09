import s from "./Product.module.css";

const MIN_PRODUCTS_COUNT = 0;
const MAX_PRODUCTS_COUNT = 99;

function Product({ product, setCount }) {
  return (
    <div className={`${s.container} ${product.count > 0 && s.active}`}>
      <p>{product.title}</p>
      <p>{product.description}</p>
      
      <p>Цена: {product.price} руб.</p>
      
      <div className={s.counterContainer}>
        <button 
          className={s.counterButton}
          onClick={() => changeCount('remove')}
        >
          -
        </button>
        <div className={s.counter}>{product.count}</div>
        <button 
          className={s.counterButton}
          onClick={() => changeCount('add')}
        >
          +
        </button>
      </div>
    </div>
  );

  function changeCount(value) {
    let newCount = product.count;

    if (value === 'add') newCount++; 
    if (value === 'remove') newCount--;

    if (newCount <= MAX_PRODUCTS_COUNT && newCount >= MIN_PRODUCTS_COUNT) {
      return setCount(newCount, product.id)
    }
  }
}

export default Product;