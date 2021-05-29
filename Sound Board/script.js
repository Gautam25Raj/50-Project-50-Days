const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopAudio();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopAudio() {
  sounds.forEach((sound) => {
    const aud = document.getElementById(sound);
    aud.pause();
    aud.currentTime = 0;
  });
}
