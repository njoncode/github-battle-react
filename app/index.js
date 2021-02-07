/*
Creating a list of <li> elements from the friends array being passed into List. Your final UI for each one should look like this.
solution */

import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
  render() {
    return (
      <ul id="friends">
        {this.props.friends.map((friend) => (
          <li key={friend.name}>{friend.name}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <List
    friends={[
      { id: 893, name: 'Mikenzi' },
      { id: 871, name: 'Cash' },
      { id: 982, name: 'Steven' },
      { id: 961, name: 'Kimmy' },
      { id: 117, name: 'Doug' },
    ]}
  />,
  document.getElementById('app')
);
