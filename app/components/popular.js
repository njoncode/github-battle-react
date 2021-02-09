import React from 'react';

export default class Popular extends React.Component {
  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className="flex-center">
        {languages.map((language) => (
          <li key={language}>
            <button onClick={() => this.updateLanguage(language)}>
              {language}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
