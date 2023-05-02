import React from "react";
import Card from "./Card";

const Navbar = () => {
  let fonts = [
    "Roboto",
    "Poppins",
    "Vina Sans",
    "Lato",
    "Bruno Ace",
    "Oswald",
    "Playfair Display",
    "Josefin Sans",
    "Anton",
    "Lobster",
  ];
  return (
    <>
      <section className="nav  flex space-e">
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

      {/* SPAN */}

      <span>{fonts.length + " of " + fonts.length + " families"}</span>

      {/* ALL_ CARDS SECTION */}
      <section className="container grid gap col-3-1">
        {fonts.map((font) => {
          return <Card font={font} />;
        })}
      </section>
    </>
  );
};

export default Navbar;
