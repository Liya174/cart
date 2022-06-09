import s from './Modal.module.css';

function Modal({ products, onOkButtonClick }) {      
  const sum = products
    .map(product => +product.price * +product.count )
    .reduce((prevValue, currentValue) => prevValue + currentValue, 0);

  return (
      <div className={s.container}>
          <div className={s.content}>
            <p>Общая стоимость заказа: {sum} руб.</p>
            <button onClick={onOkButtonClick}>Ok</button>
        </div>
      </div>
  );
}
  
export default Modal;
  