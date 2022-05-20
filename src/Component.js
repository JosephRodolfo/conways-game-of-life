//generic component class
export class Component {
  constructor(type, id = "") {
    this.type = type;
    this.id = id;
  }

  //render function that just returns the html element, but also wraps it in a generated container for 
  //styling purposes
  render = () => {
    const element = document.createElement(this.type.toString());
    element.id = this.id.toString();

    const container = document.createElement('div');
    container.id=(`${this.id}-container`)
    container.appendChild(element)

    return container;
  };
}
