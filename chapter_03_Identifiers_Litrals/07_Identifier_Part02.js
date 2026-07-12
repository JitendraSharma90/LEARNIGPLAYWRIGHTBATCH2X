var name = "Jitendra Sharma";

//Camel Case Notation of below example is firstName, lastName and fullName
var firstName = "Jitendra";
var lastName = "Sharma";
var fullName = "Jitendra Sharma";

//Pascal Case Notation of below example is FirstName, LastName and FullName
var FirstName = "Jitendra";
var LastName = "Sharma";
var FullName = "Jitendra Sharma";

//Snake Case Notation of below example is first_name, last_name and full_name   
var firs_tname = "Jitendra";
var last_name = "Sharma";
var full_name = "Jitendra Sharma";

//Kebab Case Notation of below example is first-name, last-name and full-name
//var first-name = "Jitendra";
//var last-name = "Sharma";
//var full-name = "Jitendra Sharma";  //Invalid Identifier because of - (hyphen) symbol 

/**
 *  Edit chapter_02_javasript_concept\07_Identifier_Part02.js
// ============================================================
// JAVASCRIPT NAMING CONVENTIONS (CASES)
// Different casing styles used for identifiers
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
// 10. Mixed case styles in action
// ----------------------------------------------------------
// camelCase for variables
let customerName        = "John";
let customerEmail       = "john@example.com";
let orderTotal          = 99.99;
let isPremiumCustomer   = true;
// PascalCase for classes/constructors
class InvoiceGenerator  {}
class PaymentGateway    {}
// snake_case (often seen in JSON keys / DB fields)
let customer_name       = "John";
let customer_email      = "john@example.com";
let order_total         = 99.99;
// SCREAMING_SNAKE_CASE for configuration constants
const CUSTOMER_API_URL  = "/api/customers";
const MAX_LOGIN_ATTEMPTS = 5;
// ----------------------------------------------------------
// SUMMARY TABLE
// ----------------------------------------------------------
//  Style              Example              Valid in JS?   Used for
//  ─────────────      ───────────────      ────────────   ─────────────────
//  camelCase          firstName            ✅ YES         variables, functions
//  PascalCase         FirstName            ✅ YES         classes, components
//  snake_case         first_name           ✅ YES         (rare, Python style)
//  SCREAMING_SNAKE    FIRST_NAME           ✅ YES         constants
//  kebab-case         first-name           ❌ NO          (hyphen = minus)
//  Train-Case         First-Name           ❌ NO          (hyphen = minus)
//  dot.case           first.name           ❌ NO          (dot = property)
//  flatcase           firstname            ✅ YES         (ambiguous, avoid)
//  UPPERFLAT          FIRSTNAME            ✅ YES         (rare, avoid)
console.log("All naming case examples executed successfully!");
+ Thought: 32ms
Added to chapter_02_javasript_concept\07_Identifier_Part02.js with 9 casing styles:
Style	Example	Valid in JS?	Used for
camelCase	firstName	✅	variables, functions
PascalCase	FirstName	✅	classes, components
snake_case	first_name	✅	(rare, Python-style)
SCREAMING_SNAKE	FIRST_NAME	✅	constants
flatcase	firstname	✅	(avoid)
UPPERFLAT	FIRSTNAME	✅	(avoid)
kebab-case	first-name	❌	hyphen = minus operator
Train-Case	First-Name	❌	hyphen = minus operator
dot.case	first.name	❌	dot = property access
 */
/** 
Style	Example	Valid in JS?	Used for
camelCase	firstName	✅	variables, functions
PascalCase	FirstName	✅	classes, components
snake_case	first_name	✅	(rare, Python-style)
SCREAMING_SNAKE	FIRST_NAME	✅	constants
flatcase	firstname	✅	(avoid)
UPPERFLAT	FIRSTNAME	✅	(avoid)
kebab-case	first-name	❌	hyphen = minus operator
Train-Case	First-Name	❌	hyphen = minus operator
dot.case	first.name	❌	dot = property access

*/