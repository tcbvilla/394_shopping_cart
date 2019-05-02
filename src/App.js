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
    this.setState(prevState => {
      product.quantity += 1;
      let n_cart = this.state.InCart
      let flag = false
      for (let i in n_cart) {
        let item = n_cart[i];
        if (item.sku === product.sku) {
          flag = true
        }
      }
      if (flag === false)
      {
        return {
          Quantity: prevState.Quantity + 1,
          InCart: prevState.InCart.concat(product),
          TotalPrice: prevState.TotalPrice + product.price


        }
      }

      else
      {
        return {
          Quantity: prevState.Quantity + 1,

          TotalPrice: prevState.TotalPrice + product.price


        }
      }

    });
    this.setState({ openCart: true })
  }

  removeProduct = product  =>{
  };


  handleToggle() {
    this.setState({ openCart: !this.state.openCart })
  }


  render() {
    return (
      <div>


        <Shelf
          SelectProduct={this.SelectProduct}
        />
        <ShoppingCart
          cartTotal={{
            Quantity: this.state.Quantity,
            TotalPrice: this.state.TotalPrice
          }}
          isOpen={this.state.openCart}
          handleToggle={this.handleToggle}
          InCart={this.state.InCart}
          removeProduct={this.removeProduct}


        />
      </div>
    )
  }
}

export default App