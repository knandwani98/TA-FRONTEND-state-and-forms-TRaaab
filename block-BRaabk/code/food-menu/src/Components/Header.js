import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "",
    };
  }

  handleClick = (category) => {
    this.setState({
      activeCategory: category,
    });
  };

  render(props) {
    return (
      <header className="container">
        <h1>Our Menu</h1>
        <hr />
        <nav>
          <ul className="flex gap f-center">
            <li>
              <button className="active">all</button>
            </li>
            {props.categories.map((category) => {
              return (
                <li>
                  <button onClick={() => this.handleClick(category)} type="">
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
