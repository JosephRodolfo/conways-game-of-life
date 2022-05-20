import { Component } from "../Component";
import { coordParseReverse } from "../utils/coordParseReverse";
import { isAlive } from "../utils/isAlive";
import { conwayLogicHandler } from "../utils/conwayLogicHandler";

export class Gridboard extends Component {
  constructor(type, id) {
    super(type, id);
    this.array = [];
  }

  setBoardSize = (rows, cols) => {
    for (let i = 0; i < rows; i++) {
      this.array[i] = [];

      for (let c = 0; c < cols; c++) {
        this.array[i][c] = 0;
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

        gridContainer.appendChild(cell);
      }
    }
  };

  initializeClickListeners = (redrawCallback) => {
    let gridContainer = document.getElementById(this.id);
    gridContainer.addEventListener("click", (e) => {
      let id = e.target.id;

      let clickedCoord = coordParseReverse(id.toString());
      this.array[clickedCoord[0] - 1][clickedCoord[1] - 1] = 1;

      redrawCallback();
    });
  };

  startGame = () => {
    for (let c = 0; c < this.array.length; c++) {
      for (let i = 0; i < this.array.length; i++) {
        let numAlive =
          isAlive(c - 1, i - 1, this.array) +
          isAlive(c, i - 1, this.array) +
          isAlive(c + 1, i - 1, this.array) +
          isAlive(c - 1, i, this.array) +
          isAlive(c + 1, i, this.array) +
          isAlive(c - 1, i + 1, this.array) +
          isAlive(c, i + 1, this.array) +
          isAlive(c + 1, i + 1, this.array);

        this.array[c][i] = conwayLogicHandler(
          isAlive(c, i, this.array),
          numAlive
        );
      }
    }


    this.drawBoard()
  };
}
