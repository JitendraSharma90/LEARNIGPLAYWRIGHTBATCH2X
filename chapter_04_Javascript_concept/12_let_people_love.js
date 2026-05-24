/*
let → the modern way for changing values
let is block-scoped (lives only inside { }), can be reassigned, but cannot be redeclared in the same scope. It is hoisted but not initialized, so accessing it before declaration throws a ReferenceError.
Use let when the value will genuinely change — counters, retry attempts, current page URL, etc.
*/
let a = 10;
let counter = 0;
counter = counter + 1;
//console.log(counter);
counter = counter + 1;
console.log(counter);

//let counter = 2;//X //SyntaxError: Identifier 'counter' has already been declared

//let = honest, trustworthy, not dalbadlu and redeclaration is not allowed.


//blocked scope of let
if (true) {
    let name = "Jitendra";
    console.log(name); // This will print "Jitendra"
}
console.log(name);
// This will throw a ReferenceError: name is not defined, because 'name' is block-scoped to the if statement
//console.log(name); // This will throw a ReferenceError: name is not defined, because 'name' is block-scoped to the if statement


