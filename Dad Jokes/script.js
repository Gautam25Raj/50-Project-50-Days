const jokeEle = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const config = { headers: { Accept: "application/json" } };

function generateJoke() {
  fetch("https://icanhazdadjoke.com/", config)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return (jokeEle.innerHTML = data.joke);
    });

  console.log(fetch("https://icanhazdadjoke.com/", config));
}

generateJoke();
jokeBtn.addEventListener("click", generateJoke);
