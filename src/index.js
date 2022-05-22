import "./styles/styles.scss";
import { Gridboard } from "./modules/Gridboard";
import { ControlPanel } from "./modules/ControlPanel";

const gameController = (function () {
  let boardSize = 50;
  let gridBoard = new Gridboard("div", "gridboard", { size: boardSize });
  let controlPanel = new ControlPanel("div", "control-panel");

  let isPaused = false;
  let interval = 500;

  const initializeGame = () => {
    //initializes and draws board and initializes control panel
    gridBoard.setBoardSize(boardSize, boardSize);
    document.body.appendChild(gridBoard.render());
    document.body.appendChild(controlPanel.render());
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

    let turn = setInterval(function () {
      if (isPaused) {
        gridBoard.startGame();
      } else {
        clearInterval(turn);
      }
    }, interval);
  };
  const resetGame = () => {
    isPaused = false;
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
