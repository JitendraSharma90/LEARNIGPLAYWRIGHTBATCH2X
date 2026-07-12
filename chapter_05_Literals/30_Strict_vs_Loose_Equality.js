// Lab: Strict Equality (===) vs Loose Equality (==) — Complete Guide
// File: 30_Strict_vs_Loose_Equality.js

// ===============================================================
// 1. DEFINITIONS
// ===============================================================
// Strict Equality (===) — No type coercion.
//   Returns true ONLY if both value AND type are identical.
//
// Loose Equality (==)   — Allows type coercion.
//   Converts operands to the same type before comparing.
//
// Best Practice: Always use ===. Use == only when you EXPLICITLY
// need coercion (almost never).

// ===============================================================
// 2. CORE DIFFERENCES
// ===============================================================
console.log("========== 1. TYPE CHECKING ==========");
console.log('"5" == 5  =>', "5" == 5);   // true  (string → number)
console.log('"5" === 5 =>', "5" === 5);  // false (string ≠ number)

console.log("========== 2. null vs undefined ==========");
console.log("null == undefined =>", null == undefined);   // true  (special rule)
console.log("null === undefined =>", null === undefined); // false (different type)

console.log("========== 3. Boolean coercion ==========");
console.log("0 == false  =>", 0 == false);   // true  (false → 0)
console.log("0 === false =>", 0 === false);  // false (number ≠ boolean)
console.log('"" == false =>', "" == false);  // true  ("" → 0, false → 0)
console.log('"" === false =>', "" === false); // false

console.log("========== 4. NaN (never equal) ==========");
console.log("NaN == NaN  =>", NaN == NaN);   // false
console.log("NaN === NaN =>", NaN === NaN);  // false
console.log("Number.isNaN(NaN) =>", Number.isNaN(NaN)); // ✅ correct way

console.log("========== 5. Object reference ==========");
console.log("{} == {} =>", {} == {});         // false (different memory)
console.log("{} === {} =>", {} === {});        // false
const x = { id: 1 };
const y = x;
console.log("same ref x === y =>", x === y); // true

// ===============================================================
// 3. COMPARISON TABLE
// ===============================================================
console.log("\n========== COMPARISON TABLE ==========");
console.log("Expression         | ==        | ===       | Correct?");
console.log("-------------------|-----------|-----------|---------");

const cases = [
  [5, "5"],
  [0, false],
  [1, true],
  [null, undefined],
  [undefined, null],
  ["", false],
  [0, ""],
  [false, "false"],
  [NaN, NaN],
  [[], false],
  [[], 0],
  [null, 0],
  [undefined, 0],
  [Infinity, true],
  [" ", false],
  ["\n", 0],
  [[1], 1],
  ["01", 1],
];

cases.forEach(([a, b]) => {
  const eq = a == b;
  const seq = a === b;
  const correct = seq ? "✅" : eq ? "⚠️  relies on coercion" : "✅";
  console.log(
    `${String(a).padEnd(12)} ${String(b).padEnd(10)} | ${String(eq).padEnd(9)} | ${String(seq).padEnd(9)} | ${correct}`
  );
});

// ===============================================================
// 4. REAL-LIFE IMPLEMENTATION EXAMPLES
// ===============================================================
console.log("\n========== REAL-LIFE EXAMPLES ==========");

// --- Example 1: Form validation (user input) ---
console.log("\n--- 1. Form Validation ---");
function validateAge(input) {
  // input comes as string from form field
  const age = Number(input);

  // ❌ BAD: loose equality can hide bugs
  if (input == 18) {
    console.log("  BAD: input == 18 matches '18', '', '18abc' etc.");
  }

  // ✅ GOOD: strict check after explicit conversion
  if (!isNaN(age) && age >= 18 && age <= 120) {
    console.log(`  GOOD: Age ${age} is valid`);
  } else {
    console.log(`  BAD: Invalid age "${input}"`);
  }
}
validateAge("25");      // valid
validateAge("abc");     // invalid

// --- Example 2: API response status handling ---
console.log("\n--- 2. API Status Check ---");
function handleResponse(status) {
  // API might return 200 (number) or "200" (string) or true

  // ❌ BAD: == treats 1, true, "1" the same
  if (status == true) {
    // This runs for status = 1, "1", true — dangerous!
  }

  // ✅ GOOD: explicit typed checks
  if (status === 200) {
    console.log("  GOOD: Exact match — status is number 200");
  } else if (status === "200") {
    console.log("  GOOD: String status — needs parsing");
  } else {
    console.log("  ERROR: Unexpected status type");
  }
}
handleResponse(200);
handleResponse("200");

// --- Example 3: Configuration flags ---
console.log("\n--- 3. Config Flags ---");
const config = {
  debug: false,
  retries: 0,
};

// ❌ BAD: == treats 0, false, "" as same
if (config.retries == false) {
  console.log("  BAD: retries is 0 but == says it's false!");
}

// ✅ GOOD: explicit type-safe check
if (config.retries === 0) {
  console.log("  GOOD: retries is exactly 0 — no confusion");
}
if (config.debug === false) {
  console.log("  GOOD: debug is false — exactly as intended");
}

// --- Example 4: User role / authorization ---
console.log("\n--- 4. Role Authorization ---");
function checkAccess(role) {
  // role might come as "admin" (string) or undefined (not logged in)

  // ❌ BAD: null == undefined == false == 0 == ""
  if (role == null) {
    console.log("  BAD: anonymous — but this also matches '', 0, false");
  }

  // ✅ GOOD: separate specific checks
  if (role === undefined) {
    console.log("  GOOD: User not logged in");
  } else if (role === null) {
    console.log("  GOOD: Role explicitly null");
  } else if (role === "admin") {
    console.log("  GOOD: Admin access granted");
  } else {
    console.log(`  GOOD: Role "${role}" — standard access`);
  }
}
checkAccess(undefined);
checkAccess("admin");

// --- Example 5: Switch statements (use === internally) ---
console.log("\n--- 5. Switch Statements ---");
function getDiscount(code) {
  // switch always uses === (strict)
  switch (code) {
    case 1:    // only matches number 1, not "1" or true
      return "10% off";
    case "VIP":
      return "20% off";
    default:
      return "No discount";
  }
}
console.log("  Discount(1):", getDiscount(1));      // 10% off
console.log('  Discount("1"):', getDiscount("1"));  // No discount (strict!)

// ===============================================================
// 5. SUMMARY
// ===============================================================
console.log("\n========== SUMMARY ==========");
console.log("==  → Coerces types, then compares (unpredictable)");
console.log("=== → Compares value AND type (safe & predictable)");
console.log("\n✅ ALWAYS use ===");
console.log("❌ NEVER use == (except comparing null/undefined together,");
console.log('     and even then: prefer "x === null || x === undefined")');