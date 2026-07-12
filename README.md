# Learning Playwright Batch 2X

JavaScript fundamentals workbook for a Playwright automation training course.

## Contents

### chapter_01_basics
- **01_Basics.js** — console.log, const variables, basic functions
- **02_JS.js** — variable declaration with `let`
- **03_JS_Verify_setup.js** — Node.js environment verification (OS, arch, version)
- **04_HotCode.js** — V8 hot code optimization & loop examples
- **chapter_07_Test/** — exercise placeholder

### chapter_02_javasript_concept
- **05_JS_Basics.js** — JavaScript dynamic typing demo

### chapter_03_Identifiers_Litrals
- **06_JS_Identifiers_Part1.js** — identifier rules (valid/invalid start chars)
- **07_Identifier_Part02.js** — comprehensive identifier reference: rules, 47 reserved keywords, case sensitivity, naming conventions (camelCase, PascalCase, snake_case, etc.)
- **08_Comments.js** — single-line, multi-line, JSDoc comments
- **JS_Variable_Naming_Rules.js** — exhaustive valid/invalid identifier examples
- **File_JS_Variable_Naming_Rules.html** — interactive HTML tester for variable names
- **VS_Code_Keyboard_shortcut_Windows.md** — VS Code default keyboard shortcuts for Windows

### chapter_04_Javascript_concept
- **09_Var_let_const.js** — var, let, const basic declaration examples
- **10_Javascript_functions.js** — function declaration and invocation
- **11_var_Explained.js** — var keyword deep dive
- **12_let_people_love.js** — let keyword usage and benefits
- **13_const_concept.js** — const keyword and immutability
- **14_let_FunctionScopedExample.js** — let in function scope
- **15_var_FunctionScopedExample.js** — var in function scope
- **16_Hoisting.js** — hoisting behavior with var, let, const
- **17_Hoisting_fn.js** — function hoisting examples
- **18_let_Hositing.js** — let hoisting behavior
- **19_let_hoisting_scope.js** — let hoisting and scope examples
- **20_let_const.js** — let and const comparison
- **21_Jr_QA.js** — junior QA scenarios using let/const
- **var_let_const_comparison.md** — detailed var vs let vs const comparison with code examples, scope, TDZ, and loop behavior
- **Concept_and_scenario_about_TDZ.md** — Temporal Dead Zone concepts and scenarios

### chapter_05_Literals
- **22_literals.js** — introduction to literals
- **23_NULL_Undefined.js** — null vs undefined comparison
- **24_Null.js** — null keyword deep dive
- **25_Litrals_ALL.js** — comprehensive literals overview
- **26_Literals_Number_all.js** — number literals and types
- **27_String.js** — string literals
- **28_Template_Litrals.js** — template literals and backtick syntax
- **29_Backtick_single_double.js** — comparison of string quote styles
- **29_Backtick_single_double_updated.js** — updated string quote comparison
- **30_Strict_vs_Loose_Equality.js** — strict vs loose equality with literals
- **Literals_in_JavaScript.md** — comprehensive literals documentation

### chapter_06_Operators
- **30_Operators.js** — operators introduction
- **31_Arithmatic_Operators.js** — arithmetic operators
- **32_Modulas_Operatos.js** — modulus operator examples
- **33_Exponential_Operatos.js** — exponential operator
- **34_IQ.js** — interview questions on operators
- **35_comparison_Operator.js** — comparison operators
- **36_Comaparsion_Strict_Loose.js** — strict vs loose comparison
- **37_IQ_Loose_vs_strict.js** — interview questions on loose vs strict
- **38_Confusing_Comparison.js** — confusing comparison examples
- **39_Logical_operators.js** — logical operators (&&, ||, !)
- **40_String_Concatanation_Op.js** — string concatenation operator
- **41_Ternary_operator.js** — ternary operator
- **42_Typeof_operator.js** — typeof operator
- **43_Increment_Decrement_operator.js** — increment/decrement operators
- **44_Null_Op.js** — nullish operator
- **45_Nested_Ternary_RealLife.js** — nested ternary real-life examples
- **Notes_Strict_vs_Loose_Equality.md** — notes on strict vs loose equality

### chapter_19_Playwright_Basic
- **playwright.config.ts** — Playwright configuration
- **demo-Login_OrangeHRM.js** — OrangeHRM login demo script
- **tests/example.spec.ts** — example Playwright test
- **tests/example1.spec.ts** — second example test
- **tests/codegen-tta-cart.spec.ts** — codegen cart test
- **package.json** — Playwright and TypeScript dependencies

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [VS Code](https://code.visualstudio.com/)
- [Playwright](https://playwright.dev/)

## var vs let vs const

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| **Scope** | Function-scoped | Block-scoped `{}` | Block-scoped `{}` |
| **Redeclaration** | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |
| **Reassignment** | ✅ Allowed | ✅ Allowed | ❌ Not allowed |
| **Hoisting** | Hoisted (initialized as `undefined`) | Hoisted (not initialized — TDZ) | Hoisted (not initialized — TDZ) |
| **Temporal Dead Zone** | ❌ No | ✅ Yes | ✅ Yes |
| **Global Object Property** | ✅ Added to `window` | ❌ Not added | ❌ Not added |
| **Must Initialize** | ❌ No (`var x;` → `undefined`) | ❌ No (`let x;` → `undefined`) | ✅ Yes (`const x = 1;`) |
| **Use Case** | Avoid (legacy) | Mutable variables | Constants / immutable bindings |

## Usage

Run any `.js` file with Node:
```sh
node chapter_01_basics/01_Basics.js
```

Open the interactive HTML tester:
```sh
start chapter_03_Identifiers_Litrals/File_JS_Variable_Naming_Rules.html
```

Run Playwright tests:
```sh
cd chapter_19_Playwright_Basic
npx playwright test
```
