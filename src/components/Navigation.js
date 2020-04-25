import React from "react";

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="section" id={this.props.id}>
        {this.props.content}
      </div>
    );
  }
}