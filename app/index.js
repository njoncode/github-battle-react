import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/popular';

class App extends React.Component {
  render() {
    // bind, call and apply basics
    function greet(lang1, lang2) {
      console.log(`My name is ${this.name} & I know ${lang1}, ${lang2}.`);
    }

    const user = {
      name: 'Sam',
      age: 20,
    };

    const languages = ['Java', 'React'];

    // .call

    const greetConst = greet.call(user, languages[0], languages[1]);

    // .apply

    greet.apply(user, languages);

    // .bind

    const fn = greet.bind(user, languages[0], languages[1]);
    fn();
    // fn is a function

    // OR

    const greetings = greet.bind(user, languages[0], languages[1]);
    greetings();
    // greetings is a function

    return (
      <div>
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
