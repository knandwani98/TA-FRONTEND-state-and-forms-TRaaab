import React, { Component } from "react";

class Product extends Component {
  render(props) {
    let product = this.props.details;
    let handleCart = this.props.handleCart;
    return (
      <div className="product-card">
        <div className="product-img">
          <button className="btn alert" type="">
            Free Shipping
          </button>
          <img src={"./static/products/" + product.sku + "_1.jpg"} alt="" />
          <div className="sizes-icon flex f-left">
            {product.availableSizes.map((size) => {
              return <button>{size}</button>;
            })}
          </div>
        </div>

        <div className="product-content">
          <h2>{product.title}</h2>
          <p>
            {product.currencyFormat} {product.price}
          </p>
          <button className="btn" onClick={() => handleCart(product.sku)}>
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
