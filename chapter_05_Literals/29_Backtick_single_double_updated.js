// Lab: Backtick vs Single vs Double (Simple)
// File: 29_Backtick_single_double_updated.js

// ========== DEFINITIONS ==========
// Single ('') — Simple string, no interpolation, no raw multi-line
// Double ("") — Same as single, no interpolation, no raw multi-line
// Backtick (``) — Template literal with interpolation, multi-line, tagged templates

const name = "Alice";
const age = 30;

// 1. INTERPOLATION
console.log("1. Interpolation:");
console.log('Single: ' + name + ' is ' + age);           // concatenation needed
console.log("Double: " + name + " is " + age);           // concatenation needed
console.log(`Backtick: ${name} is ${age}`);              // inline ${expr}

// 2. MULTI-LINE
console.log("\n2. Multi-line:");
console.log("Single/Double: line1\\nline2");
console.log(`Backtick:
line1
line2`);

// 3. ESCAPING QUOTES
console.log("\n3. Quotes inside:");
console.log('Single needs \\\' for single inside');       // \' needed
console.log("Double works ' inside fine");                // no escape
console.log("Double needs \\\" for double inside");       // \" needed
console.log('Single works " inside fine');                // no escape
console.log(`Backtick works ' and " without escape`);     // no escape

// 4. TAGGED TEMPLATES (backtick only)
console.log("\n4. Tagged template (backtick only):");
function highlight(strings, ...vals) {
  return strings.reduce((acc, s, i) => `${acc}${s}${vals[i] ? `[${vals[i]}]` : ""}`, "");
}
console.log(highlight`User ${name}, Age ${age}`);

// ========== QUICK REFERENCE ==========
console.log("\nFeature           | Single | Double | Backtick");
console.log("------------------|--------|--------|---------");
console.log("Interpolation     |   ✗    |   ✗    |   ✅");
console.log("Multi-line (raw)  |   ✗    |   ✗    |   ✅");
console.log("' inside          |   \\'   |   ✅   |   ✅");
console.log('" inside          |   ✅   |   \\"   |   ✅');
console.log("Tagged templates   |   ✗    |   ✗    |   ✅");
