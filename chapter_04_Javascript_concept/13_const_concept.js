/*
const → for values that should not change
const is also block-scoped, but it cannot be reassigned and cannot be redeclared. It must be initialized at the time of declaration.
This is the default choice for an SDET — test URLs, config values, locators, expected results — anything that should remain fixed throughout the test.
*/

const BaseURL = "https://www.example.com";
BaseURL = "https://www.anotherexample.com"; // This will throw a TypeError: Assignment to constant variable.
const BaseURL = "https://www.yetanotherexample.com"; // This will throw a SyntaxError: Identifier 'BaseURL' has already been declared

//const BaseURL = "https://www.yetanotherexample.com"; // This will throw a SyntaxError: Identifier 'BaseURL' has already been declared
//TypeError: Assignment to constant variable.