//Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were introduced in ES6 (ECMAScript 2015) and are enclosed by backticks (` `) instead of single or double quotes.
let firstname = "Jitendra"; //String literal
let age = 30; //Number literal
let fullName = `Hi ${firstname} Sharma`; //Template literal
console.log(fullName); // Jitendra Sharma

/*
//real life example-01
let product = "Laptop";
let price = 1000;
let message = `The price of ${product} is $${price}.`; //Template literal with embedded expressions
console.log(message); // The price of Laptop is $1000.  

//real life example-02 (technical example)
const env = "production";
let configMessage = `Running in ${env} mode.`;
console.log(configMessage); // Running in production mode.

//real life example-03 (multi-line string)
let multiLineStr = `This is a multi-line string.
It can span multiple lines without needing escape characters.`;
console.log(multiLineStr);

*/

//real life example 04 Tech
//const env = "production";//if we want to change the environment to development we can change the value of env variable and it will reflect in the apiurl as well without changing the code of apiurl.
const env = "development"; //SyntaxError: Identifier 'env' has already been declared
const userID = 12345;
const apiurl = `https://api.example.com/${env}/users/${userID}`;
console.log(apiurl); // https://api.example.com/production/users/12345  

//playwrite example of locators
const rowindex = 1;
const columnindex = 2;
const cellLocator = `//table/tbody/tr[${rowindex}]/td[${columnindex}]`;
console.log(cellLocator); // //table/tbody/tr[1]/td[2]

//Logs example  
const testname = "Login Test";
const status = "Passed";
const logMessage = `Test: ${testname} - Status: ${status}`;
console.log(logMessage); // Test: Login Test - Status: Passed

//screnshot example
const timestamp = new Date().toISOString();
const screenshotPath = `screenshots/${testname}_${timestamp}.png`;
console.log(screenshotPath); // screenshots/Login Test_2024-06-30T12:34:56.789Z.png

//aPI payload example
const payload = {
    username: "testuser",
    password: "password123"
};
const payloadString = JSON.stringify(payload);
const apiPayload = `{"username": "${payload.username}", "password": "${payload.password}"}`;
console.log(apiPayload); // {"username": "testuser", "password": "password123"}

//API response example
const apiResponse = {
    status: "success",
    data: {
        id: 1,
        name: "John Doe"
    }
};
const responseMessage = `API Response: Status - ${apiResponse.status}, User ID - ${apiResponse.data.id}, Name - ${apiResponse.data.name}`;
console.log(responseMessage); // API Response: Status - success, User ID - 1, Name - John Doe   


//Simple Payload example
const npayload = `{
    "username": "testuser",
    "password": "password123",
    "timestamp": "${new Date().toISOString()}"
}`;
console.log(npayload); // { username: 'testuser', password: 'password123' }
