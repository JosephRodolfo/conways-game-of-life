import "./styles/styles.scss";
import { Gridboard } from "./modules/Gridboard";
import { ControlPanel } from "./modules/ControlPanel";

const gameController = (function () {

  const array = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],

  ];
  let gridBoard = new Gridboard("div", "gridboard");
  let controlPanel = new ControlPanel("div", "control-panel")

  let isPaused = false;
  let interval = 500;

  const initializeGame = () => {
    //initializes and draws board and initializes control panel
    gridBoard.setBoardSize(10, 10);
    document.body.appendChild(gridBoard.render());
    document.body.appendChild(controlPanel.render())
    controlPanel.initializeButtons();
    gridBoard.initializeClickListeners();
    gridBoard.drawBoard();


    //adds event lisenters to buttons
    const htmlStartButton = document.getElementById("start-button");
    htmlStartButton.addEventListener("click", startGame);
    const htmlResetButton = document.getElementById("reset-button");
    htmlResetButton.addEventListener("click", resetGame);
    const htmlStepButton = document.getElementById("step-button");
    htmlStepButton.addEventListener("click", stepGame);
  };

  const startGame = () => {
    isPaused = !isPaused;
    const htmlStartButton = document.getElementById("start-button");
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
  const stepGame = () => {
    gridBoard.stepGame();
  };

  return {
    initializeGame: initializeGame,
  };


})();

gameController.initializeGame();
