// grab the screen
let screen = document.getElementById("screen");

// add values to screen
function addInput(val){
    if(screen.innerText === "0" && val !== "."){
        screen.innerText = val;
    } else {
        screen.innerText += val;
    }
}

// reset screen
function resetCalc(){
    screen.innerText = "0";
}

// remove last digit/char
function removeLast(){
    screen.innerText = screen.innerText.slice(0,-1) || "0";
}

// calculate result
function getResult(){
    try{
        // eval handles basic math
        screen.innerText = eval(screen.innerText);
    } catch(err){
        screen.innerText = "Error";
    }
}
