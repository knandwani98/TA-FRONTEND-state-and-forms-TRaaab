import React, { Component } from "react";
import Product from "./Product";

class Cart extends Component {
  render(props) {
    let cart = this.props.cart;
    let allProducts = this.props.products;
    let handleRemove = this.props.handleRemove;
    let toggleCart = this.props.toggleCart;
    let subTotal = 0;

    let cartProducts = allProducts.reduce((acc, cv) => {
      cart.map((product) => {
        if (product.sku === cv.sku) {
          subTotal += cv.price;
          return acc.push(cv);
        }
      });
      return acc;
    }, []);

    return (
      <>
        <aside className="cart">
          <button onClick={toggleCart} className="toggle-cart">
            ❌
          </button>
          <h3>
            Cart
            <a className="cart-icon">
              <span className="cart-size">{cart.length}</span> 🛒
            </a>
          </h3>
          <hr />

          <div className="total flex">
            <h4>Subtotal</h4>
            <h4>${subTotal}</h4>
          </div>

          <button className="checkout">Checkout</button>

          {/* Products */}
          <section className="cart-product">
            {cartProducts.map((product, index) => {
              return (
                <>
                  <div className="flex card">
                    <div className="product-img">
                      <img
                        src={"./static/products/" + product.sku + "_2.jpg"}
                        alt=""
                      />
                    </div>

                    <div className="product-content flex">
                      <div className="cart-content">
                        <h2>{product.title}</h2>
                        <h4>
                          <span>{product.description}</span>
                        </h4>
                      </div>

                      <div className="flex footer">
                        <div className="quantity">
                          <button>+</button>
                          <button>-</button>
                        </div>
                        <p className="price">
                          {product.currencyFormat} {product.price}
                        </p>
                      </div>
                    </div>
                    <div>
                      <span
                        onClick={() => handleRemove(index)}
                        className="close"
                      >
                        ❌
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </section>
        </aside>
      </>
    );
  }
}

export default Cart;
