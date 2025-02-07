var numOne = 6
var numTwo = 11

var summ = numOne+ numTwo
var division = numOne/numTwo
var divv = Math.trunc(numTwo/numOne)
var remainder = numTwo%numOne


console.log(summ)
console.log(division)
console.log(divv)
console.log(remainder)

let firstName = "Rachel"

let welcome = `Welcome back ${firstName}` //string 

console.log("Welcome back " + " " + firstName)

// console.log(welcome)

console.log(firstName.toLocaleUpperCase)
console.log(firstName.length)
let isStudent = false
let isHall = true

console.log(isHall && isStudent)
console.log(isHall || isStudent)

let fruits = ["mangoes", "oranges", "grapes"]
console.log(fruits)
fruits.push("apples")
console.log(fruits)
fruits.pop()
// fruits.del("oranges")
console.log(fruits)
let myFruits = fruits.splice(1,1)
console.log(myFruits)


let signup = {
    "name" : "Rachel",
    "surname": "Isooba",
    "age":24,
    "country": "Uganda",
    "inClass": false,
    "phone": "0707125552",
    "email": "mbeizacokila@gmail.com",
    "password":"BeMyself2024"

}

console.log(signup)
console.log(signup.email)
signup["Username"] = "Shiramiki"
console.log(signup)

let a = 12345
let b = "12345"

console.log(a == b)
console.log(a===b)

let age = 30
if (age <13 && age >-1) {
    console.log("Child")
}

else if (age > 12  && age <20) {
    console.log("Teenager")
}

else if( age> 19 && age <30) {
    console.log("Youth")
}

else if (age >29) {
    console.log("Adult")

}

else{
    console.log("You have entered an invalid age")
}

let counter = 0
while (counter<100){
    console.log(counter)
    counter++
}

for (let count = 0; count<100; count++){
    console.log(count)
}


for(let n in fruits){
    console.log(n+"." + " " + fruits[n]);
    // console.log(n)
}

for(let n of fruits){
    console.log(n)
}

let day = 3

switch(day){
    case 1 : console.log("Monday");
            break;
    case 2 : console.log("Tueday");
            break;
    case 3 : console.log("Wednesday");
            break;

    case 4 : console.log("Thursday");
            break;
    case 5 : console.log("Friday");
            break;
    case 6 : console.log("Saturday");
            break;
    case 7 : console.log("Sunday");
            break;
    default: console.log("Thats your day");
            break;
}