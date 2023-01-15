"use strict";

const screenValue = document.querySelector(".calc--screen");
const buttons = document.querySelectorAll("button");
const clear = document.querySelector(".clear--btn");

let calculation = [];
let accumulatedValue;

function calculate(button) {
  let value = button.textContent;
  console.log(value);
  if (value === "CLEAR") {
    calculation = [];
    screenValue.textContent = "0";
  } else if (value === "=") {
    screenValue.textContent = eval(accumulatedValue); //not the safest way of doing it!!
  } else {
    calculation.push(button.textContent);
    accumulatedValue = calculation.join("");
    screenValue.textContent = accumulatedValue;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button));
});
