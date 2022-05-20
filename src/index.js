import "./styles/styles.scss";
import { Component } from "./Component";
import { Gridboard } from "./modules/Gridboard";

let nav = new Component("nav", "nav");
let gridBoard = new Gridboard("div", "gridboard");

document.body.appendChild(nav.render());
document.body.appendChild(gridBoard.render());
gridBoard.drawBoard(10, 10);
