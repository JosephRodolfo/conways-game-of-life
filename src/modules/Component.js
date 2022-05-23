//generic component class,
//takes html element type and an object that can be filled with your chosen properties for the html object
export class Component {
  constructor(elementType, otherProps) {
    this.elementType = elementType;
    // this.innerHTML = innerHTML;
    for (const prop in otherProps) {
      this[prop] = otherProps[prop.toString()];
    }
  }

  //render function that just returns the html element, but also wraps it in a generated container div for
  //styling purposes
  render = () => {
    const element = document.createElement(this.elementType.toString());
    for (const prop in this) {
      element[prop] = this[prop.toString()];
    }
    const container = document.createElement("div");
    container.id = `${this.id}-container`;
    container.appendChild(element);

    return container;
  };
}
