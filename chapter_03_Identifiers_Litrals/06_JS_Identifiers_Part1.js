var $ = 10;
var _a = 20;
var N = 30;
var name = "Jitendra";
var Name = "Sharma";
var Name_1= "Jitendra Sharma";
var Name$ = "Jitendra Kumar Sharma";
//var 123name = "Invalid Identifier
//var Name and address = "Invalid Identifier";
var name123 = "Valid Identifier";

console.log($);
console.log(_a);
console.log(N);
console.log(name);
console.log(Name);
console.log(Name_1);
console.log(Name$);
console.log(name123);
/**
 * Rules for JavaScript Identifiers:
 * 1. An identifier must start with a letter (a-z or A-Z), an underscore (_), or a dollar sign ($).
 * 2. After the first character, an identifier can contain letters, digits (0-9), underscores, or dollar signs.
 */
/** * Invalid Identifiers:
 * 1. An identifier cannot start with a digit (0-9).
 * 2. An identifier cannot contain spaces or special characters (except for underscores and dollar signs).
 * 3. An identifier cannot be a reserved keyword in JavaScript (e.g., var, let, const, if, else, etc.).
 */
/**
 * Valid Identifiers:
 * 1. $myVariable
 * 2. _myVariable           
 */
/**
 * - All valid start chars: letter, _, $, Unicode
- All invalid start chars: digits, special characters
- All valid body chars: letters, digits, _, $
- All invalid body chars: every special character (space, -, ., @, #, !, etc.)
- Every reserved keyword (47 total) that can't be used as variable names
- Case sensitivity demo with 4 different variables
- Redeclaration rules
- Global properties to avoid (undefined, NaN, Infinity)
- Naming conventions with examples (camelCase, PascalCase, SCREAMING_SNAKE_CASE, $-prefix, _-prefix)
- Interactive tester to test any variable name live
▣  Build · Big Pickle · 1m 1s
Write and give me every example of valid and invalid javascript identifier rules 
+ Thought: 1.1s
# Wrote chapter_03_Identifiers_Litrals\07_JS_Variable_Naming_Rules.js
// ============================================================
// JAVASCRIPT IDENTIFIER (VARIABLE) NAMING RULES
// Every valid & invalid example
// ============================================================
// ----------------------------------------------------------
// RULE 1: First character must be a letter, _ or $
// ----------------------------------------------------------
// --- VALID first characters ---
let name           = "Jitendra";     // Starts with lowercase letter
let Name           = "Sharma";       // Starts with uppercase letter
let _name          = "Private";      // Starts with underscore
let $name          = "Dollar";       // Starts with dollar sign
let _              = "underscore";   // Single underscore
let $              = "dollar";       // Single dollar sign
let ñoño           = "unicode";      // Unicode letter
let 你好           = "chinese";      // Unicode letter
let Français       = "french";       // Unicode letter
let A              = "upper";        // Single uppercase letter
let a              = "lower";        // Single lowercase letter
// --- INVALID first characters ---
// let 1name        // ERROR: Cannot start with digit
// let 2ndPlace     // ERROR: Cannot start with digit
// let 3            // ERROR: Cannot start with digit
// let 123          // ERROR: Cannot start with digit
// let 99problems   // ERROR: Cannot start with digit
// let !name        // ERROR: Cannot start with !
// let @name        // ERROR: Cannot start with @
// let #name        // ERROR: Cannot start with #
// let %name        // ERROR: Cannot start with %
// let ^name        // ERROR: Cannot start with ^
// let &name        // ERROR: Cannot start with &
// let *name        // ERROR: Cannot start with *
// let (name        // ERROR: Cannot start with (
// let )name        // ERROR: Cannot start with )
// let -name        // ERROR: Cannot start with -
// let +name        // ERROR: Cannot start with +
// let =name        // ERROR: Cannot start with =
// let [name        // ERROR: Cannot start with [
// let {name        // ERROR: Cannot start with {
// let |name        // ERROR: Cannot start with |
// let \name        // ERROR: Cannot start with backslash
// let :name        // ERROR: Cannot start with :
// let ;name        // ERROR: Cannot start with ;
// let "name        // ERROR: Cannot start with "
// let 'name        // ERROR: Cannot start with '
// let <name        // ERROR: Cannot start with <
// let >name        // ERROR: Cannot start with >
// let ,name        // ERROR: Cannot start with ,
// let .name        // ERROR: Cannot start with .
// let ?name        // ERROR: Cannot start with ?
// let /name        // ERROR: Cannot start with /
// let ~name        // ERROR: Cannot start with ~
// let `name        // ERROR: Cannot start with `
// let name name    // ERROR: Cannot have space
// ----------------------------------------------------------
// RULE 2: After first char, can contain letters, digits, _ or $
// ----------------------------------------------------------
// --- VALID body characters ---
let myVar1         = "ok";            // letters + digit
let my_var         = "ok";            // underscore in middle
let my$var         = "ok";            // dollar in middle
let _123           = "ok";            // digits after underscore
let $123_456       = "ok";            // mixed body chars
let myVar99_$$     = "ok";            // letters + digits + _ $
let abc123         = "ok";            // letters then digits
let _a_b_c_        = "ok";            // underscores only
let $$$            = "ok";            // dollars only
let data_2025      = "ok";            // underscore with digits
let user1_name2    = "ok";            // mixed throughout
// --- INVALID body characters ---
// let my-var       // ERROR: hyphen (-) not allowed
// let my var       // ERROR: space not allowed
// let first.name   // ERROR: dot (.) not allowed
// let my@var       // ERROR: @ not allowed
// let my#var       // ERROR: # not allowed
// let my!var       // ERROR: ! not allowed
// let my%var       // ERROR: % not allowed
// let my^var       // ERROR: ^ not allowed
// let my&var       // ERROR: & not allowed
// let my*var       // ERROR: * not allowed
// let my(var       // ERROR: ( not allowed
// let my)var       // ERROR: ) not allowed
// let my+var       // ERROR: + not allowed
// let my=var       // ERROR: = not allowed
// let my{var       // ERROR: { not allowed
// let my}var       // ERROR: } not allowed
// let my[var       // ERROR: [ not allowed
// let my]var       // ERROR: ] not allowed
// let my|var       // ERROR: | not allowed
// let my\var       // ERROR: \ not allowed
// let my:var       // ERROR: : not allowed
// let my;var       // ERROR: ; not allowed
// let my"var       // ERROR: " not allowed
// let my'var       // ERROR: ' not allowed
// let my<var       // ERROR: < not allowed
// let my>var       // ERROR: > not allowed
// let my,var       // ERROR: , not allowed
// let my?var       // ERROR: ? not allowed
// let my/var       // ERROR: / not allowed
// let my~var       // ERROR: ~ not allowed
// let my`var       // ERROR: backtick not allowed
// ----------------------------------------------------------
// RULE 3: Reserved keywords cannot be variable names
// ----------------------------------------------------------
// All current keywords:
// let await        // ERROR: reserved keyword
// let break        // ERROR: reserved keyword
// let case         // ERROR: reserved keyword
// let catch        // ERROR: reserved keyword
// let class        // ERROR: reserved keyword
// let const        // ERROR: reserved keyword
// let continue     // ERROR: reserved keyword
// let debugger     // ERROR: reserved keyword
// let default      // ERROR: reserved keyword
// let delete       // ERROR: reserved keyword
// let do           // ERROR: reserved keyword
// let else         // ERROR: reserved keyword
// let enum         // ERROR: reserved keyword
// let export       // ERROR: reserved keyword
// let extends      // ERROR: reserved keyword
// let false        // ERROR: reserved keyword
// let finally      // ERROR: reserved keyword
// let for          // ERROR: reserved keyword
// let function     // ERROR: reserved keyword
// let if           // ERROR: reserved keyword
// let import       // ERROR: reserved keyword
// let in           // ERROR: reserved keyword
// let instanceof   // ERROR: reserved keyword
// let let          // ERROR: reserved keyword
// let new          // ERROR: reserved keyword
// let null         // ERROR: reserved keyword
// let return       // ERROR: reserved keyword
// let super        // ERROR: reserved keyword
// let switch       // ERROR: reserved keyword
// let this         // ERROR: reserved keyword
// let throw        // ERROR: reserved keyword
// let true         // ERROR: reserved keyword
// let try          // ERROR: reserved keyword
// let typeof       // ERROR: reserved keyword
// let var          // ERROR: reserved keyword
// let void         // ERROR: reserved keyword
// let while        // ERROR: reserved keyword
// let with         // ERROR: reserved keyword
// let yield        // ERROR: reserved keyword
// Future reserved in strict mode:
// let implements   // ERROR: future reserved
// let interface    // ERROR: future reserved
// let package      // ERROR: future reserved
// let private      // ERROR: future reserved
// let protected    // ERROR: future reserved
// let public       // ERROR: future reserved
// let static       // ERROR: future reserved
// ----------------------------------------------------------
// RULE 4: Case sensitivity
// ----------------------------------------------------------
let myvar = "lowercase v";
let myVar = "uppercase V";
let MyVar = "uppercase M";
let MYVAR = "all uppercase";
console.log(myvar, myVar, MyVar, MYVAR); // All 4 are different!
// ----------------------------------------------------------
// RULE 5: No redeclaration with let/const in same scope
// ----------------------------------------------------------
// let x = 1;
// let x = 2; // ERROR: Identifier 'x' has already been declared
// var can be redeclared (but don't do this!)
var y = 1;
var y = 2; // Works (bad practice)
// ----------------------------------------------------------
// RULE 6: Global properties (technically valid, DON'T use)
// ----------------------------------------------------------
// let undefined = 1; // BAD: breaks global undefined
// let NaN = 1;       // BAD: breaks global NaN
// let Infinity = 1;  // BAD: breaks global Infinity
// let eval = 1;      // BAD: breaks global eval
// let arguments = 1; // BAD: breaks arguments in functions
// ----------------------------------------------------------
// NAMING CONVENTIONS (not rules, but standard practice)
// ----------------------------------------------------------
// camelCase -> variables, functions (RECOMMENDED)
let firstName     = "Jitendra";
let lastName      = "Sharma";
let userAge       = 25;
let isValidUser   = true;
let getData       = () => {};
// PascalCase -> classes, constructors
class UserAccount {}
class PersonModel {}
class HttpRequest {}
// SCREAMING_SNAKE_CASE -> constants
const MAX_RETRIES     = 3;
const API_BASE_URL    = "https://api.example.com";
const COLOR_RED       = "#FF0000";
const PI_VALUE        = 3.14159;
// $ prefix -> jQuery / DOM references
let $button       = document.querySelector('button');
let $container    = document.getElementById('main');
let $$items       = document.querySelectorAll('li');
// _ prefix -> "private" or internal variables
let _privateVar   = "internal";
let _tempValue    = 0;
let _unused       = null;
// ============================================================
// SUMMARY
// ============================================================
//  VALID START:  letter (a-z, A-Z), _, $
//  VALID BODY:   letter, digit, _, $
//  CASE:         sensitive (myVar ≠ myvar)
//  UNICODE:      allowed (ñoño, 你好)
//  INVALID:      digits at start, special chars (except _ $), spaces, hyphens
//  RESERVED:     47 keywords cannot be used
//  CONVENTION:   camelCase, PascalCase, SCREAMING_SNAKE_CASE
// ============================================================
console.log("All valid examples executed successfully!");
+ Thought: 156ms
Created chapter_03_Identifiers_Litrals\07_JS_Variable_Naming_Rules.js with every example organized by rule:
Rule	Valid Examples	Invalid Examples
First character	name, Name, _name, $name, _, $, ñoño, 你好	1name, @name, #name, !name, -name, etc. (30+ invalid starts)
Body characters	myVar1, my_var, my$var, _123, data_2025	my-var, my var, first.name, my@var, my#var, etc. (30+ invalid body chars)
Reserved keywords	—	All 47 keywords listed as invalid (let, const, if, return, class, etc.)
Case sensitivity	myvar, myVar, MyVar, MYVAR (all distinct)	—
Redeclaration	var y = 1; var y = 2;	let x = 1; let x = 2; (error)
Conventions	camelCase, PascalCase, SCREAMING_SNAKE_CASE, $-prefix, _-prefix	—
 */