import Component from "../Component/Component.js";

export default class Header extends Component {
  #text: string;

  constructor(
    text: string,
    parentElement: HTMLElement | undefined,
    cssClasses = ""
  ) {
    super(parentElement, "Header", cssClasses);
    this.#text = text;
  }

  render(): void {
    super.render();
    this.element.textContent = `<h1>${this.#text}</h1>}`;
  }
}
