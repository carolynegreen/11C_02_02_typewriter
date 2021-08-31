"use strict";
const typerwriter = document.querySelector(".typewritten").textContent;
let maxNumber;
let iterator;
let output;

init();

function init() {
  maxNumber = typerwriter.length;
  console.log(maxNumber);
  iterator = 0;
  loop();
}

function loop() {
  console.log("loop", iterator);
  iterator++;

  if (iterator < maxNumber) {
    setTimeout(loop, 200);
  }

  output = typerwriter.substring(iterator, 0);
  console.log(output);
  document.querySelector(".typewritten").textContent = output;
}
