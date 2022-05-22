import { Component } from "../Component";

export class ControlPanel extends Component {
  constructor(type, id) {
    super(type, id);
  }
  initializeButtons = () => {
    let controlPanel = document.getElementById("control-panel");
    let startButton = new Component("button", "start-button", "Start");
    let resetButton = new Component("button", "reset-button", "Reset");
    let stepButton = new Component("button", "step-button", "Step");
    let speedButton = new Component("button", "speed-button", "Speed up");
    let slowButton = new Component("button", "slow-button", "Slow down");
    controlPanel.appendChild(startButton.render());
    controlPanel.appendChild(resetButton.render());
    controlPanel.appendChild(stepButton.render());
    controlPanel.appendChild(speedButton.render());
    controlPanel.appendChild(slowButton.render());
  };
}
