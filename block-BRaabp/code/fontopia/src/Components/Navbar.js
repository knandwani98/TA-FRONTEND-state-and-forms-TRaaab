import React from "react";

const Navbar = () => {
  return (
    <section className="nav container flex space-e">
      <div className="search-bar flex">
        <label for="search-bar">🔎</label>
        <input id="search-bar" placeholder="Search Fonts" />
      </div>

      <div className="sentence-bar flex">
        <label for="sentence-bar">Sentence 🔻</label>
        <input id="sentence-bar" placeholder="Type Something" />
      </div>

      <div className="size-bar flex">
        <label for="size-bar">8px 🔻</label>
        <input type="range" defaultValue="8" min={8} max={300} />
      </div>

      <div className="reset-btn">
        <button type="">🔄</button>{" "}
      </div>
    </section>
  );
};

export default Navbar;
