//Chapter 1 Assignment:

alert("hello world!");

//let a =10;

console.log(" welcome to js ");
prompt("how are you?");

//console.log("");outputs a message to the web console.

/*prompt("Hi,how are you?");
prompt(" What is your name?");*/

console.log(Math.random()*100);
console.log(Math.random() *10);
console.log(Math.random()*5);

//console.log (Math.floor(Math.random () * 100 ));
//console.log(Math.floor(Math.random() *100 ));
console.log(Math.floor(Math.random() *100 ));
console.log(Math.floor(Math.random() *100 ));

let firstName ="Laraib";
firstName = "xyzz";

//Chapter 2 Assignment:
//practice exercise 2.1:

let str1 = 'Laurence';  
console.log(typeof str1);
let str2 = "Svekis";  
console.log(typeof str2);
let val1 = undefined; 
console.log(typeof val1);
let val2 = null; 
console.log(typeof val2);
let myNum = 1000; 
console.log(typeof myNum);

//Practice exercise 2.2:

let name = "Laraib";
console.log(name);

let age = 20;
console.log(age);

let boolean = "i can code javascript";
boolean = true;
console.log(boolean);


//practice exercise 2.4:

let a = 2;
let b = 4;
let c = 10;
console.log(a+b);
console.log(a/c);

// Replace the value of c with the modulus of c and b 
c %= b;
console.log (c);

// Pythagorean theorem:
//practice exercise 2.3

let d;
let e;
let f;

d = window.prompt("enter side d");
d = Number(d);

e = window.prompt("enter side e");
e = Number(e);

f = Math.pow(d,2) + Math.pow(e,2);
f = Math.sqrt(f);
console.log("side f",f);

//Chapter project :
//Miles-to-kilometers converter :


function calculateBMI() {
    // Get height and weight input values
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Check if the input values are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('bmiResult').textContent = 'Invalid input';
    } else {
        // Calculate BMI
        var heightMeters = height / 100;
        var bmi = weight / (heightMeters * heightMeters);

        // Display the BMI result
        document.getElementById('bmiResult').textContent = 'Your BMI is ' + bmi.toFixed(2);
    }
}




