import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

class App extends React.Component {
  render() {
    return (
      <Hello
        img="https://avatars0.githubusercontent.com/u/2933430?v=3&s=460"
        name="Tyler McGinnis"
        username="tylermcginnis"
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
