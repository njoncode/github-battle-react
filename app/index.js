import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/popular';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

// class is a reserved word in javascript. So if we want to add a class to a specific JSX element, we need to use className instead of class.
