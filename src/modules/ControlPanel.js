import { Component } from "./Component";

export class ControlPanel extends Component {
  constructor(type, id) {
    super(type, id);
  }
  initializeButtons = () => {
    let controlPanel = document.getElementById("control-panel");
    let startButton = new Component("button", {
      id: "start-button",
      innerHTML: "Start",
    });
    let resetButton = new Component("button", {
      id: "reset-button",
      innerHTML: "Reset",
    });
    let stepButton = new Component("button", {
      id: "step-button",
      innerHTML: "Step",
    });
    let speedButton = new Component("button", {
      id: "speed-button",
      innerHTML: "Speed up",
    });
    let slowButton = new Component("button", {
      id: "slow-button",
      innerHTML: "Slow down",
    });
    let slider = new Component("input", {
      id: "slider",
      min: 10,
      max: 50,
      type: "range",
    });

    controlPanel.appendChild(startButton.render());
    controlPanel.appendChild(resetButton.render());
    controlPanel.appendChild(stepButton.render());
    controlPanel.appendChild(speedButton.render());
    controlPanel.appendChild(slowButton.render());
    controlPanel.appendChild(slider.render());
  };
}
