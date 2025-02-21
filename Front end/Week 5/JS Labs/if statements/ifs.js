let num = 5;
if (num>0){
    console.log("the number is positive.");
}

let isRunning = true;
if (isRunning){
    console.log("Don't forget your umbrella!");
}

let age = 18;
if (age>=18){
    console.log("You are eligible to vote");
}

//If-else Statement
let number = 7;
if (number % 2 == 0){
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}

//else-if
let score = 75;
if (score >= 80){
    console.log("you got an A");

}
else if (score >=60){
    console.log("You got a B.");
}

else{
    console.log("you need to improve");

}

// Nested If Statements

let numbs = -3;
if (numbs>=0){
    if (numbs === 0){
        console.log("The number is zero");
    }
    else{
        console.log("The number is positive");
    }
}
else{
    console.log("The number is negative");
}