import { Component } from "../Component";
import { conwayLogicHandler } from "../utils/conwayLogicHandler";
import { checkNumNeighbors } from "../utils/checkNeighbors";

export class Gridboard extends Component {
  constructor(type, id, props) {
    super(type, id);
    this.array = [];
    this.props = props;
  }

  setBoardSize = (rows, cols) => {
    console.log(this.props.size);
    for (let i = 0; i < rows; i++) {
      this.array.push([]);

      for (let c = 0; c < cols; c++) {
        this.array[i].push(0);
      }
    }
  };

  addLiveCell = (x, y) => {
    this.array[x - 1][y - 1] = 1;
  };

  startGame = () => {
    let newArray = [];

    for (let x = 0; x < this.array.length; x++) {
      newArray.push([]);
      for (let y = 0; y < this.array[0].length; y++) {
        let numAlive = checkNumNeighbors(x, y, this.array);
        let newStatus = conwayLogicHandler(this.array[x][y], numAlive);
        newArray[x].push(newStatus);
      }
    }

    this.array.splice(0, this.array.length, ...newArray);
  };

  resetGame = () => {
    this.array = [];
    this.setBoardSize(this.props.size, this.props.size);
  };

  stepGame = () => {
    this.startGame();
  };

  returnArray = () => {
    return this.array;
  };
}
