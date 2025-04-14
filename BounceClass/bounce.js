import { Circle } from "./circleClass.js";

const listItems = document.querySelectorAll(".bounce_list-item");

listItems.forEach((item) => {
  const circleElem = item.querySelector(".item_circle");
  const colorInput = item.querySelector('input[type="text"]');
  const [radiusInput, borderInput] = item.querySelectorAll(
    'input[type="number"]'
  );

  const circle = new Circle(circleElem);

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
});
