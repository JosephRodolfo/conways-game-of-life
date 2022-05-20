import { Component } from "../Component";

export class Gridboard extends Component {
    constructor(type, id) {
        super(type, id);
       }



     drawBoard = (rows, cols) => {
    
        console.log(this.id)
        let gridContainer = document.getElementById(this.id)
        gridContainer.style.setProperty("--grid-rows", rows);
        gridContainer.style.setProperty("--grid-cols", cols);
        for (let c = 0; c < rows; c++) {
          for (let i = 0; i < cols; i++) {
            let cell = document.createElement("div");
            cell.id = "b" + (c + 1) + "" + (i + 1);
    
            gridContainer.appendChild(cell);
    
          }
        }
      }

    
}
