# Notes: Strict Equality (`===`) vs Loose Equality (`==`)

---

## 1. Definitions

| Operator | Name | Type Coercion | Description |
|----------|------|:---:|---|
| `==` | Loose Equality | ✅ Yes | Converts both operands to a common type before comparing |
| `===` | Strict Equality | ❌ No | Returns `true` only if **value AND type** are identical |
| `!=` | Loose Inequality | ✅ Yes | Opposite of `==` |
| `!==` | Strict Inequality | ❌ No | Opposite of `===` |

---

## 2. Core Differences

### 2.1 Type Coercion

```js
5 == "5"   // true  — "5" is coerced to number 5
5 === "5"  // false — number ≠ string
```

### 2.2 Boolean with Numbers

```js
1 == true   // true  — true coerces to 1
1 === true  // false — number ≠ boolean
0 == false  // true  — false coerces to 0
0 === false // false — number ≠ boolean
```

### 2.3 null vs undefined

```js
null == undefined   // true  — special loose equality rule
null === undefined  // false — different types
```

### 2.4 NaN (Never Equal to Anything)

```js
NaN == NaN   // false
NaN === NaN  // false
// Use Number.isNaN(x) to check for NaN
```

### 2.5 Object Reference Comparison

```js
{} == {}   // false — different memory addresses
{} === {}  // false — different memory addresses

const a = { id: 1 };
const b = a;
a === b    // true — same reference
```

---

## 3. Quick Reference Table

| Value 1 | Value 2 | `==` | `===` |
|---------|---------|:---:|:-----:|
| `5` | `5` | ✅ | ✅ |
| `5` | `"5"` | ✅ | ❌ |
| `0` | `false` | ✅ | ❌ |
| `1` | `true` | ✅ | ❌ |
| `null` | `undefined` | ✅ | ❌ |
| `NaN` | `NaN` | ❌ | ❌ |
| `[]` | `false` | ✅ | ❌ |
| `[]` | `0` | ✅ | ❌ |
| `""` | `false` | ✅ | ❌ |
| `0` | `""` | ✅ | ❌ |
| `" "` | `0` | ✅ | ❌ |

---

## 4. Real-World Scenarios

### Scenario A: Form Input Validation

```js
function checkAge(input) {
  // ❌ BAD — loose equality
  if (input == 18) // matches "18", "18abc", etc.

  // ✅ GOOD — strict after explicit conversion
  const age = Number(input);
  if (age === 18) // exact number match only
}
```

### Scenario B: API Status Codes

```js
// ❌ BAD
if (status == 200) // matches 200, "200", true(?), etc.

// ✅ GOOD
if (status === 200)      // number 200
else if (status === "200") // string "200"
```

### Scenario C: Configuration / Feature Flags

```js
const config = { retries: 0, debug: false };

// ❌ BAD
if (config.retries == false) // true! (0 is falsy)

// ✅ GOOD
if (config.retries === 0)     // true
if (config.debug === false)   // true
```

---

## 5. Best Practice

| Rule | Recommendation |
|------|:--------------:|
| Production code | Always use `===` and `!==` |
| Type coercion | Avoid relying on `==` implicit coercion |
| null/undefined check | Use `x === null \|\| x === undefined` instead of `x == null` |

> **Golden Rule:** If you don't know which one to use, use `===`.
