import OrderList from "./OrderList/OrderList";
import OrderButton from "./OrderButton/OrderButton";

import s from "./Order.module.css";

function Order({ products, onOrderButtonClick }) { 
  const productsCount = products.reduce((prevValue, currentValue) => prevValue.count + currentValue.count, 0);
   
  return (
    <div className={s.container}>
      <div>Ваш заказ:</div>
      {productsCount === 0 
        ? <div>Пусто</div>
        : <OrderList products={products} />
      }
      <OrderButton 
        productsCount={productsCount} 
        onClick={onOrderButtonClick}/>
    </div>
  );
}
  
export default Order;
  