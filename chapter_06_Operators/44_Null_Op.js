// Null>=0
console.log(null >= 0);// null == 0 or null > 0// true (null is converted to 0, and 0 >= 0 is true)

console.log(null === 0); // false (strict equality, no type coercion)
console.log(null > 0); // false (null is converted to 0, and 0 > 0 is false)
console.log(null < 0); // false (null is converted to 0, and 0 < 0 is false)

//? Nullish 

let amul = "AmulPresent";
let milk_required = amul ?? "motherDairy";  // Nullish coalescing operator
console.log(milk_required); // "motherDairy" (since amul is null, it returns the right-hand side value)


let amul = "Null";
let milk_required = amul ?? "motherDairy";  // Nullish coalescing operator
console.log(milk_required); // "motherDairy" (since amul is null, it returns the right-hand side value)
