console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
//Why we need functions in JavaScript?
//Functions help us to break down our code into smaller, reusable pieces. They allow us to organize our code better and make it more readable. Functions can take input parameters and return output values, which makes them very powerful for performing specific tasks. They also help us to avoid code duplication and make our code more maintainable. By using functions, we can write cleaner and more efficient code in JavaScript.
//Function in javascript is used for performing a specific task or a set of tasks or do a same kind of repeated task.. It is a reusable block of code that can be called multiple times with different inputs to produce different outputs. Functions help in organizing code, improving readability, and reducing redundancy by allowing us to encapsulate logic and reuse it throughout our program. They can take parameters, perform operations, and return values, making them essential for building complex applications in JavaScript.
function add(a, b) {
    return a + b;
}
var result = add(5, 10);
console.log(result); // This will print 15
//Defining a function to greet a person by their name
function greet(name) {
    return "Hello, " + name + "!";
}
//Calling function greet with different names
greet("Jitendra"); // This will return "Hello, Jitendra!"
console.log(greet("Jitendra")); // This will print "Hello, Jitendra!" to the console
greet("Anju"); // This will return "Hello, Anju!"
console.log(greet("Anju")); // This will print "Hello, Anju!" to the console
//add();
console.log(add(5, 10)); // This will print 15 to the console
//add(5);
console.log(add(5, 20)); // This will print 25 to the console


//New example of function to calculate area of a rectangle
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10)); // This will print 50 to the console
console.log(calculateArea(30, 10));
console.log(calculateArea(60, 10));
console.log(calculateArea(20, 10));
console.log(calculateArea(40, 10));
