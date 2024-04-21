let showHeroesBtn = document.querySelector("#show-heroes");
let startFightBtn = document.querySelector("#start-fight");
let heroesContainer = document.querySelector(".heroes-container");
let showWinnerContainer = document.getElementById("show-winner");
showWinnerContainer.innerHTML = epicFight.findWinner();

showHeroesBtn.addEventListener("click", showHeroesFunc);

function showHeroesFunc() {
  showHeroesBtn.classList.add("d-none");
  startFightBtn.classList.add("d-block");
  heroesContainer.classList.add("d-flex");
}

startFightBtn.addEventListener("click", startFightFunc);

function startFightFunc() {
  startFightBtn.classList.remove("d-block");
  showWinnerContainer.classList.add("d-block");
}
