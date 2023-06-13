import React, { Component } from "react";

class Sidebar extends Component {
  render(props) {
    let sizes = this.props.sizes;
    let sizeFilter = this.props.sizeFilter;
    let handleFilter = this.props.handleFilter;
    return (
      <div className="sidebar">
        <div className="header">
          <button
            onClick={() => handleFilter("reset")}
            className="reset btn"
            type=""
          >
            Reset
          </button>
        </div>

        <section className="sizes grid">
          {sizes.map((size) => {
            return (
              <button
                className={sizeFilter.includes(size) ? "active" : ""}
                onClick={() => handleFilter(size)}
              >
                {size}
              </button>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Sidebar;
