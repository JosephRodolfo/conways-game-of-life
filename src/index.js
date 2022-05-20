import "./styles/styles.scss";
import { Component } from "./Component";
import { Gridboard } from "./modules/Gridboard";

const gameController = (function () {
  let gridBoard = new Gridboard("div", "gridboard");
  let startButton = new Component("button", "start-button", "Start");
  let resetButton = new Component("button", "reset-button", "Reset");

  let isPaused = false;
  let interval = 500;

  const initializeGame = () => {
    //initializes and draws board
    gridBoard.setBoardSize(30, 30);
    document.body.appendChild(gridBoard.render());
    gridBoard.initializeClickListeners(gridBoard.drawBoard);
    gridBoard.drawBoard();

    //initalizes start button
    document.body.appendChild(startButton.render());
    let htmlStartButton = document.getElementById("start-button");
    htmlStartButton.addEventListener("click", startGame);

    //initalizes reset button
    document.body.appendChild(resetButton.render());
    let htmlResetButton = document.getElementById("reset-button");
    htmlResetButton.addEventListener("click", resetGame);
  };

  const startGame = () => {
    isPaused = !isPaused;
    let htmlStartButton = document.getElementById("start-button");
    if (isPaused) {
      htmlStartButton.innerText = "Stop";
    } else {
      htmlStartButton.innerText = "Start";
    }

    setInterval(function () {
      if (isPaused) {
        gridBoard.startGame();
      }
    }, interval);
  };

  return {
    initializeGame: initializeGame,
  };

  const resetGame = () => {

    
  };
})();

gameController.initializeGame();
