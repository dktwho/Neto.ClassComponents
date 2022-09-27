import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { item } from '../App';



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
    
    return (
      <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">
        {item.descriptionFull}
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{item.currency}{item.price}{'.00'}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  
    )
  }
}

ShopItemClass.propTypes = {
  item: PropTypes.object
};
