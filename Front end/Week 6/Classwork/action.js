function addName(){
    let name = prompt("Please enter your name");
    let tag =document.getElementById("Name");
    tag.innerHTML=name;
    let buttons = document.getElementById("but1");
    buttons.style.backgroundColor = "green"
    
}

function changeText(){
    let para = document.getElementById("original");
    let button = document.getElementById("changer");
    let newText ="This is the changed text";
    let button1 = "Change Text";
    let button2 = "Change back to original";
    if (button.innerHTML == button1){
        button.innerHTML=button2        
        para.innerHTML=newText;
    }
    else{
        button.innerHTML=button1;     
        para.innerHTML="This is the original statment";
    }
}

function isValidColor(color) {
    return CSS.supports("color", color);
}

function backgroundChanger(){

    let colorInput = document.getElementById("Background").value;
    if (!colorInput.trim()) {
        document.body.style.backgroundColor = "yellow";
        alert("No input provided! Background set to yellow.");
    }
    else if (isValidColor(colorInput)) {
        document.body.style.backgroundColor = colorInput;
    } else {
        alert("Invalid color! Please enter a valid color name or code.");
    }
    
}

function fontCChanger(){
    let header = document.getElementById("header");
    let para = document.getElementById("original");
    let colors = document.getElementById("fontColor").value;
    if (!colors.trim()) {
        para.style.color = "red";
        header.style.color = "pink";
        alert("No input provided! font colour change to default");
    }
    else if (isValidColor(colors)) {
        para.style.color = colors;
        header.style.color = colors;
    } else {
        alert("Invalid color! Please enter a valid color name or code.");
    }
    

}

function fontPicks() {
    let fontpicker = document.getElementById("colorPicker2"); 
    let selectedColor = fontpicker.value; 
    document.getElementById("header").style.color = selectedColor;
    document.getElementById("original").style.color = selectedColor;

    document.getElementById("fontColor").value = selectedColor;
}

function backgroundPicks() {
    let backgroundpicker = document.getElementById("colorPicker1");
    let selectedColors = backgroundpicker.value; 
    document.getElementById("body").style.backgroundColor = selectedColors;

    document.getElementById("Background").value = selectedColors;
}
