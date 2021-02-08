/*
    - Implicit Binding
    - Explicit Binding
    - new Binding
    - window Binding
*/

// Explicit Binding
// call, apply, bind

const stacey = {
  name: 'Stacey',
  age: 34,
  sayName() {
    console.log(`My name is ${this.name}`);
  },
};

stacey.sayName();

// Explicit Binding
// call

function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const user = {
  name: 'Tyler',
  age: 27,
};

greet.call(user);

/* We invoke greet by having it be invoked with the this keyword referencing the user object. 
   We can’t just do user.greet() because user doesn’t have a greet method. In JavaScript, every function contains a method which allows us to do exactly this and that method is named call.
  “call” is a method on every function that allows you to invoke the function specifying in what context the function will be invoked.
 */

// Explicit Binding
// apply

/* Now we also want to pass in some arguments. Say along with their name, we also want to display what languages they know. Something like this

function greet (l1, l2, l3) {
  alert(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}
Now in order to pass arguments to a function being invoked with .call, we pass them in one by one after we specify the first argument which is the context.
*/

function info(l1, l2, l3) {
  console.log(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  );
}

const person = {
  name: 'Tyler',
  age: 27,
};

const languages = ['JavaScript', 'Ruby', 'Python'];

info.call(person, languages[0], languages[1], languages[2]);

info.apply(person, languages);

//  .apply is the exact same thing as .call, but instead of passing in arguments one by one, we can pass in a single array and it will spread each element in the array out for us as arguments to the function.

/*
    greet.call(user, languages[0], languages[1], languages[2])
    greet.apply(user, languages)
*/

// Explicit Binding
// bind

/*
   .bind is the exact same as .call but instead of immediately invoking the function, it’ll return a new function that you can invoke at a later time.
*/

function greetings(l1, l2, l3) {
  console.log(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  );
}

const coder = {
  name: 'Tyler',
  age: 27,
};

const programming = ['JavaScript', 'Ruby', 'Python'];

const newFn = greetings.bind(
  coder,
  programming[0],
  programming[1],
  programming[2]
);
newFn(); // displays "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"

/*
In “Explicit Binding” rule, .call as well as .apply both allow us to invoke a function, specifying what the this keyword is going to be referencing inside of that function. 
The last part of this rule is .bind. 
.bind is the exact same as .call but instead of immediately invoking the function, it’ll return a new function that you can invoke at a later time.
*/
