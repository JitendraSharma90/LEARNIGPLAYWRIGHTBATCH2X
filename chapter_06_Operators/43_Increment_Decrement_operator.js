//Pre-increment and Post-increment operator
let a = 10;
let b = ++a; // b = a + 1
console.log(a); // 11
console.log(b); // 11
let c = 20;
let d = c++; // d = c; c = c + 1
console.log(c); // 21
console.log(d); // 20  

//Pre-decrement and Post-decrement operator
let e = 30;
let f = --e; // f = e - 1
console.log(e); // 29
console.log(f); // 29
let g = 40;
let h = g--; // h = g; g = g - 1
console.log(g); // 39
console.log(h); // 40

//Other examples
let x = 10;
console.log(++x + x);
console.log(x);

console.log("----------");

let y = 10;
console.log(y++ + ++y);
console.log(y);

console.log("----------");

let z = 10;
console.log(++z + ++z);
console.log(z);

