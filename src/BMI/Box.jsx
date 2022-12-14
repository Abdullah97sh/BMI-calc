import React, { Component } from "react";

class Box extends Component {
    
  showResult = () => {
    if (this.props.result < 18.5) {
      return "Underweight";
    } else if (this.props.result < 24.9) {
      return "Normal weight";
    } else if (this.props.result < 29.9) {
      return "Overweight";
    } else if (this.props.result >= 30) {
      return "Obesity";
    }
  };
  render() {
    return (
      <div>
        <h2>The Result is {this.props.result.toFixed(2)}</h2>
        <h2>You Are {this.showResult()}</h2>
      </div>
    );
  }
}
export default Box;
