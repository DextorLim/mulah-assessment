var A1 = document.getElementById("A1").textContent;
var A2 = document.getElementById("A2").textContent;
var A3 = document.getElementById("A3").textContent;
var A4 = document.getElementById("A4").textContent;
var A5 = document.getElementById("A5").textContent;
var A6 = document.getElementById("A6").textContent;
var A7 = document.getElementById("A7").textContent;
var A8 = document.getElementById("A8").textContent;
var A9 = document.getElementById("A9").textContent;
var A10 = document.getElementById("A10").textContent;
var A11 = document.getElementById("A11").textContent;
var A12 = document.getElementById("A12").textContent;
var A13 = document.getElementById("A13").textContent;
var A14 = document.getElementById("A14").textContent;
var A15 = document.getElementById("A15").textContent;
var A16 = document.getElementById("A16").textContent;
var A17 = document.getElementById("A17").textContent;
var A18 = document.getElementById("A18").textContent;
var A19 = document.getElementById("A19").textContent;
var A20 = document.getElementById("A20").textContent;

var Alpha = parseInt(A5) + parseInt(A20);
var Beta = parseInt(A15) / parseInt(A17);
var Charlie = parseInt(A13) * parseInt(A12);

console.log(Alpha);
console.log(Beta);
console.log(Charlie);

document.getElementById("Alpha").innerHTML = Alpha.toFixed(2);
document.getElementById("Beta").innerHTML = Beta.toFixed(2);
document.getElementById("Charlie").innerHTML = Charlie.toFixed(2);
