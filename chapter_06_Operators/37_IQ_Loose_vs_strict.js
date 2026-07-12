console.log(0 == ""); // true (loose equality, type coercion occurs)
console.log(0 == "0");    // false (strict equality, no type coercion)
console.log("" == "0"); //(trasitivity broken) false (strict equality, no type coercion)


Console.log(5!= "5"); //fale  5= int , "5" string , both of them  are not equal// false (loose equality, type coercion occurs)
console.log(5 !== "5"); // true (value or data type )one of them is true and other one is false // true (strict equality, no type coercion)

//  console.log(5 !=== "5");//this does not exist //SyntaxError: Unexpected token '==='