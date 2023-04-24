import React from "react";
import data from "../data.json";

const Main = () => {
  return (
    <section className="main-container container">
      <h1>All Movies</h1>
      <ul className="all-movies grid gap">
        {data.map((movie, i) => {
          return (
            <li className="card">
              <article>
                <div className="cover">
                  <img className="main" src={movie.Images[2]} alt="" />
                  <img className="hover" src={movie.Images[1]} alt="" />
                </div>
                <div className="flex">
                  <h2>{movie.Title}</h2>
                  <h3>{movie.Year}</h3>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Main;
