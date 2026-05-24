console.log(20); // ReferenceError: Cannot access 'a' before initialization

var a = 10; // Global Scope
console.log(a);


var greeting;           // <-- hoisted with undefined
console.log(greeting);
greeting = "Hello!";
console.log(greeting);

// Behind the scenes:

// var greeting;           <-- hoisted with undefined
// console.log(greeting);  <-- undefined
// greeting = "Hello!";    <-- assignment stays in place
// console.log(greeting);  <-- "Hello!"


// var a;
console.log(a);
var a = "Pramod";
console.log(a);
