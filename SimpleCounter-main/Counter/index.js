let add = document.getElementById("add");
let minus = document.getElementById("minus");
let num = document.getElementById("zero");
let number = 0;

add.addEventListener("click" , function (){
    number +=1;
    num.innerHTML= number;
});

minus.addEventListener("click" , function() {
    number -=1;
    num.innerHTML = number;
});