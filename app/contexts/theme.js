import React from 'react';

const { Consumer, Provider } = React.createContext();

export const ThemeConsumer = Consumer;
export const ThemeProvider = Provider;

/**
 * React Context

Whenever we're utilizing a component architecture, as our application grows, the ability to share state amongst different components will inevitably become an issue.
Suppose, we had a piece of state that was needed throughout various levels of our application.
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

For our example, let’s say we’re building an app that is used by both English and Spanish speaking countries. 
We want to expose a button that when it’s clicked, can toggle the text of our entire application between English and Spanish.

We create a new Context for each unique piece of data that needs to be available throughout our component tree.
Provider allows us to “declare the data that we want available throughout our component tree”.x
Consumer allows “any component in the component tree that needs that data to be able to subscribe to it”.
 * 
 */
