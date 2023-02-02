import Component from "../Component/Component.js";
import Header from "../Header/header.js";

export default class App extends Component {
  #children: Component[];
  constructor(parentElement: HTMLElement | undefined, cssClasses: string) {
    super(parentElement, "div", cssClasses);
    this.#children = [new Header("Series", this.element, "main-header")];
  }

  render(): void {
    super.render();
    this.#children.forEach((component) => {
      component.render();
    });
  }
}
