var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    +")";

    css.textContent = body.style.background + ";"
}

function randomHexColor() {
    return ('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
}

function gradientRandom() {
    color1.value =  randomHexColor();
    color2.value =  randomHexColor();
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", gradientRandom);





