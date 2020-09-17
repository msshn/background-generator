var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var css = document.querySelector("h3");
var cssColor1 = "#ff0000";
var cssColor2 = "#ffff00";
var backgroundColor = "linear-gradient(to right, " + cssColor1 + ", " + cssColor2 + ")";

addIntoH3();

color1.addEventListener("input" , function(){
    cssColor1 = color1.value;
    changeBackgroundColor();
    addIntoH3();
})

color2.addEventListener("input" , function(){
    cssColor2 = color2.value;
    changeBackgroundColor();
    addIntoH3();
})

function changeBackgroundColor() {

    backgroundColor = "linear-gradient(to right, " + cssColor1 + ", " + cssColor2 + ")";
    body.style.background = backgroundColor;

}

function addIntoH3() {
    css.textContent = backgroundColor + ";";
}