var a = 10;



console.log(a);
var a = "Hello";


function HomePage() {
    console.log("This is Home Page");
    var a = 20; // This 'a' is different from the global 'a' due to function scope or locar scope of var
    console.log(a); // This will print 20, the value of 'a' inside the function
}
HomePage();

//var = fleeper, Not trustworthy,dalbadlu.