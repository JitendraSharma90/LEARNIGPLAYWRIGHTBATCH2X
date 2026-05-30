// ============================================================
// Lab Exercise: Number Types in JavaScript
// File: 26_Literals_Number_all.js
// Chapter 05 - Literals
// ============================================================

// -------------------------------------------------------
// 1. NUMBER TYPE — IEEE 754 double precision (64-bit)
// -------------------------------------------------------

// --- Integer Literals ---

const decimal = 42;
const hex = 0x2A;       // 42 in hexadecimal (prefix 0x)
const octal = 0o52;     // 42 in octal (prefix 0o)
const binary = 0b101010; // 42 in binary (prefix 0b)
const withSeparator = 1_000_000; // numeric separator (ES2021)

console.log("===== INTEGER LITERALS =====");
console.log("Decimal (42)         :", decimal);
console.log("Hex (0x2A)           :", hex);
console.log("Octal (0o52)         :", octal);
console.log("Binary (0b101010)    :", binary);
console.log("With separator (1_000_000):", withSeparator);

// --- Floating-point Literals ---

const float1 = 3.14;
const float2 = .5;        // leading decimal (same as 0.5)
const float3 = 2.;        // trailing decimal (same as 2.0)
const sci1 = 6.022e23;    // 6.022 × 10^23
const sci2 = 1.5e-10;     // 1.5 × 10^-10
const sci3 = 1e6;         // 1000000

console.log("\n===== FLOATING-POINT LITERALS =====");
console.log("3.14        :", float1);
console.log(".5          :", float2);
console.log("2.          :", float3);
console.log("6.022e23    :", sci1);
console.log("1.5e-10     :", sci2);
console.log("1e6         :", sci3);

// -------------------------------------------------------
// 2. SPECIAL NUMERIC VALUES
// -------------------------------------------------------

const infinityPos = Infinity;
const infinityNeg = -Infinity;
const notANumber = NaN;
const maxNum = Number.MAX_VALUE;
const minNum = Number.MIN_VALUE;
const maxSafeInt = Number.MAX_SAFE_INTEGER;
const minSafeInt = Number.MIN_SAFE_INTEGER;
const epsilon = Number.EPSILON;

console.log("\n===== SPECIAL NUMERIC VALUES =====");
console.log("Infinity            :", infinityPos);
console.log("-Infinity           :", infinityNeg);
console.log("NaN                 :", notANumber);
console.log("MAX_VALUE           :", maxNum);
console.log("MIN_VALUE           :", minNum);
console.log("MAX_SAFE_INTEGER    :", maxSafeInt);
console.log("MIN_SAFE_INTEGER    :", minSafeInt);
console.log("EPSILON             :", epsilon);
console.log("typeof NaN          :", typeof notANumber);

// --- How to get these values ---
console.log("\n--- How to get special values ---");
console.log("1 / 0              :", 1 / 0);     // Infinity
console.log("-1 / 0             :", -1 / 0);    // -Infinity
console.log("0 / 0              :", 0 / 0);     // NaN
console.log("Math.sqrt(-1)      :", Math.sqrt(-1)); // NaN
console.log("parseInt('abc')    :", parseInt("abc")); // NaN
console.log("Number('xyz')      :", Number("xyz")); // NaN

// -------------------------------------------------------
// 3. BigInt — Arbitrary precision integers (ES2020)
// -------------------------------------------------------

const bigInt1 = 123456789012345678901234567890n;
const bigInt2 = BigInt("9007199254740991123456789");
const bigIntHex = 0x1FFFFFFFFFFFFFn;
const bigIntOct = 0o77777777777777777n;
const bigIntBin = 0b11111111111111111111111111111111111111111111111111111n;

console.log("\n===== BigInt LITERALS =====");
console.log("BigInt decimal (n suffix):", bigInt1);
console.log("BigInt from string       :", bigInt2);
console.log("BigInt hex               :", bigIntHex);
console.log("BigInt octal             :", bigIntOct);
console.log("BigInt binary            :", bigIntBin);
console.log("typeof bigInt            :", typeof bigInt1);

// --- BigInt operations ---
const bi1 = 10n;
const bi2 = 3n;
console.log("\n--- BigInt Operations ---");
console.log("10n + 3n    :", bi1 + bi2);
console.log("10n - 3n    :", bi1 - bi2);
console.log("10n * 3n    :", bi1 * bi2);
console.log("10n / 3n    :", bi1 / bi2);   // truncates toward zero → 3n
console.log("10n % 3n    :", bi1 % bi2);
console.log("10n ** 3n   :", bi1 ** bi2);

// BigInt cannot mix with regular number
try {
  console.log(10n + 5);
} catch (e) {
  console.log("10n + 5 error:", e.message); // Cannot mix BigInt and other types
}

// Workaround: convert explicitly
console.log("10n + BigInt(5) :", 10n + BigInt(5));
console.log("Number(10n) + 5 :", Number(10n) + 5);

// -------------------------------------------------------
// 4. NUMBER METHODS & PROPERTIES
// -------------------------------------------------------

