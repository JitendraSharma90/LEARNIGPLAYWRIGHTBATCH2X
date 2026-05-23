// ============================================================
// JAVASCRIPT IDENTIFIERS - COMPLETE REFERENCE
// Rules + Reserved Words + Naming Conventions
// ============================================================

// ============================================================
// PART 1: IDENTIFIER RULES
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

// --- Current keywords (all reserved) ---
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

// --- Future reserved in strict mode ---
// let implements   // ERROR: future reserved keyword
// let interface    // ERROR: future reserved keyword
// let package      // ERROR: future reserved keyword
// let private      // ERROR: future reserved keyword
// let protected    // ERROR: future reserved keyword
// let public       // ERROR: future reserved keyword
// let static       // ERROR: future reserved keyword


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

// var CAN be redeclared (but don't do this!)
var y = 1;
var y = 2; // Works - bad practice


// ----------------------------------------------------------
// RULE 6: Global properties (technically valid, DON'T use)
// ----------------------------------------------------------
// let undefined = 1; // BAD: breaks global undefined
// let NaN = 1;       // BAD: breaks global NaN
// let Infinity = 1;  // BAD: breaks global Infinity
// let eval = 1;      // BAD: breaks global eval
// let arguments = 1; // BAD: breaks arguments in functions


// ============================================================
// PART 2: NAMING CONVENTIONS (CASES)
// ============================================================

// ----------------------------------------------------------
// 1. camelCase (most common for variables & functions)
//    - First word lowercase, subsequent words capitalized
//    - No separators between words
// ----------------------------------------------------------
let firstName         = "Jitendra";
let lastName          = "Sharma";
let userAge           = 30;
let isValidUser       = true;
let totalAmount       = 1500;
let getData           = () => {};
let calculateTotal    = (price, qty) => price * qty;

// ----------------------------------------------------------
// 2. PascalCase (for classes, constructors, React components)
//    - Every word starts with uppercase
//    - No separators between words
// ----------------------------------------------------------
class UserAccount     {}
class PersonModel     {}
class HttpRequest     {}
class ShoppingCart    {}
class OrderProcessor  {}

// ----------------------------------------------------------
// 3. snake_case (less common in JS, common in Python/PHP)
//    - All lowercase, words separated by underscores
// ----------------------------------------------------------
let first_name        = "Jitendra";
let last_name         = "Sharma";
let user_age          = 30;
let is_valid_user     = true;
let total_amount      = 1500;

// ----------------------------------------------------------
// 4. SCREAMING_SNAKE_CASE (for constants)
//    - All uppercase, words separated by underscores
// ----------------------------------------------------------
const MAX_RETRIES     = 3;
const API_BASE_URL    = "https://api.example.com";
const COLOR_RED       = "#FF0000";
const PI_VALUE        = 3.14159;
const DB_HOST         = "localhost";
const DEFAULT_TIMEOUT = 5000;

// ----------------------------------------------------------
// 5. kebab-case (INVALID in JavaScript - uses hyphens)
//    - All lowercase, words separated by hyphens
//    - Only valid in HTML attributes / CSS / file names
// ----------------------------------------------------------
// let first-name       // SYNTAX ERROR: hyphen is minus operator
// let user-age         // SYNTAX ERROR
// let is-valid-user    // SYNTAX ERROR
// let total-amount     // SYNTAX ERROR

// ----------------------------------------------------------
// 6. Train-Case / Header-Case (INVALID in JavaScript)
//    - Each word starts uppercase, separated by hyphens
//    - Hyphen makes it invalid as an identifier
// ----------------------------------------------------------
// let First-Name       // SYNTAX ERROR
// let User-Age         // SYNTAX ERROR
// let Total-Amount     // SYNTAX ERROR

// ----------------------------------------------------------
// 7. dot.case (INVALID in JavaScript)
//    - Words separated by dots
//    - Dot is the property accessor operator
// ----------------------------------------------------------
// let first.name       // SYNTAX ERROR: dot is property access
// let user.age         // SYNTAX ERROR

// ----------------------------------------------------------
// 8. flatcase (all lowercase, no separators)
// ----------------------------------------------------------
let firstname         = "Jitendra";
let lastname          = "Sharma";
let userage           = 30;

// ----------------------------------------------------------
// 9. UPPERCASE / UPPERFLAT (no separators, all caps)
// ----------------------------------------------------------
const MAXRETRIES      = 3;
const BASEURL         = "https://api.example.com";

// ----------------------------------------------------------
// 10. Naming prefixes for special use
// ----------------------------------------------------------

// $ prefix -> jQuery / DOM references
let $button           = document.querySelector('button');
let $container        = document.getElementById('main');
let $$items           = document.querySelectorAll('li');

// _ prefix -> "private" or internal variables
let _privateVar       = "internal";
let _tempValue        = 0;
let _unused           = null;


// ============================================================
// SUMMARY
// ============================================================
//  VALID START:  letter (a-z, A-Z), _, $
//  VALID BODY:   letter, digit, _, $
//  CASE:         sensitive (myVar ≠ myvar ≠ MyVar ≠ MYVAR)
//  UNICODE:      allowed (ñoño, 你好, Français)
//  INVALID START: digit, special chars (except _ $), space
//  INVALID BODY: space, hyphen, dot, @, #, !, %, ^, &, *, etc.
//  RESERVED:     47 keywords cannot be used as identifiers
//
//  Style              Example           Valid?   Used for
//  ─────────────      ─────────────     ───────  ─────────────────
//  camelCase          firstName          YES     variables, functions
//  PascalCase         FirstName          YES     classes, components
//  snake_case         first_name         YES     (rare / Python)
//  SCREAMING_SNAKE    FIRST_NAME         YES     constants
//  flatcase           firstname          YES     (avoid)
//  UPPERFLAT          FIRSTNAME          YES     (avoid)
//  kebab-case         first-name          NO     (hyphen = minus)
//  Train-Case         First-Name          NO     (hyphen = minus)
//  dot.case           first.name          NO     (dot = property)
// ============================================================

console.log("All identifier examples executed successfully!");
