import React from 'react';

export default class Hover extends React.Component {
  state = { hovering: false };

  mouseOver = () => this.setState({ hovering: true });

  mouseOut = () => this.setState({ hovering: false });

  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}

// Tooltip is just a way to inform the user about a specific item in the list if it's not totally clear based on the content as well as the icon.
