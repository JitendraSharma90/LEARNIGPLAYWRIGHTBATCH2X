//equality == vs non equiality ===
console.log(10 == "10"); // true (loose equality, type coercion)
console.log(10 === "10"); // false (strict equality, no type coercion)  
//== vs === 
console.log(null == undefined); // true (loose equality, type coercion)
console.log(null === undefined); // false (strict equality, no type coercion)   

//assignment operator
let a = 10; //a = a + 5; //15
a += 5; //a = a + 5; //20
console.log(a); //20

let a= 10;
a=15;
console.log(a); //15    
