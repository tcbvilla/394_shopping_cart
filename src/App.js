import React, { Component } from 'react'
import { products } from './static/data/products'
import './shopping_cart.scss'
import Shelf from './components/shelf'
import ShoppingCart from './components/cart'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quantity: 0,
      InCart: [],
      TotalPrice: 0,
      openCart: false
    };
    this.handleToggle = this.handleToggle.bind(this)
    this.SelectProduct = this.SelectProduct.bind(this)
  }


  SelectProduct(product) {

  }

  removeProduct = product  =>{
  };


  handleToggle() {
    this.setState({ openCart: !this.state.openCart })
  }


  render() {
    return (
      <div>


      </div>
    )
  }
}

export default App