import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      steps: 1,
    };
  }

  incSteps = (steps) => {
    this.setState({
      steps: steps,
    });
  };

  maxStep = (steps) => {
    this.setState({
      steps: steps,
    });
  };

  handleIncr = () => {
    this.setState({
      counter: this.state.counter + this.state.steps,
    });
  };

  handleDecr = () => {
    this.setState({
      counter: this.state.counter - this.state.steps,
    });
  };

  handleRes = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <main className="container flex f-center">
        <div>
          <header>
            <h1>{this.state.counter}</h1>
          </header>
          <section className="flex gap-4">
            <div>
              <h2>Steps</h2>
              <div className="flex gap">
                <button
                  onClick={(e) => {
                    this.incSteps(5);
                  }}
                >
                  5
                </button>
                <button
                  onClick={(e) => {
                    this.incSteps(10);
                  }}
                >
                  10
                </button>
                <button
                  onClick={(e) => {
                    this.incSteps(15);
                  }}
                >
                  15
                </button>
              </div>
            </div>
            <div>
              <h2>Max Value</h2>
              <div className="flex gap">
                <button
                  onClick={(e) => {
                    this.maxStep(15);
                  }}
                >
                  15
                </button>
                <button
                  onClick={(e) => {
                    this.maxStep(100);
                  }}
                >
                  100
                </button>
                <button
                  onClick={(e) => {
                    this.maxStep(200);
                  }}
                >
                  200
                </button>
              </div>
            </div>
          </section>
          <footer className="flex">
            <button onClick={this.handleIncr}>Increment</button>
            <button onClick={this.handleDecr}>Decrement</button>
            <button onClick={this.handleRes}>Reset</button>
          </footer>
        </div>
      </main>
    );
  }
}

export default App;
