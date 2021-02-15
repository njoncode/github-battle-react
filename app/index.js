import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Popular from './components/Popular';
import Battle from './components/Battle';
import { ThemeProvider } from './contexts/theme';
import Nav from './components/Nav';
import Results from './components/Results';

// We can write components like this. Instead of having a constructor, we can add properties to our state just by having the syntax right here.
// Arrow function methods allow the components to prevent having to bind the method in the constructor.
class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light',
      }));
    },
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route path="/battle/results" component={Results} />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/*
 <Route Path='/' component={Popular} />    
    Whenever the user is at the index page, the component we want to render is the Popular Component.
              
 <Route Path='/battle' component={Battle} />  
    Whenever the user is at Battle, the component that we want the react router to render is the Battle component.
              
*/

/* 
  exact prop allows us to render only the Popular component when we are exactly on the home page no other nested pages. 
*/
