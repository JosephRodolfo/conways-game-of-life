import "./styles/styles.scss";
import { Gridboard } from "./modules/Gridboard";
import { ControlPanel } from "./modules/ControlPanel";
import { coordParseReverse } from "./utils/coordParseReverse";

const gameController = (function () {
  let boardSize = 50;
  let gridBoard = new Gridboard("div",  {id:"gridboard"}, { size: boardSize });
  let controlPanel = new ControlPanel("div", {id:"control-panel"});
  let interval = 500;
  let timer = {
    running: false,
    iv: 500,
    timeout: false,
    cb: function () {},
    start: function (cb, iv) {
      let elm = this;
      clearInterval(this.timeout);
      this.running = true;
      if (cb) this.cb = cb;
      if (iv) this.iv = iv;
      this.timeout = setTimeout(function () {
        elm.execute(elm);
      }, this.iv);
    },
    execute: function (e) {
      if (!e.running) return false;
      e.cb();
      e.start();
    },
    stop: function () {
      this.running = false;
    },
    set_interval: function (iv) {
      clearInterval(this.timeout);
      this.start(false, iv);
    },
  };

  const initializeGame = () => {
    //initializes and draws board and initializes control panel
    gridBoard.setBoardSize(boardSize, boardSize);
    document.body.appendChild(gridBoard.render());
    document.body.appendChild(controlPanel.render());
    controlPanel.initializeButtons();

    // gridBoard.drawBoard();
    viewController.drawBoard(gridBoard.returnArray());
    initializeClickListeners();

    //adds event lisenters to controlpanel
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
    const sizeSlider = document.getElementById("slider");
  

  };

  const initializeClickListeners = () => {
    let gridContainer = document.getElementById("gridboard");
    gridContainer.addEventListener("click", (e) => {
      let id = e.target.id;

      let clickedCoord = coordParseReverse(id.toString());
      gridBoard.addLiveCell(clickedCoord[0], clickedCoord[1]);
      viewController.drawBoard(gridBoard.returnArray());
    });
  };

  const startGame = () => {
    if (timer.running === false) {
      timer.start(() => {
        viewController.toggleStartButtonDisplay("Stop");
        gridBoard.startGame();
        viewController.drawBoard(gridBoard.returnArray());
      }, interval);
    } else {
      viewController.toggleStartButtonDisplay("Start");
      timer.stop();
    }
  };
  const resetGame = () => {
    interval = 500;
    viewController.toggleStartButtonDisplay("Start");
    timer.stop();
    gridBoard.resetGame();
    viewController.drawBoard(gridBoard.returnArray());
  };
  const stepGame = () => {
    gridBoard.stepGame();
    viewController.drawBoard(gridBoard.returnArray());
  };
  const slowDown = () => {
    interval += 100;
    timer.set_interval(interval);
  };
  const speedUp = () => {
    if (interval > 100) {
      interval -= 100;
    } else {
      interval = 10;
    }

    timer.set_interval(interval);
  };

  return {
    initializeGame: initializeGame,
  };
})();

const viewController = (function () {
  const toggleStartButtonDisplay = (state) => {
    const htmlStartButton = document.getElementById("start-button");
      htmlStartButton.innerText = state;
  };

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
    toggleStartButtonDisplay: toggleStartButtonDisplay,
  };
})();
gameController.initializeGame();
