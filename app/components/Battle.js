import React from 'react';
import ReactDOM from 'react-dom';
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Results from './Results';
import { ThemeConsumer } from '../contexts/theme';

function Instructions() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="instructions-container">
          <h1 className="center-text header-lg">INSTRUCTIONS</h1>
          <ol className="container-sm grid center-text battle-instructions">
            <li>
              <h3 className="header-sm">Enter two Github users</h3>
              <FaUserFriends
                className={`bg-${theme}`} // className will be either "bg-light" or "bg-dark" depending on what the theme is.
                color="rgb(255, 191,116)"
                size={140}
              />
            </li>
            <li>
              <h3 className="header-sm">Battle</h3>
              <FaFighterJet
                className={`bg-${theme}`}
                color="rgb(255, 191,116)"
                size={140}
              />
            </li>
            <li>
              <h3 className="header-sm">See the Winners</h3>
              <FaTrophy
                className={`bg-${theme}`}
                color="rgb(255, 191,116)"
                size={140}
              />
            </li>
          </ol>
        </div>
      )}
    </ThemeConsumer>
  );
}

/**
 * PlayerInput component will allow us to get the username from the input field. So the state that is gonna live inside of this component is the username.
 */
class PlayerInput extends React.Component {
  state = {
    username: '', // username will be empty by default.
  };

  handleSubmit = (event) => {
    event.preventDefault(); // First we want to  call preventDefault() because we don't want to have any of the normal browser events take place.

    this.props.onSubmit(this.state.username);
  };

  /**
   * Then we call whatever this.props.onSubmit is passing it what our username is.
   * 
   * <PlayerInput
                label="Player One"
                onSubmit={(player) => this.handleSubmit('playerOne', player)} // onSubmit will take the player as a parameter and then will set the id to playerOne whose value will be name of the player the user entered.
              />
  */

  handleChange = (event) => {
    this.setState({
      username: event.target.value, // handleChange will set the username to whatever input is given by the user.
    });
  };

  render() {
    console.log(`!!this.state.username: ${!!this.state.username}`);
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <form className="column player" onSubmit={this.handleSubmit}>
            <label htmlFor="username" className="player-label">
              {this.props.label}
            </label>
            <div className="row player-inputs">
              <input
                type="text"
                id="user"
                className={`input-${theme}`} // We want this to be "input-dark" if it's a dark theme & "input-light" if it's a light theme.
                placeholder="github username"
                autoComplete="off"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <button // if the theme is light, we want a dark button and if the theme is dark then we want a light buttton.
                className={`btn ${
                  theme === 'dark' ? 'light-btn' : 'light-button'
                }`}
                type="submit"
                disabled={!this.state.username} // if teh username has not been entered in the input filed, then submit button wii be diabled.
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </ThemeConsumer>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

/**
 * Anytime we use the PlayerInput component, it’s required that we pass to it an onSubmit prop(which is a function) as well as a a label prop (which is a string).
 * If these two props are not included as props or they are not of type function & string respectively, then a warning will be shown in the console.
 */

/**
 * PlayerPreview will render the:
 * player's label.  (For 1st player, label is Player One & fro 2nd player label is p layer Two)
 * player's avatar.
 * player's username (which when clicked will direct the user to the player's github link).
 * And a cross icon (*) which when clicked will execute the onReset method thereby getting us the PlayerInput component again.
 *
 * onReset={() => this.handleReset('playerOne')}      (here, playerOne id will be set to null)
 * onReset={() => this.handleReset('playerTwo')}      (here, playerTwo id will be set to null)
 * onReset method will execute the handleReset method and will set the id to null.
 */
function PlayerPreview({ username, onReset, label }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="column player">
          <h3 className="player-label">{label}</h3>
          <div className={`row bg-${theme}`}>
            <div className="player-info">
              <img
                className="avatar-small"
                src={`https://github.com/${username}.png?size=200`}
                alt={`Avatar for ${username}`}
              />
              <a href={`https://github.com/${username}`} className="link">
                {username}
              </a>
            </div>
            <button className="btn-clear flex-center" onClick={onReset}>
              <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
            </button>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

/**
 * The two players that we add are gonna be living on the state.
 * playerOne and playerTwo will be set by default to null.
 */
export default class Battle extends React.Component {
  state = {
    playerOne: null,
    playerTwo: null,
  };

  handleSubmit = (id, player) => {
    this.setState({
      [id]: player,
    });
  };

  handleReset = (id) => {
    this.setState({
      [id]: null,
    });
  };

  render() {
    const { playerOne, playerTwo } = this.state;

    /**
     * When playerOne is null i.e no value has been entered by the user, then we wnat to render PlayerInput component.
     * And if playerOne input is not null i.e the user has entered some value, then we want to render the PlayerPreview component.
     */

    return (
      <>
        <Instructions />
        <div className="players-container">
          <h1 className="center-text header-lg">Players</h1>
          <div className="row space-around">
            {playerOne === null ? (
              <PlayerInput
                label="Player One"
                onSubmit={(player) => this.handleSubmit('playerOne', player)} // onSubmit will take the player as a parameter and then will set the id to playerOne whose value will be name of the player the user entered.
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label="Player One"
                onReset={() => this.handleReset('playerOne')} // onReset will execute handleReset method which will take the id (here playerOne) and set it to null.
              />
            )}

            {playerTwo === null ? (
              <PlayerInput
                label="Player Two"
                onSubmit={(player) => this.handleSubmit('playerTwo', player)} // onSubmit will take the player as a parameter and then will set the id to playerTwo whose value will be name of the player the user entered.
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label="Player Two"
                onReset={() => this.handleReset('playerTwo')} // onReset will execute handleReset method which will take the id (here playerTwo) and set it to null.
              />
            )}
          </div>
          {playerOne &&
            playerTwo && ( // Battle element will be rendered only when the user gives input to both playerOne & playerTwo.
              <Link
                className="btn dark-btn btn-space"
                to={{
                  pathname: '/battle/results',
                  search: `?playerOne=${playerOne}&playerTwo=${playerTwo} `,
                }}
              >
                Battle
              </Link>
            )}
        </div>
      </>
    );
  }
}

/**
 * The Component Lifecycle

Every time our React app runs, all of our components go through a specific lifecycle. We can break down that lifecycle into three parts.

    1. When the component gets added to the DOM (mounting).
    2. When the component updates its state or receives new data via props (updating).
    3. When the component gets removed from the DOM (unmounting).

 * constructor(props) {
    // Good for establishing the initial state of a component
    super(props)
    this.state = {}
  }
  componentDidMount(){
    // Invoked once the component is mounted to the DOM.
    // Good for making AJAX requests.
  }
  componentDidUpdate(){
    // Invoked immediately after updating occurs.
    // Good for AJAX requests based on changing props or DOM operations.
  }
  componentWillUnmount(){
    // Called right before a component is unmounted.
    // Good for cleaning up listeners.
  }
 * 
 * 
 */
