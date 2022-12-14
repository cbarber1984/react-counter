import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("counters rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            value={counter.value}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
<div></div>;
