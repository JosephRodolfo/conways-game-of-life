import "./styles/styles.scss";
import { Component } from "./Component";
import { Gridboard } from "./modules/Gridboard";
import { ControlPanel } from "./modules/ControlPanel";

const gameController = (function () {
  let gridBoard = new Gridboard("div", "gridboard");
  let controlPanel = new ControlPanel("div", "control-panel")

  let isPaused = false;
  let interval = 500;

  const initializeGame = () => {
    //initializes and draws board and initializes control panel
    gridBoard.setBoardSize(5, 5);
    document.body.appendChild(gridBoard.render());
    document.body.appendChild(controlPanel.render())
    controlPanel.initializeButtons();
    gridBoard.initializeClickListeners(gridBoard.drawBoard);
    gridBoard.drawBoard();


    //adds event lisenters to buttons
    let htmlStartButton = document.getElementById("start-button");
    htmlStartButton.addEventListener("click", startGame);

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
  const resetGame = () => {
    gridBoard.resetGame();

  };

  return {
    initializeGame: initializeGame,
  };


})();

gameController.initializeGame();
