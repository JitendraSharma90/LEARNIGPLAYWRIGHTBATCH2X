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
- **15_var_FunctionScopedExample.js** — var in function scope (placeholder)
- **16_Hoisting.js** — hoisting behavior with var, let, const
- **17_Hoisting_fn.js** — function hoisting examples
- **var_let_const_comparison.md** — detailed var vs let vs const comparison with code examples, scope, TDZ, and loop behavior

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
