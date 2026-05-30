// Lab: String Quotes — Backtick vs Single vs Double
// File: 29_Backtick_single_double.js

// ========== DEFINITIONS ==========
// 'Single quotes'  — Basic string, no interpolation, no multi-line without \n.
//                    Best when the string contains double quotes to avoid escaping.
// "Double quotes"  — Same as single quotes functionally.
//                    Best when the string contains single quotes to avoid escaping.
// `Backtick`       — Template literal (ES6). Supports interpolation (${}),
//                    multi-line without \n, and tagged templates.
//                    Best when you need embedding, multi-line, or dynamic strings.

// ========== DIFFERENCE 1: Template Interpolation ==========
const name = "Alice";
const age = 30;

console.log("--- Template Interpolation ---");
console.log("Single:  " + name);                      // concatenation needed
console.log("Double:  " + name);                      // concatenation needed
console.log(`Backtick: ${name} is ${age} years old`); // inline expression

// ========== DIFFERENCE 2: Multi-line Strings ==========
console.log("\n--- Multi-line Strings ---");
// Single/Double — must use \n
console.log("Single/Double: line1\nline2");

// Backtick — natural newlines
console.log(`Backtick:
line1
line2`);

// ========== DIFFERENCE 3: Escaping quotes inside ==========
console.log("\n--- Escaping Quotes ---");
console.log('Single can\'t contain single without escape');
console.log("Double can't contain double without escape");
console.log("Single quotes ' inside double is fine");
console.log('Double quotes " inside single is fine');
console.log(`Backtick can contain ' and " without escape`);

// ========== DIFFERENCE 4: Tagged Templates (backtick only) ==========
console.log("\n--- Tagged Template (backtick only) ---");
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return `${acc}${str}${values[i] ? `**${values[i]}**` : ''}`;
  }, "");
}
const result = highlight`User ${name} is ${age} years old.`;
console.log("Tagged:", result);

// ========== SUMMARY ==========
console.log("\n========== SUMMARY ==========");
console.log("Feature               | Single  | Double  | Backtick");
console.log("----------------------|---------|---------|---------");
console.log("Interpolation         |   ✗     |   ✗     |   ✅ ${'${expr}'}");
console.log("Multi-line (raw)      |   ✗     |   ✗     |   ✅");
console.log("Contain ' without \\\\  |   ✗     |   ✅     |   ✅");
console.log('Contain " without \\\\  |   ✅     |   ✗     |   ✅');
console.log("Tagged templates       |   ✗     |   ✗     |   ✅");
