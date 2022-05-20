//generic component class
export class Component {
  constructor(type, id = "", innerHtml="") {
    this.type = type;
    this.id = id;
    this.innerHtml = innerHtml;
  }

  //render function that just returns the html element, but also wraps it in a generated container div for 
  //styling purposes
  render = () => {
    const element = document.createElement(this.type.toString());
    element.id = this.id.toString();
    element.innerHTML = this.innerHtml;

    const container = document.createElement('div');
    container.id=(`${this.id}-container`)
    container.appendChild(element)

    return container;
  };
}
