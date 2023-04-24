import React from "react";
import Model from "./Model";
import data from "../data.json";

class Main extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      activeMovie: "",
    };
  }

  toggleModel = (movie) => {
    this.setState({
      activeMovie: movie,
    });
  };

  render() {
    return (
      <>
        <section className="main-container container">
          <h1>All Movies</h1>
          <ul className="all-movies grid gap">
            {data.map((movie) => {
              return (
                <li className="card">
                  <article>
                    <div className="cover">
                      <img className="main" src={movie.Images[2]} alt="" />
                      <div className="hover flex f-center">
                        <button onClick={() => this.toggleModel(movie)} type="">
                          More Info
                        </button>
                        <Model params={movie} />
                      </div>
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
      </>
    );
  }
}

export default Main;
