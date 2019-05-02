import React, { Component } from 'react'

class Item extends Component {
  render() {
    const { product } = this.props
    const img = require(`../static/photos/${product.sku}_1.jpg`)
    return (
      <div className='shelf-item' >
      <div>
        <img src={img} alt={product.title}></img>
        <p className='shelf-item__title'>{product.title}</p>
        <p className='shelf-item__price'>${product.price}</p>
      </div>
        <button onClick={() => this.props.SelectProduct(product)} className='shelf-item__buy-btn'>Add to cart</button>
      </div>
    );
  }
}

export default Item