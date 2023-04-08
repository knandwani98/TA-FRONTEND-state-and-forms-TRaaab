import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      step: 1,
      max: 1000000000000000000000000000000000000000000000,
    };
  }

  incSteps = (step) => {
    this.setState({
      step: step,
    });
  };

  handleMax = (max) => {
    this.setState({
      max: max,
    });
  };

  handleIncr = () => {
    let { step, max, counter } = this.state;
    this.setState({
      counter: counter + step > max ? counter : counter + step,
    });
  };

  handleDecr = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
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
            {/* Steps */}
            <div>
              <h2>Steps</h2>
              <div className="flex gap">
                {[5, 10, 15].map((step) => {
                  return (
                    <button
                      onClick={() => {
                        this.incSteps(step);
                      }}
                      className={this.state.step === step ? "active" : ""}
                    >
                      {step}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Max Value */}
            <div>
              <h2>Max Value</h2>
              <div className="flex gap">
                {[15, 100, 200].map((max) => {
                  return (
                    <button
                      onClick={() => {
                        this.handleMax(max);
                      }}
                      className={this.state.max === max ? "active" : ""}
                    >
                      {max}
                    </button>
                  );
                })}
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
