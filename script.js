"use strict";
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let dice = document.querySelector(".dice-img");
let dicePoints = document.querySelector(".live-points");
let currentPoints = document.querySelector(".current-points");
let hold = document.querySelector(".btn-hold");
let finalPoints = document.querySelector(".live-points");
let rollDice = document.querySelector(".btn-roll");
let btnNew = document.querySelector(".btn-new");

let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  finalPoints.textContent = 0;
  currentPoints.textContent = 0;
  document.getElementById("current-2-points").textContent = 0;
  document.getElementById("final-2-points").textContent = 0;
  player1.classList.add("player-active");
  player2.classList.remove("player-active");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  dice.classList.add("hidden");
};
init();
const switchPlayer = function () {
  document.querySelector(`.current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player-active");
  player2.classList.toggle("player-active");
};

console.log(playing);
rollDice.addEventListener("click", function () {
  if (playing) {
    dice.classList.remove("hidden");

    let diceNr = Math.trunc(Math.random() * 6) + 1;
    dice.src = `img/dice-${diceNr}.png`;
    if (diceNr !== 1) {
      currentScore += diceNr;
      document.querySelector(`.current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.score-${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else switchPlayer();
  }
});

btnNew.addEventListener("click", init);
