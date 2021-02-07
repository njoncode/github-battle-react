import React from 'react';
import './index.css';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    );
  }
}

export default Hello;
