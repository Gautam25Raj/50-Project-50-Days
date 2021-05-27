const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //Where we clicked
    const x = e.clientX;
    const y = e.clientY;

    //Where Button is located
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    //Position relative to button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    button.appendChild(circle);
    
    setTimeout(() => circle.remove(), 500)
  });
});
