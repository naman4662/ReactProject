import React, { Component } from "react";

class Card extends Component {
  render() {
    let getdegreeroat = Math.floor(Math.random() * 60 + 10);
    console.log("Props");
    console.log(this.props);
    return (
      <div className="mainImage">
        <div
          style={{
            transform: `rotate(${getdegreeroat}deg)`,
            zIndex: `${this.props.id}`,
            position: "absolute",
          }}
          className="imageDisplay"
        >
          {this.props.image ? (
            <img src={this.props.image} alt="Girl in a jacket" />
          ) : (
            "Loading"
          )}
        </div>
      </div>
    );
  }
}

export default Card;
