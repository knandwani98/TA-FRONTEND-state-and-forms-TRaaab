import React from "react";

const Model = (params) => {
  return (
    <section className={this.state.activeMovie ? "model" : "none"}>
      <div className="box">
        <button onClick={() => this.toggleModel("")} className="cross" type="">
          x
        </button>
        <p>{params}</p>
      </div>
    </section>
  );
};

export default Model;
