import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// A Component can have following aspects:
// State
// Lifecycle
// UI

class App extends React.Component {
  render() {
    return <div>Hello Shikamaru!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
