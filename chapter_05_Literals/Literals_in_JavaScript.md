# Literals in JavaScript

## Definition

A **literal** is a fixed value that is written directly in the source code — a concrete, hard-coded value not computed by an expression.

## Types of Literals

### 1. Numeric Literals

#### Integer Literals
```js
console.log(42);      // Decimal (base 10)
console.log(0x2A);    // Hexadecimal (base 16) — prefix 0x
console.log(0o52);    // Octal (base 8) — prefix 0o
console.log(0b101010); // Binary (base 2) — prefix 0b
console.log(1_000_000); // Numeric separator (ES2021)
```

#### Floating-point Literals
```js
console.log(3.14);     // Decimal
console.log(6.022e23); // Scientific notation (6.022 × 10²³)
console.log(1.5e-10);  // Scientific notation (1.5 × 10⁻¹⁰)
console.log(.5);       // Leading decimal (same as 0.5)
```

### 2. String Literals

```js
console.log("Hello");         // Double quotes
console.log('World');         // Single quotes
console.log(`Template ${1+1}`); // Template literal (backtick)
console.log("Line 1\nLine 2"); // Escape sequences (\n, \t, \\, \", \')
console.log("emoji: 👍");     // Unicode/emoji in string
```

### 3. Boolean Literals

```js
console.log(true);   // Boolean true
console.log(false);  // Boolean false
```

### 4. Object Literals

```js
// Object literal (key-value pairs)
const person = {
  name: "Alice",
  age: 30,
  greet() { return `Hi, I'm ${this.name}`; }
};
console.log(person.name); // "Alice"
console.log(person.greet()); // "Hi, I'm Alice"

// Shorthand property names
const x = 10, y = 20;
const point = { x, y }; // same as { x: x, y: y }

// Computed property keys
const key = "color";
const car = { [key]: "red" };
console.log(car.color); // "red"
```

### 5. Array Literals

```js
const empty = [];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null, { a: 1 }];
const nested = [[1, 2], [3, 4]];
const sparse = [1, , 3]; // holes → [1, undefined, 3]
console.log(numbers[0]); // 1
console.log(mixed[1]);   // "two"
```

### 6. Function Literals (Expressions)

```js
// Anonymous function expression
const add = function(a, b) { return a + b; };

// Arrow function expression
const multiply = (a, b) => a * b;

// IIFE — Immediately Invoked Function Expression
(function() { console.log("runs immediately"); })();

console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20
```

### 7. RegExp Literals

```js
const regex = /hello/gi;       // Pattern between slashes, flags after
console.log(regex.test("Hello World")); // true

const digits = /\d+/g;
console.log("abc123def456".match(digits)); // ["123", "456"]
```

### 8. Null Literal

```js
const value = null;
console.log(value); // null
console.log(typeof value); // "object" (historical JS quirk)
```

### 9. Undefined (Global Property, not a literal)

```js
let a;
console.log(a); // undefined

// undefined is a global variable, not a literal
// null is the actual literal for "no value"
```

### 10. BigInt Literals (ES2020)

```js
const big = 123456789012345678901234567890n; // n suffix
const another = BigInt("9007199254740991");
console.log(big);    // 123456789012345678901234567890n
console.log(typeof big); // "bigint"

// BigInt hex, octal, binary
const hex = 0x1FFFFFFFFFFFFFn;
const oct = 0o77777777777777777n;
const bin = 0b11111111111111111111111111111111111111111111111111111n;
```

## Quick Reference Table

| Type | Example | Notes |
|------|---------|-------|
| Integer | `42`, `0xFF`, `0b101`, `1_000` | Supports decimal, hex, octal, binary |
| Float | `3.14`, `1.5e-10` | Scientific notation supported |
| String | `"hi"`, `'hi'`, `` `hi` `` | Template literals allow interpolation |
| Boolean | `true`, `false` | Lowercase only |
| Object | `{ key: "value" }` | Can have methods, computed keys |
| Array | `[1, 2, 3]` | Zero-indexed, allows holes |
| Function | `function() {}`, `() => {}` | Expression form (not declaration) |
| RegExp | `/pattern/flags` | Evaluated at parse time |
| Null | `null` | Intentional absence of value |
| BigInt | `9007199254740991n` | `n` suffix, arbitrary precision |

## Real-World Usage

```js
// Configuration object (object literal)
const config = {
  apiUrl: "https://api.example.com",  // string literal
  retries: 3,                          // number literal
  debug: false,                        // boolean literal
  headers: {                           // nested object literal
    "Content-Type": "application/json"
  }
};

// API response (array literal)
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Regex validation (RegExp literal)
const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
console.log(emailRegex.test("test@example.com")); // true

// Default values (null literal)
function greet(name = null) {
  if (name === null) return "Hello, Guest!";
  return `Hello, ${name}!`;
}
```
