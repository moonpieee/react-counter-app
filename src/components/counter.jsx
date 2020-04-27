import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

class Counter extends Component {
  render() {
    console.log("App- counter.js");

    return (
      <>
        <div className="container my-2">
          <div className="row border border-info rounded-lg p-2 shadow-lg">
            <div className="col-6 pointer">
              <h5>
                Counter :{" "}
                <span className="badge badge-warning"> {this.props.id}</span>
              </h5>
              <h5>
                Value :{" "}
                <span className="badge badge-info">{this.props.value}</span>
              </h5>
            </div>
            <div className="col-2 my-auto pointer">
              <button
                className="btn btn-success btn-sm"
                onClick={() => this.props.onIncrement(this.props.counter)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="col-2 my-auto pointer">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.props.onDecrement(this.props.counter)}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
            <div className="col-2 my-auto pointer">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.props.onDelete(this.props.counter.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          {/* {this.renderConditionalTags()} */}
        </div>
      </>
    );
  }

  renderConditionalTags() {
    if (this.state.tags.length > 0) {
      return (
        <ul className="list-group">
          {this.props.tags.map(tag => (
            <li className="list-group-item active" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      );
    } else {
      return <h3>No Tags</h3>;
    }
  }
}

export default Counter;
