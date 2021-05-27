const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("dragdrop", dragDrop);
});

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
  console.log("dragStart");
}

function dragEnd() {
  this.className = "fill";
  console.log("dragEnd");
}

function dragOver(e) {
  e.preventDefault();
  console.log("dragOver");
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
  console.log("dragEnter");
}

function dragLeave() {
  this.className = "empty";
  console.log("dragLeave");
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
  console.log("dragDrop");
}
