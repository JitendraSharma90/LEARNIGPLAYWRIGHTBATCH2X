console.log(0 == ""); // true (loose equality, type coercion occurs)
console.log(0 == "0");    // false (strict equality, no type coercion)
console.log("" == "0"); //(trasitivity broken) false (strict equality, no type coercion)