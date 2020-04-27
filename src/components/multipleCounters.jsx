import React, { Component } from "react";
import Counter from "./counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

class MultipleCounters extends Component {
  handleReload = () => {
    window.location.reload();
  };

  render() {
    console.log('App- multipleCounter.js');
    // Object destructing
    const { onReset, onDecrement, onIncrement, onDelete, counters, counter } = this.props;
    return (
      <>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => onReset(counter)}
        >
          <span className="m-1">Reset Counter Values to 0</span>
        </button>

        <button
          className="btn btn-sm btn-warning float-right"
          onClick={this.handleReload}
        >
          <span className="m-1">Reload App</span>
          <FontAwesomeIcon icon={faRedoAlt} />
        </button>

        {counters.map(counterObj => (
          <Counter
            key={counterObj.id}
            id={counterObj.id}
            value={counterObj.value}
            counter={counterObj}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </>
    );
  }
}

export default MultipleCounters;


