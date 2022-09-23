let numContainer1 = document.getElementById("num1")
let value1 = 0;
let numContainer2 = document.getElementById("num2")
let value2 = 0;
let btnTwo = document.querySelector(".two");
let btnOne = document.querySelector(".one");
let btnReset = document.querySelector(".reset");
var input = document.getElementById("input")
var skaicius = document.getElementById("skaicius")
btnOne.addEventListener("click", () => {
  value1++;
  numContainer1.textContent = value1;
});
btnTwo.addEventListener("click", () => {
  value2++;
  numContainer2.textContent = value2;
   
});
btnReset.addEventListener("click", () => {
  value1= 0
  value2= 0
  numContainer1.textContent = value1;
  numContainer2.textContent = value2;
  skaicius.innerText = input.value
  
});




