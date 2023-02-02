export default class Component {
  #element: HTMLElement;
  #parentElement: HTMLElement | undefined;

  constructor(
    parentElement: HTMLElement | undefined,
    tag: string,
    cssClasses: ""
  ) {
    this.#parentElement = parentElement;
    this.#element = document.createElement(tag);
    this.#element.className = cssClasses;
  }

  render() {
    this.#parentElement?.appendChild(this.#element);
  }
}
