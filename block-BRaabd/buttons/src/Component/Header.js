import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="flex f-center gap">
            <li>
              <button type="">Basketball</button>
            </li>
            <li>
              <button type="">Cricket</button>
            </li>
            <li>
              <button type="">Laptop</button>
            </li>
            <li>
              <button type="">Phone</button>
            </li>
            <li>
              <button type="">PUBG</button>
            </li>
            <li>
              <button type="">Tiger</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
