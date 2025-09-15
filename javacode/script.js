// console.log("hello");
// console.log(a=20);

// var a=20;
// console.log(a);

// let a = 10;
// let b = 20;

// if (a > b) {
//     console.log("a is greater than b");
// } else if (a < b) {
//     console.log("a is less than b");
// } 

// const pi = 3.14159;
// console.log("The value of pi is:", pi);

// Function to add two numbers
// function addNumbers(a, b) {
//     return a + b;
// }

// const result = addNumbers(5, 7);
// console.log("The sum is:", result);

// Expression function
// const greet = function() {
//     console.log("Hello, World!");
// };
// greet(); 

// const greet = () => console.log("Hello, World!");
// greet();

// (function () {
//     console.log("This is an IIFE function!");
// })();

// setTimeout(function() {
//     console.log("This runs after 2 seconds");
// }, 1000);

// function greet(msg="java"){
//     console.log()
// }

// function msg() {
//     console.log("Hello, this is a normal message!");
// }
// msg(); 

function selectLanguage(lang) {
    if (lang === "english") {
        console.log("Hello, Welcome!");
    } else if (lang === "hindi") {
        console.log("नमस्ते, स्वागत है!");
    } else if (lang === "french") {
        console.log("Bonjour, bienvenue!");
    } else {
        console.log("Language not supported.");
    }
}

selectLanguage("english");
selectLanguage("hindi");
selectLanguage("french");
selectLanguage("spanish"); 