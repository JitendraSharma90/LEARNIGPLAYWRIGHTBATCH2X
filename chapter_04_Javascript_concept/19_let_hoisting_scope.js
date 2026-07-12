//let is block scope variable and var is function scope variable
let x = "global";

if (true) {
    //TDZ - Temporal Dead Zone
    // console.log(score); // ReferenceError: Cannot access 'score' before initialization
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization

    let x = "local";
    console.log(x); // local
}
console.log(x); // global