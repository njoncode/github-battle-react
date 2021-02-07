import React from 'react';
import './index.css';

class Hello extends React.Component {
  render() {
    return (
      <h1>
        Hello, {this.props.name} <br /> Tutorial: {this.props.tutorial}
      </h1>
    );
  }
}

export default Hello;
