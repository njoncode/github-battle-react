import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './hello';

export default class App extends React.Component {
  render() {
    return <Hello name="Coders - Welcome to Coding World!" tutorial="React" />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
