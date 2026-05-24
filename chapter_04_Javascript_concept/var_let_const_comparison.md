# var vs let vs const — Complete Comparison

## Comparison Table

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| **Scope** | Function-scoped | Block-scoped `{}` | Block-scoped `{}` |
| **Redeclaration** | ✅ Allowed in same scope | ❌ Syntax error | ❌ Syntax error |
| **Reassignment** | ✅ Allowed | ✅ Allowed | ❌ TypeError |
| **Hoisting** | Hoisted, initialized as `undefined` | Hoisted, **not initialized** (TDZ) | Hoisted, **not initialized** (TDZ) |
| **Temporal Dead Zone** | ❌ No | ✅ Yes | ✅ Yes |
| **Global Object Property** | ✅ Added to `window/globalThis` | ❌ Not added | ❌ Not added |
| **Must Initialize** | ❌ No (defaults to `undefined`) | ❌ No (defaults to `undefined`) | ✅ Required at declaration |
| **Iteration Binding** | Single binding (bugs in loops) | Fresh binding per iteration | N/A (can't reassign) |
| **Use Case** | ❌ Avoid in modern JS | ✅ Mutable variables | ✅ Constants / immutable bindings |

---

## 1. Scope

### var — Function-scoped
```js
function test() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 — accessible outside block
}
console.log(x);     // ReferenceError: x is not defined (function scope)
```

### let & const — Block-scoped
```js
function test() {
    if (true) {
        let y = 20;
        const z = 30;
    }
    console.log(y); // ReferenceError: y is not defined
    console.log(z); // ReferenceError: z is not defined
}
```

---

## 2. Redeclaration

### var — Allowed (bad practice)
```js
var a = 1;
var a = 2; // ✅ Works — no error
var a;     // ✅ Works — redeclared
```

### let & const — Not Allowed
```js
let b = 1;
let b = 2; // ❌ SyntaxError: Identifier 'b' has already been declared

const c = 1;
const c = 2; // ❌ SyntaxError: Identifier 'c' has already been declared
```

---

## 3. Reassignment

### var & let — Allowed
```js
var d = 1;
d = 2; // ✅

let e = 1;
e = 2; // ✅
```

### const — Not Allowed
```js
const f = 1;
f = 2; // ❌ TypeError: Assignment to constant variable
```

> **Note:** `const` only prevents reassignment of the binding. Object properties can still be mutated:
```js
const obj = { name: "John" };
obj.name = "Jane"; // ✅ Allowed (mutating property)
// obj = {};       // ❌ TypeError: reassigning the binding
```

---

## 4. Hoisting & Temporal Dead Zone (TDZ)

### var — Hoisted with `undefined`
```js
console.log(g); // undefined (not an error)
var g = 5;
```
Internally interpreted as:
```js
var g;
console.log(g); // undefined
g = 5;
```

### let & const — Hoisted but in TDZ
```js
console.log(h); // ❌ ReferenceError: Cannot access 'h' before initialization
let h = 5;

console.log(i); // ❌ ReferenceError: Cannot access 'i' before initialization
const i = 5;
```
The TDZ is the time between entering scope and the declaration. Accessing the variable in this zone throws an error.

---

## 5. Global Object Behavior

### var — Becomes a property of `window` (browser) / `globalThis`
```js
var j = 10;
console.log(window.j); // 10 (browser)
console.log(globalThis.j); // 10 (Node.js)
```

### let & const — Do NOT become global object properties
```js
let k = 10;
const l = 20;
console.log(window.k); // undefined
console.log(window.l); // undefined
```

---

## 6. Initialization Requirement

### var — Optional
```js
var m;     // ✅ m === undefined
var n = 1; // ✅ with value
```

### let — Optional
```js
let o;     // ✅ o === undefined
let p = 1; // ✅ with value
```

### const — Mandatory
```js
const q;     // ❌ SyntaxError: Missing initializer in const declaration
const r = 1; // ✅ Required
```

---

## 7. Loop Behavior

### var — Same binding shared across iterations
```js
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs.push(() => console.log(i));
}
funcs[0](); // 3  (not 0!)
funcs[1](); // 3  (not 1!)
funcs[2](); // 3  (not 2!)
```

### let — Fresh binding per iteration
```js
var funcs = [];
for (let i = 0; i < 3; i++) {
    funcs.push(() => console.log(i));
}
funcs[0](); // 0 ✅
funcs[1](); // 1 ✅
funcs[2](); // 2 ✅
```

---

## 8. When to Use Each

| Keyword | When to use |
|---|---|
| `const` | **Default choice** — Use for values that should not be reassigned (arrays, objects, functions, primitives that don't change) |
| `let` | Use when you **need to reassign** the variable (counters, accumulators, flags, swapping values) |
| `var` | **Avoid** in modern JavaScript. Only relevant for legacy code or when you need function-scoped hoisting intentionally |

### Best Practice Rule of Thumb
```
const > let > var
```
1. Start with `const`
2. If you need to reassign, change to `let`
3. Never use `var` in new code

---

## Quick Reference Code

```js
// VAR — legacy, avoid
var name = "John";
var name = "Jane";   // redeclare OK
name = "Bob";        // reassign OK
console.log(window.name); // "Bob"

// LET — use when reassignment needed
let age = 30;
// let age = 25;     // ❌ redeclare NOT OK
age = 31;            // reassign OK
// console.log(window.age); // undefined

// CONST — default choice
const PI = 3.14159;
// const PI = 3;     // ❌ redeclare NOT OK
// PI = 3;           // ❌ reassign NOT OK
// const x;          // ❌ must initialize
```
