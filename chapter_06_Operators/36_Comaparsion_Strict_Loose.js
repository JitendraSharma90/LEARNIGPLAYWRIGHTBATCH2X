//number = string (loose equality) vs number = number (strict equality)
console.log(10 == "10"); // true (loose equality, type coercion)
console.log(10 === "10"); // false (strict equality, no type coercion)

console.log(null == undefined); // true (loose equality, type coercion)
console.log(null === undefined); // false (strict equality, no type coercion)   


console.log(42 == "42");//== Loose comparison // true (loose equality, type coercion)
console.log(42 === "42"); //data type and converted value // false (strict equality, no type coercion)

console.log(0 == false); // true (loose equality, type coercion)
console.log(0 === false); // false (strict equality, no type coercion)

console.log("" == false); // true (loose equality, type coercion)
console.log("" === false); // false (strict equality, no type coercion)

console.log(5 == "");// true (loose equality, type coercion)
console.log(5 === "");// false (strict equality, no type coercion)

console.log(null == 0); // false (loose equality, type coercion)
console.log(null === 0); // false (strict equality, no type coercion)

console.log(5 == 5); // true (loose equality, type coercion)
console.log(5 === 5); // true (strict equality, no type coercion)
console.log(5 != 5); // false (loose equality, type coercion)
console.log(5 !== 5); // false (strict equality, no type coercion)

console.log(5 == "5"); // true (loose equality, type coercion
console.log(5 === "5"); // false (strict equality, no type coercion)

console(0 == ""); // true (loose equality, type coercion)
console(0 === ""); // false (strict equality, no type coercion)

console.log(false == ""); // true (loose equality, type coercion)
console.log(false === ""); // false (strict equality, no type coercion)
console.log(false == 0); // true (loose equality, type coercion
console.log(false === 0); // false (strict equality, no type coercion)
console.log(true == 1); // true (loose equality, type coercion)
console.log(true === 1); // false (strict equality, no type coercion)
console.log(true == "1"); // true (loose equality, type coercion)
console.log(true === "1"); // false (strict equality, no type coercion)
