// ================================================================
// Confusing Comparisons in JS — == vs === Gotchas
// File: 38_Confusing_Comparison.js
// Chapter 06 - Operators
// ================================================================

console.log("==================== CONFUSING == COMPARISONS ====================");
console.log("(These all return true — every single one)");
console.log("");

// ---- Category 1: Empty / Falsy values ----
console.log("--- 1. Empty / Falsy Confusion ---");
console.log('"" == false          =>', "" == false);          // true
console.log('"" == 0              =>', "" == 0);              // true
console.log("0 == false           =>", 0 == false);           // true
console.log('"" == []             =>', "" == []);             // true
console.log("0 == []              =>", 0 == []);              // true
console.log("[] == false          =>", [] == false);           // true
console.log('"\\n" == 0            =>', "\n" == 0);            // true
console.log('"\\t" == 0            =>', "\t" == 0);            // true
console.log('" " == 0             =>', " " == 0);             // true

// ---- Category 2: String to number coercion ----
console.log("\n--- 2. String / Number Coercion ---");
console.log('"1" == 1             =>', "1" == 1);             // true
console.log('"01" == 1            =>', "01" == 1);            // true
console.log('"0" == false         =>', "0" == false);         // true
console.log('"false" == false     =>', "false" == false);     // false (surprise!)
console.log('"true" == true       =>', "true" == true);       // false (surprise!)

// ---- Category 3: null and undefined ----
console.log("\n--- 3. null / undefined ---");
console.log("null == undefined    =>", null == undefined);    // true
console.log("null == 0            =>", null == 0);            // false (gotcha!)
console.log("null == false        =>", null == false);        // false
console.log("undefined == false   =>", undefined == false);   // false
console.log("undefined == 0       =>", undefined == 0);       // false
console.log("undefined == ''      =>", undefined == "");      // false

// ---- Category 4: Arrays and objects ----
console.log("\n--- 4. Array / Object Coercion ---");
console.log('[1] == 1             =>', [1] == 1);             // true  (array → "1" → 1)
console.log('[1] == "1"           =>', [1] == "1");           // true  (array → "1")
console.log('[1,2] == "1,2"       =>', [1, 2] == "1,2");     // true  (toString)
console.log('[] == ![]            =>', [] == ![]);            // true  (WAT!)
console.log('[] == 0              =>', [] == 0);              // true
console.log('[null] == ""         =>', [null] == "");          // true  ([null] → "" → 0)
console.log('[undefined] == ""    =>', [undefined] == "");     // true

// ---- Category 5: true/false ----
console.log("\n--- 5. Boolean Gotchas ---");
console.log('"0" == false         =>', "0" == false);         // true
console.log('"1" == true          =>', "1" == true);          // true
console.log('"true" == true       =>', "true" == true);       // false (string not coerced)
console.log('"false" == false     =>', "false" == false);     // false
console.log('[] == true           =>', [] == true);           // false
console.log('[1] == true          =>', [1] == true);          // true  (1 == true)

// ---- Category 6: NaN ----
console.log("\n--- 6. NaN Madness ---");
console.log("NaN == NaN           =>", NaN == NaN);           // false
console.log("NaN === NaN          =>", NaN === NaN);          // false
console.log("NaN == undefined     =>", NaN == undefined);     // false
console.log("NaN == false         =>", NaN == false);         // false
console.log("NaN == null          =>", NaN == null);          // false
console.log("typeof NaN === 'number' =>", typeof NaN === "number"); // true

// ---- Category 7: Exponent edge cases ----
console.log("\n--- 7. Exponential / Number Edges ---");
console.log("0 == '0'             =>", 0 == "0");             // true
console.log("0 == ''              =>", 0 == "");              // true
console.log("0 == ' '             =>", 0 == " ");             // true
console.log("1 == '1.'            =>", 1 == "1.");            // true
console.log("1 == '1.0'           =>", 1 == "1.0");           // true
console.log("1e0 == 1             =>", 1e0 == 1);             // true
console.log("1e1 == 10            =>", 1e1 == 10);            // true

// ---- Category 8: Infinity ----
console.log("\n--- 8. Infinity ---");
console.log("Infinity == Infinity     =>", Infinity == Infinity);     // true
console.log("Infinity === Infinity    =>", Infinity === Infinity);    // true
console.log("Infinity == true         =>", Infinity == true);         // false
console.log("Infinity == 1/0          =>", Infinity == 1 / 0);        // true
console.log("-Infinity == -Infinity   =>", -Infinity == -Infinity);   // true
console.log("Infinity - 1 == Infinity =>", Infinity - 1 == Infinity); // true (weird!)

// ---- Category 9: Explicit coercion tricks ----
console.log("\n--- 9. Coercion Tricks ---");
console.log("2 == '2'             =>", 2 == "2");             // true
console.log("2 === '2'            =>", 2 === "2");            // false
console.log("'2' == 2             =>", "2" == 2);             // true
console.log("true == 2            =>", true == 2);           // false (true → 1)
console.log("true == 1            =>", true == 1);            // true

// ---- Category 10: The infamous WAT cases ----
console.log("\n--- 10. Famous WAT Moments ---");
console.log("[] == ![]            =>", [] == ![]);            // true  (most infamous!)
console.log("[] == []             =>", [] == []);             // false (different refs)
console.log("{} == !{}            =>", {} == !{});            // false
console.log("{} == {}             =>", {} == {});             // false

// ---- Explanation ----
console.log("\n==================== EXPLANATIONS ====================");
console.log(`
WHY [] == ![] is true:
  Step 1: ![] → false        ([] is truthy, so ![] is false)
  Step 2: [] == false
  Step 3: "" == false         ([].toString() → "")
  Step 4: 0 == 0              ("" → 0, false → 0)
  Step 5: true ✅

WHY "false" == false is false:
  Step 1: "false" == false
  Step 2: Number("false") → NaN (fails to parse)
  Step 3: NaN == 0 → false ❌

WHY null == 0 is false:
  null never coerces to 0 in ==.
  null only == undefined and null.
`);

console.log("==================== TAKEAWAY ====================");
console.log("Never use ==. Always use ===.");
console.log("These confusing cases are exactly why === exists.");