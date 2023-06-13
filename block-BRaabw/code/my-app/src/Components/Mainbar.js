import React, { Component } from "react";
import Product from "./Product";

class Mainbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortby: "",
    };
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render(props) {
    let totalProducts = this.props.products;
    let sizeFilter = this.props.sizeFilter;
    let handleCart = this.props.handleCart;
    let cart = this.props.cart;
    let toggleCart = this.props.toggleCart;

    // Filter

    if (sizeFilter.length) {
      totalProducts = totalProducts.reduce((acc, cv) => {
        sizeFilter.map((size) => {
          if (cv.availableSizes.includes(size) && !acc.includes(cv)) {
            return acc.push(cv);
          }
        });

        console.log(acc, "ACC");
        return acc;
      }, []);
    }

    // Sorting
    // Lowest
    if (this.state.sortby === "Lowest") {
      totalProducts = totalProducts.sort((a, b) => a.price - b.price);
    }
    // Highest
    else if (this.state.sortby === "Highest") {
      totalProducts = totalProducts.sort((a, b) => b.price - a.price);
    }
    //

    return (
      <div className="mainbar ">
        {/* Header */}
        <section className="header container flex">
          <div className="sort">
            <select name="sortby" onChange={this.handleChange}>
              <option value="" hidden>
                SORT BY
              </option>
              <option value="Lowest">Lowest</option>
              <option value="Highest">Highest</option>
            </select>
          </div>
          <div className="flex">
            <p className="total-items">{totalProducts.length} Product found.</p>
            <button onClick={toggleCart} className="cart-icon">
              <span className="cart-size">{cart.length}</span> 🛒
            </button>
          </div>
        </section>

        {/* All Products */}
        <section className="grid products-sec">
          {totalProducts.map((product) => {
            return <Product handleCart={handleCart} details={product} />;
          })}
        </section>
      </div>
    );
  }
}

export default Mainbar;
