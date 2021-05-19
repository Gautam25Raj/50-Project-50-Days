const body = document.body;

const left = document.getElementById("left");
const right = document.getElementById("right");

const slides = document.querySelectorAll(".slide");
console.log(slides);

let activeSlide = 0;
setBgToBody();

function setActiveSlide() {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
  });

  slides[activeSlide].classList.add("active");
}

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

left.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) activeSlide = slides.length;
  setActiveSlide();
  setBgToBody();
  console.log("click");
});

right.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide >= slides.length) activeSlide = 0;
  setActiveSlide();
  setBgToBody();
  console.log("click");
});
