import s from './OrderButton.module.css';

function OrderButton({ productsCount, onClick }) {  
    return (
      <button 
        className={s.button}
        onClick={onClick} 
        disabled={productsCount === 0}
      >
        Заказать
      </button>
    );
}

export default OrderButton;
  