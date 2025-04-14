import { Circle } from "./circleClass.js";

const circleElem = document.getElementById("circle-1");
const circle = new Circle(circleElem);

const colorInput = document.getElementById("circle-color-1");
const radiusInput = document.getElementById("circle-radius-1");
const borderInput = document.getElementById("circle-border-1");

function handleInput() {
  circle.updateElement({
    color: colorInput.value,
    radius: parseInt(radiusInput.value),
    border: parseInt(borderInput.value),
  });
}
colorInput.addEventListener("input", handleInput);
radiusInput.addEventListener("input", handleInput);
borderInput.addEventListener("input", handleInput);
