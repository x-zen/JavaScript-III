/*---___The 4 Principles of 'this'___---*/


// Principle 1 (Global Binding)
/*The value of 'this' will equal the window(console) where you are running the program*/

// code example for Window Binding
  function sayName(name) {
    console.log(this);
    return name;
  }

  sayName(); //Calls console that js is running in

/*_____-----_____-----_____-----_____*/

// Principle 2 (Implicit)
/*When proceeded by a dot, the object to the left gets 'this'*/

// code example for Implicit Binding
  const myObj = {
    greeting: 'Namaste',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };

  myObj.sayHello('zen');

/*_____-----_____-----_____-----_____*/

// Principle 3 (New)
/*When using a constructor function, 'this' equals the new object that is created and returned*/

// code example for New Binding
function Boss(greeter) {
  this.greeting = 'Namaste ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

//const jerry = new CordialPerson('Newman');
//const newman = new CordialPerson('Jerry');
const zen = new Boss('Zen')
const chance = new Boss('Chance')
const web = new Boss('WEB17')

zen.speak();

/*_____-----_____-----_____-----_____*/

// Principle 4 (Explicit)
/*When call, bind, or apply methods are used, 'this' is directly defined*/

// code example for Explicit Binding(**uses above code**)

  zen.speak.call(chance)
  chance.speak.apply(web)

/*_____-----_____-----_____-----_____*/
