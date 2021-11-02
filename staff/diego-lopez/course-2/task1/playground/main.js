console.log ("Starting javascript...");

console.log ("exercise 1, print name on console");
let myName = "Diego";
console.log (myName);

console.log ("exercise 2, print age");
let age = 32;
console.log (age);

console.log ("exercise 3, print ingasiAge difference");
let ignasiAge = 32;
let ageDiff = age - ignasiAge
console.log (ageDiff);

console.log ("exercise 4, Write a conditional that compares the variable with your age with the number 21.")
if (age>21) {
    console.log ("You are older than 21");
}
else {
    console.log ("You are not older than 21");
}


console.log ("exercise5, Write a conditional that compares your age with Ignasi's age.")
if (age>ignasiAge) {
    console.log ("Ignasi is younger than you");
}
else if (age=ignasiAge){
    console.log ("You have the same age as Ignasi");
}
else {
    console.log ("Ignasi is older than you");
}

console.log ("Arrays");


console.log ("exercise 1, Create an array with all the names of your class (including mentors).  Sort the array alphabetically")
let classmates = ["Mirko", "Domingo", "Marc", "Gines", "Joan"];

classmates.sort((x, y) => x.localeCompare(y));
console.log (classmates[0]);
console.log (classmates[classmates.length-1]);

for (i=0; i<classmates.length; i++){
    console.log (classmates[i]);
};

//this is an experiment of mine
let classmatesAges = [{name: "Mirko", age: 42},{name: "Domingo", age: 33}, {name: "Marc", age: 31}, {name: "Gines", age: 29}, {name: "Joan", age: 22}]

classmatesAges.sort ((x, y) => x.age - y.age);
console.log (classmatesAges);

console.log ("exercise 2, Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers. Change the loop to use a 'for' loop instead of a 'while' loop.")
let ages = [42, 33, 31, 29, 22];

for (i=0; i<ages.length; i++){
    console.log(ages[i]);
};

let counter = 0
while (counter<ages.length){
    console.log(ages[counter])
    counter ++;
};


counter = 0
for (i=0; i<ages.length; i++){
    if (ages[i] %2 ===0){
        console.log(ages[i]);
    };
};

i = 0
while(i<ages.length){
    if (ages[i] %2 ===0){
        console.log(ages[i]);
    };
    i++;
};

console.log ("exercise 3, Write a function which receives an array as a parameter and prints the lowest number in the array to the console.")
let numbers = [1,9,3,6]
counter = Infinity;

numbers.forEach(function(number){
    if (counter>number){
        counter = number;
    }
  })
console.log (counter);


/* esto también funciona, es de Domingo
function ex3(numbers){
    var numbers = [1, 2, 3];
    console.log(Math.min(...numbers));   
}
 
ex3();*/

console.log ("exercise 4, Write a function which receives an array as a parameter and prints the biggest number in the array to the console.")
numbers = [1,9,3,6];
counter = 0;

numbers.forEach(function(number){
    if (counter<number){
        counter = number;
    }
  })
console.log (counter);

/* y esta versión para el grande, con math.max en vez de math.min, de Domingo
function ex3(numbers){
    var numbers = [1, 2, 3];
    console.log(Math.max(...numbers));   
}
 
ex3();

o así, que no lo tienes que tener dentro de la función
function ex3(numbers){
    console.log(Math.max(...numbers));   
}
let Array = [1,2,3]
ex3(Array);*/

console.log ("exercise 5, Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console.")

function getNumber(array, index){
    console.log(array[index]);
}

let array = [3,6,67];
let index = 1;
getNumber (array, index);

console.log("exercise 6, Write a function which receives an array and only prints the values that repeat.")

array = [1,2,2,3,4,4];
function getDuplicate(){
    array.sort();
    for (i=0; i<array.length; i++){
        if (array[i] === array[i-1]){
            console.log(array[i]);
        };
    };
};

getDuplicate();

console.log("exercise 7, Write a simple JavaScript function to join all elements of the following array into a string.")

function sumColors (array){

}
//este ejercicio no consigo que me de "exactamente" como quiere el ejercicio. Mirko
myColor= ["Red", "Green", "White", "Black"];
console.log (myColor.join())
/*esto no va
myColor.forEach(function(color){
    color.toString()
    console.log(color)


})
*/ 
console.log ("strings")
console.log ("exercise 1, Write a JavaScript function that reverses a number.")

let numberArray = 32443
numberArray = (Array.from(String(numberArray), Number));

function reverseNumber(){
    numberArray.reverse()
    console.log(numberArray)
}
reverseNumber ()


/*esto si va
let numberArray = 32443
numberArray.toString()
numberArray.split("")
numberArray.reverse()
numberArray.join("")
console.log(numberArray)
*/

console.log ("exercise 2, Write a JavaScript function that returns a string in alphabetical order.")
let x = "webmaster"
x = Array.from(x)
x = x.reverse()
console.log (x.join())


console.log ("exercise 3, Write a JavaScript function that converts the first letter of every word to uppercase.")
x = "prince of persia";
x = x.split(" ");
let prova = x.map(function(element){
    console.log (element.charAt(0).toUpperCase() + element.substring(1));
    return element.charAt(0).toUpperCase() + element.substring(1);
}
).join(" ");
console.log(prova);
console.log(typeof prova);

console.log ("Write a JavaScript function that finds the longest word in a phrase.")
x = "Web Development Tutorial"
x = x.split(" ");
let result = ""

for (i=0; i<x.length; i++){
    console.log (x[i])
    let counter = x[i]
    if (counter.length> result.length){
        result=x[i]
    }
}
console.log (result)    