import React from 'react';
import Modal from './components/Modal/Modal';
import Order from './components/Order/Order';
import ProductsList from './components/ProductsList/ProductsList';

import { fakeData } from './fakes/Fakes';
import s from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      products: fakeData.map(data => {
        return {
          ...data,
          count: 0
        }
      })
    } 
  }

  render() {   
    const { products, isModalOpen } = this.state;
    const orderProducts = products.filter(product => product.count > 0);

    return (
      <>
        <div className={s.container}>
          <ProductsList products={products} setCount={this.setCount} />
          <Order 
            products={orderProducts}
            onOrderButtonClick={this.openModal}
            />
        </div>
        {isModalOpen && 
          <Modal 
            products={orderProducts}
            onOkButtonClick={this.closeModal}/>
        }
      </>
    );
  }

  
  setCount = (newCount, id) => {
    const newData = this.state.products.map(product => {
      if (product.id === id) {
        return {
          ...product,
          count: newCount
        }
      }
      return product; 
    })

    this.setState({
      products: newData
    })
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  }
}

export default App;
