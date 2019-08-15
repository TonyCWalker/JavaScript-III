/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of this will be the window object.
* 2. In this principle, the value of this will be the object that is before the preceding dot in the function.
* 3. When using a constructor function, this will refer to the instance of the object that is created/returned by the constructor function.
* 4. When using call or apply, this will be defined within the call/reply function.
*
* write out a code example of each explanation above
*/


// Principle 1

// code example for Window Binding
function welcomeGuest(name){
    console.log('Welcome ' + name + '!');
}

welcomeGuest('John');

// Principle 2

// code example for Implicit Binding
const greetGuest = {
    greeting: 'Hello,',
    sayGreeting: function(name) {
        console.log(`${this.greeting} and welcome ${name}!`);
    }
}

greetGuest.sayGreeting('John');

// Principle 3

// code example for New Binding
function person(greeter) {
    this.greeting = 'Hello, and welcome ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter +'!')
    }
}

const john = new person('John');
const bob = new person('Bob');

john.speak();
bob.speak();

// Principle 4

// code example for Explicit Binding
john.speak.call(bob);
bob.speak.apply(john);

john.speak();
bob.speak();