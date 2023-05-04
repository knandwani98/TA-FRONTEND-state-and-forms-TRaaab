import React from "react";
import FormBilling from "./Components/FormBilling";
import FormShipping from "./Components/FormShipping";

class App extends React.Component {
  getData = (data) => {
    console.log(data);
  };
  render() {
    return (
      <section className="">
        <h1>Controlled Component</h1>
        <section className="grid container">
          <FormShipping data={this.getData} />
          <FormBilling />
        </section>
      </section>
    );
  }
}
export default App;
