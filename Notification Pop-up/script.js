const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = "Message 1";

button.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  console.log(1);
  const notif = document.createElement("div");
  notif.classList.add("toasts");

  notif.innerText = messages;

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
