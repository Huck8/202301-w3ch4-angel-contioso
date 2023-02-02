export default class Component {
  #parentElement: HTMLElement | undefined;
  protected element: HTMLElement;

  constructor(
    parentElement: HTMLElement | undefined,
    tag: string,
    cssClasses: string = undefined
  ) {
    this.#parentElement = parentElement;
    this.element = document.createElement(tag);
    this.element.className = cssClasses;
  }

  render() {
    this.#parentElement?.appendChild(this.element);
  }
}
