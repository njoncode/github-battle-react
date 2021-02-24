import React from 'react';
import PropTypes from 'prop-types';

/**
 * Whenever we create a component that accepts props, we’ll add a static propTypes property to that component.
 * propTypes will be an object whose keys represent the props the component accepts and whose values represent the data types for those props.
 * During development, if a prop being passed to a component doesn’t match the data type specified in propTypes, a warning will be shown in the console.
 */

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default class Loading extends React.Component {
  state = { content: this.props.text };

  componentDidMount() {
    const { speed, text } = this.props;

    this.interval = window.setInterval(() => {
      this.state.content === `${text}...`
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({ content: `${content}.` })); // We are updating the new piece of state based on the previous piece of state which is content, we are gonna pass it a function.
    }, speed);
  }

  /**
   * Suppose current state is "Fetching" (we are taking text as "Fetching"), then updated states will be Fetching. ,  Fetching.. , Fetching...
   * After "Fetchin...", state will be "Fetching" and then it will continue like Fetching. , Fetching.. , Fetchin... , Fetching and so on until the page gets loaded.
   */

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p style={styles.content}>{this.state.content}</p>;
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
};
