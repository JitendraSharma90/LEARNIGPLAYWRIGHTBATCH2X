# Temporal Dead Zone (TDZ) — Concept & Real-World Scenarios

## What is TDZ?

The **Temporal Dead Zone (TDZ)** is the time between entering a scope (block/function) and the actual declaration of a `let` or `const` variable. During this period, the variable exists in the scope but **cannot be accessed** — any attempt throws a `ReferenceError`.

```
Enter scope ─────────────► Declaration ──────► Initialization completed
         ▲                       ▲
         └─── TDZ (dead zone) ───┘
         Cannot access            Can access
```

## Why does TDZ exist?

TDZ exists because `let` and `const` are **hoisted** (they occupy memory in their scope) but are **not initialized**. JavaScript deliberately throws an error to prevent the confusing behavior of `var` (which silently returns `undefined`).

## Key Characteristics

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Hoisted | ✅ | ✅ | ✅ |
| Initialized on hoist | ✅ (`undefined`) | ❌ (uninitialized) | ❌ (uninitialized) |
| Has TDZ | ❌ | ✅ | ✅ |
| Error on pre-declaration access | ❌ (returns `undefined`) | ✅ (`ReferenceError`) | ✅ (`ReferenceError`) |

## Examples

### 1. Basic TDZ — `let`

```js
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

### 2. Basic TDZ — `const`

```js
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
const y = 20;
```

### 3. TDZ is about the declaration line, not assignment

```js
let a;
console.log(a); // undefined (TDZ is over — declaration is done)
a = 5;
```

### 4. TDZ within block scope

```js
if (true) {
  console.log(temp); // ❌ ReferenceError (TDZ)
  let temp = 100;
}
```

### 5. `typeof` also throws in TDZ

```js
console.log(typeof undeclaredVar); // "undefined" (no error — never declared)
console.log(typeof myLet);         // ❌ ReferenceError (TDZ — declared but not initialized)
let myLet = 5;
```

**Note:** `typeof` on a completely undeclared variable returns `"undefined"` safely, but accessing a variable in TDZ still throws.

## Real-World Scenarios

### Scenario 1: Catching accidental re-declarations (Bug prevention)

```js
// ❌ Problem with var — overwrites accidentally
var count = 10;
function process() {
  console.log(count); // undefined (shadowed, hoisted — confusing!)
  var count = 20;
}

// ✅ Fixed with let — TDZ catches the mistake early
let count = 10;
function process() {
  console.log(count); // ❌ ReferenceError (TDZ) — developer knows something is wrong
  let count = 20;
}
```

### Scenario 2: Loop closures (the classic interview problem)

```js
// ❌ var — all closures share the same reference
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100);
}
// Output: 3, 3, 3

// ✅ let — each iteration gets its own binding (TDZ ensures isolation)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let:", i), 100);
}
// Output: 0, 1, 2
```

### Scenario 3: Conditional declaration (avoids bad patterns)

```js
function setup(condition) {
  if (condition) {
    let config = { mode: "advanced" };
    console.log(config.mode); // "advanced"
  }
  // console.log(config); // ❌ ReferenceError — config doesn't exist here
  // TDZ + block scope prevents leaking internals outside the block
}
```

### Scenario 4: Module initialization order

```js
// ❌ Fragile ordering with var
var apiKey = getKey();
var service = createService(apiKey); // relies on apiKey being initialized

// ✅ Safe ordering with const — TDZ forces correct declaration order
const apiKey = getKey();
const service = createService(apiKey); // compiler guarantees apiKey is initialized above
```

### Scenario 5: Swapping variables with destructuring (feature interaction)

```js
let a = 1;
let b = 2;

// Array destructuring swap — works because all values are evaluated
// before any assignment (no TDZ issue here)
[a, b] = [b, a];
// a = 2, b = 1
```

## TDZ with `const` — Immutable Binding

`const` shares all TDZ rules with `let`, plus it **must be initialized at declaration**:

```js
const z; // ❌ SyntaxError: Missing initializer in const declaration
```

```js
// TDZ applies to const too
console.log(z); // ❌ ReferenceError
const z = 100;
```

## Common Misconceptions

1. **"let and const are not hoisted"** — They ARE hoisted, but stay in TDZ until the declaration line.
2. **"TDZ means the variable doesn't exist"** — It exists in the scope; accessing it throws because it's uninitialized.
3. **"TDZ only applies to let"** — Applies to both `let` and `const`.

## Best Practices

- ✅ Use `const` by default, `let` when reassignment is needed
- ✅ Declare all variables at the **top** of their scope to minimize TDZ
- ✅ Avoid `var` entirely in modern JavaScript
- ❌ Never rely on hoisting for program logic
- ✅ Use block scoping (`{}`) intentionally to limit variable lifetime
