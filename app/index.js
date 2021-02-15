import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme';
import Nav from './components/Nav';
import Loading from './components/Loading';

/*
  The dynamic-import-syntax allows us import modules dynamically.
  Reactlazy allows us to render a dynamic import just as a regular component.
  So we combine those two ideas, we create these regular components, pass those as components to React Routers Route component.
  And now Popular won't be loaded until we are at the Popular path,
  Battle won't be loaded until we are at '/Battle' & 
  Results won't be loaded until we are at '/Battle/Results'.

  So using dynamic import syntax, React.lazy & React.Suspense, we can delay importing a specific module & all of the modules 
  that that module depends on, until the user actually needs that code.

*/

const Popular = React.lazy(() => import('./components/Popular'));
const Battle = React.lazy(() => import('./components/Battle'));
const Results = React.lazy(() => import('./components/Results'));

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
              <React.Suspense fallback={<Loading />}>
                {/* 
                We give Supense a prop called fallback and if these modules - Popular, Battle, Results take too long to import 
                then React.Suspense is going to show the prop that we pass to fallback (here we use Loading Component). 
                */}
                <Switch>
                  <Route exact path="/" component={Popular} />
                  <Route exact path="/battle" component={Battle} />
                  <Route path="/battle/results" component={Results} />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              </React.Suspense>
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
