import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Mainbar from "./Components/Mainbar";
import { Component } from "react";
import data from "./data.json";
import Cart from "./Components/Cart";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sizeFilter: [],
      isCart: false,
      cart: [],
    };
  }

  handleFilter = (size) => {
    if (size === "reset") {
      return this.setState({
        sizeFilter: [],
      });
    } else {
      this.setState({
        sizeFilter: [...this.state.sizeFilter, size],
      });
    }
  };

  handleRemove = (index) => {
    let cartProducts = [...this.state.cart];
    cartProducts.splice(index, 1);

    this.setState({
      cart: cartProducts,
    });
  };

  toggleCart = () => {
    this.setState({
      isCart: !this.state.isCart,
    });
  };

  handleCart = (sku) => {
    this.setState({
      cart: [...this.state.cart, { sku: sku, quantity: 1 }],
    });
  };

  render() {
    let allSizes = data.products.reduce((acc, cv) => {
      cv.availableSizes.filter((size) => {
        if (!acc.includes(size)) {
          acc.push(size);
        }
      });
      return acc;
    }, []);

    return (
      <>
        <Header />
        <main className="container ">
          <Sidebar
            sizeFilter={this.state.sizeFilter}
            handleFilter={this.handleFilter}
            sizes={allSizes}
          />
          <Mainbar
            toggleCart={this.toggleCart}
            handleCart={this.handleCart}
            cart={this.state.cart}
            sizeFilter={this.state.sizeFilter}
            products={data.products}
          />
        </main>

        {this.state.isCart ? (
          <Cart
            toggleCart={this.toggleCart}
            handleRemove={this.handleRemove}
            products={data.products}
            cart={this.state.cart}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default App;
