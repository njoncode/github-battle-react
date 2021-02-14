import React from 'react';
import PropTypes from 'prop-types';
import Hover from './Hover';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  },

  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  },
};

export default function Tooltip({ text, children }) {
  return (
    <Hover>
      {(hovering) => (
        <div style={styles.container}>
          {hovering === true && <div style={styles.tooltip}>{text}</div>}
          {children}
        </div>
      )}
    </Hover>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

/* How to share logic throughout our application:

  (1) Higher Order Component pattern
  (2) Render Props pattern 

Render Props Pattern is better than Higher Order Component pattern for sharing logic throughout our application.
*/
