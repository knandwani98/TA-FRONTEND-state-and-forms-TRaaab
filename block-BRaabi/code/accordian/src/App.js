import React from "react";

class App extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      activeLang: "",
    };
  }

  handleClick = (Q) => {
    this.setState({
      activeQ: Q,
    });
  };

  render() {
    let questions = [
      {
        Q: "Who is it for?",
        A: "Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.",
      },
      {
        Q: "Does AltCampus help me get a job?",
        A: "Yes. All we can. We help you at every stage, help you build strong portfolio, prepare for interviews, put you in touch with companies for interview.",
      },
      {
        Q: "How does the entire process work?",
        A: "You can read about it here - How it works.",
      },
      {
        Q: "Is this course self-paced or batched?",
        A: "This program follows a blended approach. Students can move at their own pace, however they will be matched with peers learning same concepts.",
      },
    ];
    return (
      <section className="container">
        <h1>Accordian</h1>
        <ul>
          {questions.map((allQ) => {
            return (
              <li
                onClick={() => {
                  this.handleClick(allQ.Q);
                }}
              >
                <div
                  className={
                    this.state.activeQ === allQ.Q ? "ques active" : "ques"
                  }
                >
                  {allQ.Q}{" "}
                  <span>
                    {this.state.activeQ === allQ.Q ? (
                      <i class="fa-solid fa-sort-down"></i>
                    ) : (
                      <i class="fa-solid fa-sort-up"></i>
                    )}
                  </span>
                </div>
                <p className={this.state.activeQ === allQ.Q ? "ans" : "none"}>
                  {allQ.A}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default App;
