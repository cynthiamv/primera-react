import React from 'react';
import cart from '../assets/add-to-cart-button.svg';

const Tarjeta = props => {
    return (
        <div className="card">
        <div className="media">
          <img src={props.imagen} />
        </div>
        <div className="data">
          <div className="desc">
          <h2>{props.name}</h2>
          <p>{props.category}</p>
          </div>
          <div className="description">
            <p>{props.price}</p>
            <img src={cart} className="cart" />
          </div>
        </div>
      </div>
    );
};

export default Tarjeta;