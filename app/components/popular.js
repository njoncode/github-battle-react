import React from 'react';
import PropTypes from 'prop-types';
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { fetchPopularRepos } from '../utils/api';
import Card from './Card';
import Loading from './Loading';
import Tooltip from './Tooltip';

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  /**
   * We loop over all the languages and for each language inside of the languages array, we create a list item.
   * We give this list a key so that the react will know if anything changes inside of the list for performance reasons.
   *  Then inside of this, we render a button as this list is gonna be clickable.
   *
   * If whatever langauge we are mapping over equals whatever the selected language is on our local state, then this style is applied i.e the color is gonna be red.
   * */

  return (
    <ul className="flex-center">
      {languages.map((language) => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(language)} // When the langauge button is clicked,
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

function ReposGrid({ repos }) {
  return (
    <ul className="grid space-around">
      {repos.map((repo, index) => {
        const {
          name,
          owner,
          html_url,
          stargazers_count,
          forks,
          open_issues,
        } = repo;
        const { login, avatar_url } = owner;

        return (
          <li key={html_url}>
            <Card
              header={`#${index + 1}`}
              avatar={avatar_url}
              href={html_url}
              name={login}
            >
              <ul className="card-list">
                <li>
                  <Tooltip text="Github username">
                    <FaUser color="rgb(255,191,116)" size={22} />
                    <a href={`https://github.com/${login}`}>{login}</a>
                  </Tooltip>
                </li>
                <li>
                  <FaStar color="rgb(255,191,116)" size={22} />
                  {stargazers_count.toLocaleString()} stars
                </li>
                <li>
                  <FaCodeBranch color="rgb(255,191,116)" size={22} />
                  {forks.toLocaleString()} forks
                </li>
                <li>
                  <FaExclamationTriangle color="rgb(255,191,116)" size={22} />
                  {open_issues.toLocaleString()} open
                </li>
              </ul>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default class Popular extends React.Component {
  state = {
    selectedLanguage: 'All',
    repos: {},
    error: null,
  };

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = (selectedLanguage) => {
    this.setState({
      selectedLanguage,
      error: null,
    });

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data,
            },
          }));
        })
        .catch(() => {
          console.warn('Error fetching repos: ', error);

          this.setState({
            error: `There was an error fetching the repositories.`,
          });
        });
    }
  };

  isLoading = () => {
    const { selectedLanguage, repos, error } = this.state;
    return !repos[selectedLanguage] && error === null;
  };

  render() {
    const { selectedLanguage, repos, error } = this.state;

    return (
      <>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />

        {this.isLoading() && <Loading text="Fetching" />}

        {error && <p className="center-text error">{error}</p>}

        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </>
    );
  }
}

/**
 
 *  NOTE:
 *
 * onClick={() => onUpdateLanguage(language)}
 * We want to pass clickOn a function definition not a function invocation
 * So we pass it an arrow function. So whenevr the button is clicked on, it will invoke the fuction that we gave it.
 * And when that function is invoked, then it's gonna go ahead & invoke this.updateLanguage passing it the langiuage
 *
 *
 * onClick={() => onUpdateLanguage(language)}      ()
 * As soon as this component renders, it is gonna get to this line and then this is immediately gonna invoke updateLanguage.
 
 */

/**
 
 * updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage  
    })
  }

  * The reason we call setState (this.setState) is to let React know that:
 
 1. We should change the local state of the componnt.
 2. And it should cause a re-render which is gonna update the UI.

  updateLanguage (selectedLanguage) {
  this.state.selectedLanguage = selectedLanguage
  }

  This may be changing the selected language property on our state but becoause we are not calling setState, we are not actually cauSing re-render which is what's gonna update the UI.

  */
