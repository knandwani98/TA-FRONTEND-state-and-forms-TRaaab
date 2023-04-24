import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: "home",
    };
  }

  handleMenu = (menu) => {
    this.setState({
      activeMenu: menu,
    });
  };

  render() {
    let menu = ["home", "contact", "about"];
    return (
      <aside className="sidebar">
        <nav>
          <ul className="">
            {menu.map((nav) => {
              return (
                <li>
                  <button
                    className={this.state.activeMenu === nav ? "active" : ""}
                    onClick={() => this.handleMenu(nav)}
                    type=""
                  >
                    {nav}
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="hide" type="">
            Hide
          </button>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
