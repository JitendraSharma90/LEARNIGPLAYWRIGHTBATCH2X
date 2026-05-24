var a = 10;
let b = 20;
const c = 30.5;

console.log(a);
console.log(b);
console.log(c);
var a = 40; // Re-declaring variable 'a' with var is allowed
var a = 50; // Re-declaring variable 'a' again with var is allowed
console.log(a); // This will print 50
a = 60; // Reassigning value to 'a' is allowed
console.log(a); // This will print 60

// Reassigning values

var testcase = ["signup", "login", "checkout"];
console.log(testcase);
testcase = ["search", "filter", "sort"];
console.log(testcase);

for (var i = 0; i < testcase.length; i++) {
    console.log(testcase[i]);
}

console.log("Loop counter out of the loop  i =", i); // 'i' is accessible here due to var's function scope

// let and const have block scope, so 'i' would not be accessible outside the loop if we used let instead of var