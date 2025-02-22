const clicks = document.getElementById("tab");

clicks.onmouseover = function () {
    clicks.style.color = "purple"; // Fixed variable name
};



clicks.onclick = function () {
    let myBody =document.getElementById("body");
    let oldcolour =myBody.style.backgroundColor;
    answer =prompt("What color do you want to enter");
    myBody.style.backgroundColor = answer;
    while(oldcolour === currentColour);{
            let currentColour = myBody.style.backgroundColor;
            answer =prompt("What color do you want to enter");
        }
};

