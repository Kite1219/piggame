"use strict";

const player0Score = document.getElementById("score--0");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const player1Score = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

function setTo0(number) {
  number.textContent = 0;
}

function activeScore() {
  const activeScore = document.querySelector(".player--active .current-score");
  return activeScore;
}

function playerScore() {
  const playerScore = document.querySelector(".player--active .score");
  return playerScore;
}

function playerChanger() {
  activeScore().textContent = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

setTo0(player0Score);
setTo0(player1Score);
dice.classList.add("hidden");

btnRoll.addEventListener("click", () => {
  if (Number(playerScore().textContent) < 100) {
    dice.classList.remove("hidden");
    const randomDiceNumber = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${randomDiceNumber}.png`;

    if (randomDiceNumber === 1) {
      playerChanger();
    } else {
      activeScore().textContent =
        Number(activeScore().textContent) + randomDiceNumber;
    }
  }
});

btnHold.addEventListener("click", () => {
  const playerActive = document.querySelector(".player--active");
  if (!playerActive.classList.contains("player--winner")) {
    playerScore().textContent =
      Number(playerScore().textContent) + Number(activeScore().textContent);
  }

  if (Number(playerScore().textContent) < 100) {
    playerChanger();
  } else {
    playerActive.classList.add("player--winner");
  }
});

btnNew.addEventListener("click", () => {
  const players = document.querySelectorAll(".player");
  const scores = document.querySelectorAll(".score");
  const currentScores = document.querySelectorAll(".current-score");

  players.forEach(link => {
    link.classList.remove("player--winner", "player--active");
  });
  player0.classList.add("player--active");
  scores.forEach(score => {
    score.textContent = 0;
  });

  currentScores.forEach(currentScore => {
    currentScore.textContent = 0;
  });
});
