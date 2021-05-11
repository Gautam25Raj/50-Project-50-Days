"use strict";

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progress = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
let active = 1;

next.addEventListener("click", () => {
  active++;

  // if (active > steps.length) {
  //   active = active - 1;
  // }
  console.log(active);
  update();
});

prev.addEventListener("click", () => {
  active--;

  if (active < 1) {
    active = 1;
  }

  update();
});

function update() {
  steps.forEach((step, i) => {
    if (i < active) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  progress.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";

  if (active == 1) {
    prev.disabled = true;
  } else if (active == steps.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
