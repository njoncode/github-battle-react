import React from 'react';
import ReactDOM from 'react-dom';

// Adding State
// To add state to a class component, we’ll use the constructor method.

/*

  We call super(props) in the constructor. 
  super refers to the constructor method of the class you’re extending, in this case, React.Component. 
  We can’t use this in a constructor until after we’ve called super.

  Next, we add state to our class component by adding a state property on the component’s instance, this. 
  By adding state to the instance, we can now access it (via this.state) anywhere in your class.

  
  Updating State

  In React, our View is a function of our State. 
  We don’t need to worry about updating the DOM because React will do that for us whenever the state of our component changes. 
  If we update the state directly ourselves, React will have no idea that the component’s state changed and therefore won’t be able to update the UI.

  
  React gives you a helper method we can use to update the state of our component (and re-render the UI). It’s called setState and it lives on the component’s instance, this. 
  There are two forms of setState. The first, and most popular, accepts an object as its first argument that is merged with the current state.

  When the updateName method is invoked, React will update the name property on the component’s state to be whatever newName is. 
  Then, because the state changed, React will re-invoke the render method and get a new description of the UI based on the new state. 
  Finally, with that new description of the UI, React will update the DOM.

  We use .bind inside of the constructor to say “whenever updateName is invoked, always make sure it’s invoked in the context of the current component.
  
*/

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Tyler',
    };

    this.updateName = this.updateName.bind(this);
  }

  updateName() {
    this.setState({
      name: 'John Smith',
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <h2>Welcome</h2>
        <button onClick={this.updateName}>Change Name</button>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));
