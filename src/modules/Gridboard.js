import { Component } from "../Component";
import { coordParseReverse } from "../utils/coordParseReverse";
import { isAlive } from "../utils/isAlive";
import { conwayLogicHandler } from "../utils/conwayLogicHandler";
import { checkNeighbors, checkNumNeighbors } from "../utils/checkNeighbors";

export class Gridboard extends Component {
  constructor(type, id) {
    super(type, id);
    this.array = [];
  }

  setBoardSize = (rows, cols) => {
    for (let i = 0; i < rows; i++) {
      this.array.push([]);

      for (let c = 0; c < cols; c++) {
        this.array[i].push(0);
      }
    }
  };

  drawBoard = () => {
    let gridContainer = document.getElementById(this.id);
    gridContainer.innerHTML = "";
    gridContainer.style.setProperty("--grid-rows", this.array.length);
    gridContainer.style.setProperty("--grid-cols", this.array[0].length);
    for (let c = 0; c < this.array.length; c++) {
      for (let i = 0; i < this.array[0].length; i++) {
        let cell = document.createElement("div");

        if (this.array[c][i] === 0) {
          cell.className = "unclicked";
        } else {
          cell.className = "clicked";
        }
        cell.id = `x${c + 1}y${i + 1}`;
        cell.innerText = checkNumNeighbors(c, i, this.array, isAlive);
        gridContainer.appendChild(cell);
      }
    }
  };

  initializeClickListeners = () => {
    let gridContainer = document.getElementById(this.id);
    gridContainer.addEventListener("click", (e) => {
      let id = e.target.id;

      let clickedCoord = coordParseReverse(id.toString());
      this.array[clickedCoord[0] - 1][clickedCoord[1] - 1] = 1;
      this.drawBoard();
    });
  };

  startGame = () => {

    let newArray = [];
    newArray.splice(0, newArray.length, ...this.array);

console.log(newArray);
    for (let x = 0; x < this.array.length; x++) {
      for (let y = 0; y < this.array.length; y++) {
        let numAlive = checkNumNeighbors(x, y, this.array);
        let newStatus = conwayLogicHandler(this.array[x][y], numAlive);
        newArray[x][y] = newStatus;
      }
    }

    this.array.splice(0, this.array.length, ...newArray);

    this.drawBoard();
  };

  resetGame = () => {
    this.setBoardSize(10, 10);
    this.drawBoard();
  };

  stepGame = () => {
    this.startGame();
  };
}
