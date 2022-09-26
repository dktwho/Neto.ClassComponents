import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class ShopItemClass extends Component {
  
  constructor(brand,title,description,descriptionFull,price,currency) {
    super(brand,title,description,descriptionFull,price,currency)

    this.brand = brand
    this.title = title
    this.description = description
    this.descriptionFull = descriptionFull
    this.price = price
    this.currency = currency
  }
  render() {
    const item = {
      brand: 'Tiger of Sweden',
      title: 'Leonard coat',
      description: 'Minimalistic coat in cotton-blend',
      descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
      price: 399,
      currency: '£'
    }
    return (
      <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div class="description">
        {item.descriptionFull}
      </div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{item.currency}{item.price}{'.00'}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  
    )
  }
}

// ShopItemClass.propTypes = {
//   brand: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   descriptionFull: PropTypes.string,
//   currency: PropTypes.string,
//   price: PropTypes.number
// };

ShopItemClass.propTypes = {
  item: PropTypes.object
};
