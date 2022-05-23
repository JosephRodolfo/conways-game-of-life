import "./styles/styles.scss";
import { Gridboard } from "./modules/Gridboard";
import { ControlPanel } from "./modules/ControlPanel";
import { coordParseReverse } from "./utils/coordParseReverse";

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

    // gridBoard.drawBoard();
    viewController.drawBoard(gridBoard.returnArray());
    initializeClickListeners();

    //adds event lisenters to buttons
    const htmlStartButton = document.getElementById("start-button");
    htmlStartButton.addEventListener("click", startGame);
    const htmlResetButton = document.getElementById("reset-button");
    htmlResetButton.addEventListener("click", resetGame);
    const htmlStepButton = document.getElementById("step-button");
    htmlStepButton.addEventListener("click", stepGame);
    const speedButton = document.getElementById("speed-button");
    speedButton.addEventListener("click", speedUp);
    const slowButton = document.getElementById("slow-button");
    slowButton.addEventListener("click", slowDown);
  };

  const initializeClickListeners = () => {
    let gridContainer=document.getElementById('gridboard');
    gridContainer.addEventListener("click", (e) => {
      console.log('clicked')
      let id = e.target.id;

      let clickedCoord = coordParseReverse(id.toString());
      console.log(clickedCoord)
      gridBoard.addLiveCell(clickedCoord[0], clickedCoord[1])
      viewController.drawBoard(gridBoard.returnArray())
    });
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
        gridBoard.startGame()
        viewController.drawBoard(gridBoard.returnArray());
      } else {
        clearInterval(turn);
      }
    }, interval);
  };
  const resetGame = () => {
    interval = 500;
    const htmlStartButton = document.getElementById("start-button");
    htmlStartButton.innerText = "Start";
    isPaused = false;
    gridBoard.resetGame()
    viewController.drawBoard(gridBoard.returnArray());
  };
  const stepGame = () => {
    gridBoard.stepGame();
    viewController.drawBoard(gridBoard.returnArray());
  };
  const slowDown = () => {
    interval += 100;
  };
  const speedUp = () => {
    if (interval > 100) {
      interval -= 100;
    } else {
      interval = 10;
    }
  };

  return {
    initializeGame: initializeGame,
  };
})();

const viewController = (function () {
  const drawBoard = (array) => {
    let gridContainer = document.getElementById("gridboard");
    gridContainer.innerHTML = "";
    gridContainer.style.setProperty("--grid-rows", array.length);
    gridContainer.style.setProperty("--grid-cols", array[0].length);
    for (let c = 0; c < array.length; c++) {
      for (let i = 0; i < array[0].length; i++) {
        let cell = document.createElement("div");

        if (array[c][i] === 0) {
          cell.className = "unclicked";
        } else {
          cell.className = "clicked";
        }
        cell.id = `x${c + 1}y${i + 1}`;
        gridContainer.appendChild(cell);
      }
    }
  };

  return {
    drawBoard: drawBoard,
  };
})();
gameController.initializeGame();
