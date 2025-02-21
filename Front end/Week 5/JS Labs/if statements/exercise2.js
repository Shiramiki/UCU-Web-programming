let score;

function scoreChecker(myscore){
    if (myscore>= 70){
        console.log("Eligible for Admission");
    }
    else if (myscore<50){
        console.log("Not Eligible for Admission");
    }

    else{
        console.log("Admission on Probation");
    }
}

score = 55;
scoreChecker(score);