import React from "react";

function OrderList({ products }) {  
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <span>{product.title}</span>
          {product.count > 1 &&
            <span>&nbsp;({product.count})</span>
          }
        </li>
      ))}
    </ul>
  );
}
  
export default OrderList;
  