const num = 123.456;

console.log("\n===== NUMBER METHODS =====");
console.log("num.toFixed(2)          :", num.toFixed(2));  // "123.46"
console.log("num.toPrecision(4)      :", num.toPrecision(4)); // "123.5"
console.log("num.toExponential(2)    :", num.toExponential(2)); // "1.23e+2"
console.log("num.toString(16)        :", num.toString(16)); // "7b.74bc6a7ef9db"
console.log("num.toString(2)         :", num.toString(2));  // binary

// --- Rounding ---
console.log("\n===== ROUNDING =====");
console.log("Math.round(4.5)         :", Math.round(4.5));  // 5
console.log("Math.round(4.4)         :", Math.round(4.4));  // 4
console.log("Math.ceil(4.1)          :", Math.ceil(4.1));   // 5
console.log("Math.floor(4.9)         :", Math.floor(4.9));  // 4
console.log("Math.trunc(4.9)         :", Math.trunc(4.9));  // 4
console.log("Math.trunc(-4.9)        :", Math.trunc(-4.9)); // -4

// --- Parsing ---
console.log("\n===== PARSING =====");
console.log("parseInt('42')          :", parseInt("42"));
console.log("parseInt('42px')        :", parseInt("42px"));
console.log("parseInt('0xFF')        :", parseInt("0xFF"));
console.log("parseInt('101', 2)      :", parseInt("101", 2)); // 5 (binary)
console.log("parseFloat('3.14')      :", parseFloat("3.14"));
console.log("parseFloat('3.14abc')   :", parseFloat("3.14abc"));
console.log("Number('42')            :", Number("42"));
console.log("Number('  42  ')        :", Number("  42  "));
console.log("Number('')              :", Number(""));         // 0
console.log("Number('abc')           :", Number("abc"));      // NaN

// -------------------------------------------------------
// 5. FLOATING POINT PRECISION ISSUES
// -------------------------------------------------------

console.log("\n===== FLOATING POINT PRECISION =====");
console.log("0.1 + 0.2              :", 0.1 + 0.2);        // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3      :", 0.1 + 0.2 === 0.3); // false

// Workaround: use toFixed or rounding
const sum = 0.1 + 0.2;
console.log("Fixed sum              :", Number(sum.toFixed(1)));

// Use EPSILON for comparison
console.log("Epsilon compare         :", Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true

// -------------------------------------------------------
// 6. isNaN vs Number.isNaN
// -------------------------------------------------------

console.log("\n===== NaN CHECKING =====");
console.log("isNaN('abc')            :", isNaN("abc"));         // true (coerces)
console.log("Number.isNaN('abc')     :", Number.isNaN("abc"));  // false (no coercion)
console.log("isNaN(NaN)              :", isNaN(NaN));           // true
console.log("Number.isNaN(NaN)       :", Number.isNaN(NaN));    // true

// -------------------------------------------------------
// 7. isFinite & Number.isInteger
// -------------------------------------------------------

console.log("\n===== FINITE / INTEGER CHECKS =====");
console.log("isFinite(42)            :", isFinite(42));        // true
console.log("isFinite(Infinity)      :", isFinite(Infinity));  // false
console.log("isFinite('42')          :", isFinite("42"));      // true (coerces)
console.log("Number.isFinite('42')   :", Number.isFinite("42")); // false (no coercion)
console.log("Number.isInteger(42)    :", Number.isInteger(42));  // true
console.log("Number.isInteger(42.0)  :", Number.isInteger(42.0)); // true
console.log("Number.isInteger(42.5)  :", Number.isInteger(42.5)); // false
console.log("Number.isSafeInteger(9007199254740991)  :", Number.isSafeInteger(9007199254740991));  // true
console.log("Number.isSafeInteger(9007199254740992)  :", Number.isSafeInteger(9007199254740992));  // false

// -------------------------------------------------------
// 8. RANGE LIMITS
// -------------------------------------------------------

console.log("\n===== NUMBER RANGE =====");
console.log("Overflow (1e309)        :", 1e309);              // Infinity
console.log("Underflow (1e-324)      :", 1e-324);             // 5e-324
console.log("Underflow (1e-325)      :", 1e-325);             // 0
console.log("Negative 0             :", -0);                  // -0
console.log("-0 === 0               :", -0 === 0);            // true
console.log("Object.is(-0, 0)       :", Object.is(-0, 0));    // false

// -------------------------------------------------------
// SUMMARY - All number types cheat
// -------------------------------------------------------

console.log("\n========== SUMMARY ==========");
console.log("typeof 42               :", typeof 42);          // "number"
console.log("typeof 3.14             :", typeof 3.14);        // "number"
console.log("typeof NaN              :", typeof NaN);         // "number"
console.log("typeof Infinity         :", typeof Infinity);    // "number"
console.log("typeof 42n              :", typeof 42n);         // "bigint"
console.log("typeof BigInt(42)       :", typeof BigInt(42));  // "bigint"
