const user = {
  name: 'Tyler',
  age: 27,
  greet() {
    console.log(`Hello,my name is ${this.name}.`);
  },
  mother: {
    name: 'Stacey',
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    },
  },
};

user.greet();
user.mother.greet();

/*
About 80% of the time, there will be an object to the “left of the dot”. That’s why the first step we should take when figuring out 
what the this keyword is referencing is to “look to the left of the dot."

Whenever we’re trying to figure out what the this keyword is referencing, we need to look to the invocation and see what’s to the “left of the dot”. 
In the first invocation, user is to the left of the dot which means this is going to reference user. 
In the second invocation, mother is to the left of the dot which means this is going to reference mother.
*/

/*
const User = function (name, age) {
  return {
    name,
    age,
    info() {
      console.log(`User Name is ${this.name} & age is ${this.age}`);
    },
  };
};

const john = new User('John', 25);
console.log(john);

const dean = new User('Dean', 30);
console.log(dean);
*/
