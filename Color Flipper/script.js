let colors = ["#32a39c", "#20cf81", "#f3f013", "#fc8936", "#f33450"]; //backgound colors
let btn = document.getElementById("btn"); //selector


btn.addEventListener("click", function(){
    let randomNumber = getColor();
    console.log(randomNumber);
    document.body.style.backgroundColor= colors[randomNumber];

});

btn.addEventListener("click", function(){
    let randomNumber = getColor();
    console.log(randomNumber);
    document.body.style.backgroundColor= colors[randomNumber];

});

function getColor() {
    return Math.floor(Math.random()*colors.length);
};



