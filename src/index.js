import "./styles/styles.scss";
import { Component } from "./Component";
import { Gridboard } from "./modules/Gridboard";

let gridBoard = new Gridboard("div", "gridboard");
let startButton = new Component("button", "start-button", "Start");



document.body.appendChild(startButton.render());

gridBoard.setBoardSize(30, 30)
document.body.appendChild(gridBoard.render())
gridBoard.initializeClickListeners(gridBoard.drawBoard);
gridBoard.drawBoard();

let htmlStartButton = document.getElementById('start-button');
htmlStartButton.addEventListener('click', gridBoard.startGame)
