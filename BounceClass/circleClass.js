export class Circle {
  constructor(element) {
    this.element = element;
  }

  updateElement({ color, radius, border }) {
    if (color) {
      this.element.style.backgroundColor = color;
    }
    if (radius) {
      const size = `${radius * 2}px`;
      this.element.style.width = size;
      this.element.style.height = size;
    }
    if (border !== undefined) {
      this.element.style.border = `${border}px solid black`;
    }
  }
}
