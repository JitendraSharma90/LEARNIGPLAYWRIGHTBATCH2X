let raja_age = 14;
let rj_will_goa = raja_age >= 20 ? "Yes" : "No";
console.log(rj_will_goa); // No

//real example
let actualstatuscode = 200;
let expectedstatuscode = 200;
let status = actualstatuscode === expectedstatuscode ? "Pass" : "Fail";
console.log(status); // Pass

//another real example
let actualtitle = "Google";
let expectedtitle = "Google";
let title_status = actualtitle === expectedtitle ? "Pass" : "Fail";
console.log(title_status); // Pass

//another real example
let actualurl = "https://www.google.com";
let expectedurl = "https://www.google.com";
let url_status = actualurl === expectedurl ? "Pass" : "Fail";
console.log(url_status); // Pass

//another real example
let actualusername = "admin";
let expectedusername = "admin";
let username_status = actualusername === expectedusername ? "Pass" : "Fail";
console.log(username_status); // Pass       

//another real example
let actualpassword = "admin123";
let expectedpassword = "admin123";
let password_status = actualpassword === expectedpassword ? "Pass" : "Fail";

//another real example
let actualmessage = "Login successful";
let expectedmessage = "Login successful";
let message_status = actualmessage === expectedmessage ? "Pass" : "Fail";
console.log(message_status); // Pass    

//another real example
let actualerror = "Invalid username or password";
let expectederror = "Invalid username or password";
let error_status = actualerror === expectederror ? "Pass" : "Fail";
console.log(error_status); // Pass

//another real example
let envornment = "production";
let apiurl = envornment === "production" ? "https://api.example.com/prod" : "https://api.example.com/dev";
console.log(apiurl); // https://api.example.com/prod

//another real example
let userrole = "admin";
let dashboard_access = userrole === "admin" ? "Full Access" : "Limited Access";
console.log(dashboard_access); // Full Access

//another real example
let is_logged_in = true;
let welcome_message = is_logged_in ? "Welcome back!" : "Please log in.";
console.log(welcome_message); // Welcome back!

//another real example
let temperature = 30;
let weather = temperature > 25 ? "Hot" : "Cold";
console.log(weather); // Hot

// another real example
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade); // B

//another real example of response time     
let responsetime = 1500; // in milliseconds
let responsetime_status = responsetime <= 2000 ? "Pass" : "Fail";
console.log(responsetime_status); // Pass

let condition = true;
let isSKHMale = condition ? "Yes" : "No";
console.log(isSKHMale); // Yes


//Nested ternary operator example
let age1 = 10;
let is_jk_will_goa = age1 > 30 ? "Yes, he will goa" : age1 > 20 ? "No, he will not goa" : age1 > 10 ? "Maybe, he will goa" : "No, he will not goa";
console.log(is_jk_will_goa); // No, he will not goa



let age2 = 25;
let category = age2 < 13 ? "Child" : age2 < 20 ? "Teenager" : age2 < 60 ? "Adult" : "Senior";
console.log(category); // Adult


let Jk_age = 19;
let is_Jk_drinking = Jk_age >= 21 ? (Jk_age >= 30 ? "Yes, he is drinking" : "No, he is not drinking") : " will not Go Goa";
console.log(is_Jk_drinking); // will not Go Goa




///-------------- multiple condition in ternary operator of status code of aPI test -----------------
let actualstatuscode1 = 900;
let category1 =
    actualstatuscode1 < 200 ? "Success" :
        actualstatuscode1 < 300 ? "Redirection" :
            actualstatuscode1 < 400 ? "Client Error" :
                actualstatuscode1 < 500 ? "Server Error" :
                    "Unknown Status Code";
console.log(category1); // Success

/*let age3 = 17;
let is_teenager = age3 >= 13 && age3 <= 19 ? "Yes, is a teenager" : "No, is not a teenager";
console.log(is_teenager); // Yes, is a teenager
*/

//Real example nested  ternary  with multiple conditions with more numbers
let score1 = 50;
let grade1 = score1 >= 90 ? "A" :
    score1 >= 80 ? "B" :
        score1 >= 70 ? "C" :
            score1 >= 60 ? "D" : "F";
console.log(grade1); // B

//Give me sytanx for netested ternary operator with multiple conditions and more numbers
let marks = 75;
let result = marks >= 90 ? "Excellent" :
    marks >= 80 ? "Good" :
        marks >= 70 ? "Average" :
            marks >= 60 ? "Below Average" : "Fail";
console.log(result); // Average     



//Maximum number between two numbers, okay, by using the ternary operator
let num1 = 10;
let num2 = 20;
let max = num1 > num2 ? num1 : num2;
console.log(max); // 20

/*
let num1 =50;
let result = num1>100? "num1 is greater than 100" : "num1 is less than or equal to 100";
console.log(result); // num1 is less than or equal to 100


*/
// maximum between the three numbers also by using ternary operator
let nnum1 = 100;
let nnum2 = 200;
let nnum3 = 150;
let max1 = nnum1 > nnum2 ? (nnum1 > nnum3 ? nnum1 : nnum3) : (nnum2 > nnum3 ? nnum2 : nnum3);
console.log(max1); // 200

